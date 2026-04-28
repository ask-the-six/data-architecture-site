(function () {
  const dataRegistry = {};

  function registerData(key, data) {
    dataRegistry[key] = data;
  }

  function getData(key) {
    return dataRegistry[key];
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizeKey(title) {
    return title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  const modalStack = [];
  const FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function pageContentEl() {
    return document.querySelector("main");
  }

  function setLayerInert(stackIndex, inert) {
    const target = stackIndex === 0 ? pageContentEl() : modalStack[stackIndex - 1]?.modal;
    if (!target) return;
    if (inert) target.setAttribute("inert", "");
    else target.removeAttribute("inert");
  }

  function openOverlay(modal) {
    if (modalStack.some((e) => e.modal === modal)) return;
    const previousFocus = document.activeElement;
    setLayerInert(modalStack.length, true);
    modalStack.push({ modal, previousFocus });
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    (modal.querySelector(".modal-close") || modal).focus();
  }

  function closeOverlay(modal) {
    const idx = modalStack.findIndex((e) => e.modal === modal);
    if (idx === -1) return;
    const [{ previousFocus }] = modalStack.splice(idx, 1);
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    setLayerInert(idx, false);
    previousFocus?.focus?.();
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      const top = modalStack[modalStack.length - 1];
      if (top) closeOverlay(top.modal);
      return;
    }
    if (event.key !== "Tab") return;
    const top = modalStack[modalStack.length - 1];
    if (!top) return;
    const focusables = top.modal.querySelectorAll(FOCUSABLE_SELECTOR);
    if (focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  function wireModalClose(modal) {
    const close = () => closeOverlay(modal);
    modal.querySelector(".modal-close")?.addEventListener("click", close);
    modal.addEventListener("click", (event) => {
      if (event.target !== modal) return;
      close();
    });
    return close;
  }

  function wireSubtile(tile, entry, openFn) {
    tile.classList.add("subtile--interactive");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");

    tile.addEventListener("click", () => openFn(entry));
    tile.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      openFn(entry);
    });
  }

  function wireSubtiles(selector, data, openFn) {
    document.querySelectorAll(selector).forEach((tile) => {
      const title = tile.querySelector("h2")?.textContent.trim() || "";
      const key = normalizeKey(title);
      const entry = data[key];
      if (!entry) {
        console.warn(`wireSubtiles: no data entry for "${key}" (selector "${selector}", title "${title}")`);
        return;
      }
      wireSubtile(tile, entry, openFn);
    });
  }

  function buildDecisionBar(text, title, label, resolveTrigger) {
    const modalTarget = resolveTrigger
      ? resolveTrigger(label, text)
      : "nested-row-detail-modal";
    const rowAttributes = ` data-detail-modal="${modalTarget}" data-detail-title="${escapeHtml(text)}" data-detail-phase="${escapeHtml(label)}" data-detail-parent="${escapeHtml(title)}" role="button" tabindex="0"`;
    const rowClasses = "modal-sub-block modal-row-span modal-sub-block--interactive";

    return `
      <div class="${rowClasses}"${rowAttributes}>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-anchor">${escapeHtml(text)}</div>
      </div>
    `;
  }

  function buildRow(label, items, title, resolveTrigger) {
    const rowContent = items && items.length
      ? items.map((item) => buildDecisionBar(item, title, label, resolveTrigger)).join("")
      : `
        <div class="modal-layer-cell"></div>
        <div class="modal-layer-cell"></div>
        <div class="modal-layer-cell"></div>
        <div class="modal-layer-cell"></div>
        <div class="modal-layer-cell"></div>
      `;

    return `
      <section class="modal-column" aria-label="${escapeHtml(title)} ${escapeHtml(label.toLowerCase())}">
        <h3>${escapeHtml(label)}</h3>
        <div class="modal-row-grid">
          ${rowContent}
        </div>
      </section>
    `;
  }

  function routeHptlOutput(label, text) {
    if (label !== "Output") return "nested-row-detail-modal";
    if (!/\bHPTL\b/i.test(text)) return "nested-row-detail-modal";
    return "hptl-detail-modal";
  }

  function initClassicModal(config) {
    const { dataKey, modalId, subtileSelector, resolveTrigger } = config;
    const data = getData(dataKey);
    if (!data) {
      console.warn(`initClassicModal: no data registered for "${dataKey}"`);
      return;
    }
    const modal = document.getElementById(modalId);
    if (!modal) {
      console.warn(`initClassicModal: no element with id "${modalId}"`);
      return;
    }
    const { subtitleDefault, entries } = data;
    const modalTitle = document.getElementById(`${modalId}-title`);
    const modalSubtitle = document.getElementById(`${modalId}-subtitle`);
    const modalGrid = document.getElementById(`${modalId}-grid`);
    const modalSource = document.getElementById(`${modalId}-source`);

    function openModal(entry) {
      modalTitle.textContent = entry.title;
      modalSubtitle.textContent = entry.subtitle || subtitleDefault;
      modalGrid.innerHTML = [
        buildRow("Input", entry.rows.input, entry.title, resolveTrigger),
        buildRow("Process", entry.rows.process, entry.title, resolveTrigger),
        buildRow("Output", entry.rows.output, entry.title, resolveTrigger)
      ].join("");
      modalSource.textContent = entry.source;
      openOverlay(modal);
    }

    wireModalClose(modal);
    wireSubtiles(subtileSelector, entries, openModal);
  }

  function wireTrigger(triggerSelector, openFn) {
    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(triggerSelector);
      if (!trigger) return;
      event.preventDefault();
      event.stopPropagation();
      openFn(trigger);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      const trigger = event.target.closest?.(triggerSelector);
      if (!trigger) return;
      event.preventDefault();
      event.stopPropagation();
      openFn(trigger);
    });
  }

  window.ModalUtils = {
    registerData,
    getData,
    escapeHtml,
    openOverlay,
    wireModalClose,
    wireTrigger,
    routeHptlOutput,
    initClassicModal,
  };
})();
