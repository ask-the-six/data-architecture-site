(function () {
  const modal = document.getElementById("nested-row-detail-modal");
  const modalTitle = document.getElementById("nested-row-detail-modal-title");
  const modalSubtitle = document.getElementById("nested-row-detail-modal-subtitle");
  const modalGrid = document.getElementById("nested-row-detail-modal-grid");
  const modalSource = document.getElementById("nested-row-detail-modal-source");
  const modalClose = modal.querySelector(".modal-close");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildPlaceholderCell(text) {
    return `
      <div class="modal-layer-cell">
        <ul>
          <li>${escapeHtml(text)}</li>
        </ul>
      </div>
    `;
  }

  function renderModal(detailTitle, phase, parentTitle) {
    modalTitle.textContent = detailTitle;
    modalSubtitle.textContent = `${phase} detail for ${parentTitle}. Placeholder structure for future doctrine expansion.`;
    modalGrid.innerHTML = `
      <section class="modal-column" aria-label="${escapeHtml(detailTitle)} detail">
        <h3>Detail</h3>
        <div class="modal-row-grid">
          ${buildPlaceholderCell("Placeholder source detail")}
          ${buildPlaceholderCell("Placeholder transport detail")}
          ${buildPlaceholderCell("Placeholder storage detail")}
          ${buildPlaceholderCell("Placeholder analysis detail")}
          ${buildPlaceholderCell(`Placeholder decision detail for ${detailTitle}`)}
        </div>
      </section>
    `;
    modalSource.textContent = `Placeholder nested detail generated for ${detailTitle} (${phase}) inside ${parentTitle}.`;
  }

  function openModal(trigger) {
    const detailTitle = trigger.getAttribute("data-detail-title") || "Nested Detail";
    const phase = trigger.getAttribute("data-detail-phase") || "Detail";
    const parentTitle = trigger.getAttribute("data-detail-parent") || "Doctrine Item";

    renderModal(detailTitle, phase, parentTitle);
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest('[data-detail-modal="nested-row-detail-modal"]');
    if (!trigger) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openModal(trigger);
  });

  document.addEventListener("keydown", (event) => {
    const trigger = event.target.closest?.('[data-detail-modal="nested-row-detail-modal"]');
    if (trigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      event.stopPropagation();
      openModal(trigger);
      return;
    }

    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
})();
