(function () {
  const M = window.ModalUtils;
  const hptlDetailData = M.getData("hptl");

  const modal = document.getElementById("hptl-detail-modal");
  const modalTitle = document.getElementById("hptl-detail-modal-title");
  const modalSubtitle = document.getElementById("hptl-detail-modal-subtitle");
  const modalContent = document.getElementById("hptl-detail-modal-content");
  const modalSource = document.getElementById("hptl-detail-modal-source");

  function buildDecisionsCell(items) {
    return `
      <div class="modal-layer-cell">
        <ul>
          ${items.map((item) => `<li>${M.escapeHtml(item)}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function buildRow(category) {
    const empty = `<div class="modal-layer-cell"></div>`;
    return `
      <section class="hptl-row" aria-label="${M.escapeHtml(category.heading)}">
        <h3>${M.escapeHtml(category.heading)}</h3>
        <div class="hptl-data-grid">
          ${empty}
          ${empty}
          ${empty}
          ${empty}
          ${buildDecisionsCell(category.decisions)}
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
        <div class="hptl-note">${M.escapeHtml(hptlDetailData.note)}</div>
      </div>
    `;
    modalSource.textContent = hptlDetailData.source;
  }

  function openModal() {
    renderModal();
    M.openOverlay(modal);
  }

  M.wireModalClose(modal);
  M.wireTrigger('[data-detail-modal="hptl-detail-modal"]', openModal);
})();
