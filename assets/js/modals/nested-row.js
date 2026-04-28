(function () {
  const M = window.ModalUtils;
  const modal = document.getElementById("nested-row-detail-modal");
  const modalTitle = document.getElementById("nested-row-detail-modal-title");
  const modalSubtitle = document.getElementById("nested-row-detail-modal-subtitle");
  const modalGrid = document.getElementById("nested-row-detail-modal-grid");
  const modalSource = document.getElementById("nested-row-detail-modal-source");

  function buildPlaceholderCell(text) {
    return `
      <div class="modal-layer-cell">
        <ul>
          <li>${M.escapeHtml(text)}</li>
        </ul>
      </div>
    `;
  }

  function renderModal(detailTitle, phase, parentTitle) {
    modalTitle.textContent = detailTitle;
    modalSubtitle.textContent = `${phase} detail for ${parentTitle}. Placeholder structure for future doctrine expansion.`;
    modalGrid.innerHTML = `
      <section class="modal-column" aria-label="${M.escapeHtml(detailTitle)} detail">
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
    M.openOverlay(modal);
  }

  M.wireModalClose(modal);
  M.wireTrigger('[data-detail-modal="nested-row-detail-modal"]', openModal);
})();
