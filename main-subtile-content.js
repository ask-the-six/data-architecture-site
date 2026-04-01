(function () {
  function normalizeKey(title) {
    return title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function renderColumn(target, label, items) {
    const content = items && items.length
      ? `<ul class="subtile-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`
      : `<ul class="subtile-list"><li>Placeholder</li></ul>`;

    target.innerHTML = `
      <div class="subtile-label">${label}</div>
      ${content}
    `;
  }

  function hydrateGroup(selector, data) {
    if (!data) {
      return;
    }

    document.querySelectorAll(selector).forEach((tile) => {
      const title = tile.querySelector("h2")?.textContent.trim() || "";
      const key = normalizeKey(title);
      const entry = data[key];

      if (!entry || !entry.rows) {
        return;
      }

      const items = tile.querySelectorAll(".subtile-item");
      if (items.length < 3) {
        return;
      }

      renderColumn(items[0], "Input", entry.rows.input);
      renderColumn(items[1], "Process", entry.rows.process);
      renderColumn(items[2], "Output", entry.rows.output);
    });
  }

  hydrateGroup(".adm-subtiles .subtile", window.admModalData);
  hydrateGroup(".mdmp-subtiles .subtile", window.mdmpModalData);
  hydrateGroup(".br-subtiles .subtile", window.brModalData);
  hydrateGroup(".rdsp-subtiles .subtile", window.rdspModalData);
  hydrateGroup(".operations-process-subtiles .subtile", window.operationsProcessModalData);
})();
