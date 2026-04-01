(function () {
  const hptlDetailData = {
    title: "High-Payoff Target List (HPTL)",
    subtitle:
      "Focused drill-down from Fires Process > Output. This is a first-pass lifecycle representation so we can iterate on the best way to show HPTL doctrine.",
    source:
      "Current content is a representation scaffold for iteration. We can replace or expand it with doctrine-spanning HPTL references next.",
    categories: [
      {
        heading: "Origin",
        decisions: [
          "Candidate targets emerge from target development, running estimates, and commander priorities.",
          "Potential HPTs are tied back to the enemy capabilities or activities that most threaten mission accomplishment."
        ]
      },
      {
        heading: "Prioritize",
        decisions: [
          "Potential targets are weighed against the friendly scheme of maneuver and desired effects.",
          "The list is refined toward the targets that offer the greatest payoff if engaged."
        ]
      },
      {
        heading: "Approve",
        decisions: [
          "The HPTL is reviewed inside the targeting process and synchronized with guidance and decision support tools.",
          "This is where we can later show the exact doctrinal approval and publication touchpoints."
        ]
      },
      {
        heading: "Use",
        decisions: [
          "The approved HPTL informs detection, tracking, delivery, and assessment priorities.",
          "It connects to products like the AGM, TSS, and collection synchronization."
        ]
      },
      {
        heading: "Update",
        decisions: [
          "Assessment, BDA, and operational changes drive updates to the HPTL over time.",
          "This final column is a good place to represent revalidation or retirement in the next iteration."
        ]
      }
    ],
    note:
      "This popout is attached directly to the HPTL output box so we can experiment with the lifecycle view at the object level before deciding how deeply to embed it into the larger Fires Process model."
  };

  const modal = document.getElementById("hptl-detail-modal");
  const modalTitle = document.getElementById("hptl-detail-modal-title");
  const modalSubtitle = document.getElementById("hptl-detail-modal-subtitle");
  const modalContent = document.getElementById("hptl-detail-modal-content");
  const modalSource = document.getElementById("hptl-detail-modal-source");
  const modalClose = modal.querySelector(".modal-close");

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildCell(items) {
    if (!items || !items.length) {
      return `<div class="modal-layer-cell"></div>`;
    }

    return `
      <div class="modal-layer-cell">
        <ul>
          ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function buildRow(category) {
    return `
      <section class="hptl-row" aria-label="${escapeHtml(category.heading)}">
        <h3>${escapeHtml(category.heading)}</h3>
        <div class="hptl-data-grid">
          ${buildCell([])}
          ${buildCell([])}
          ${buildCell([])}
          ${buildCell([])}
          ${buildCell(category.decisions)}
        </div>
      </section>
    `;
  }

  function renderModal() {
    modalTitle.textContent = hptlDetailData.title;
    modalSubtitle.textContent = hptlDetailData.subtitle;
    modalContent.innerHTML = `
      <div class="hptl-master-label">HPTL</div>
      <div>
        <div class="hptl-row-stack">
          ${hptlDetailData.categories.map(buildRow).join("")}
        </div>
        <div class="hptl-note">${escapeHtml(hptlDetailData.note)}</div>
      </div>
    `;
    modalSource.textContent = hptlDetailData.source;
  }

  function openModal() {
    renderModal();
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest('[data-detail-modal="hptl-detail-modal"]');
    if (!trigger) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    openModal();
  });

  document.addEventListener("keydown", (event) => {
    const trigger = event.target.closest?.('[data-detail-modal="hptl-detail-modal"]');
    if (trigger && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      event.stopPropagation();
      openModal();
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
