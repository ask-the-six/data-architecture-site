(function () {
  const M = window.ModalUtils;

  const DOCTRINES = [
    {
      key: "adm",
      name: "ADM",
      order: [
        "framing-the-operational-environment",
        "framing-problems",
        "framing-solutions",
        "reframing",
      ],
    },
    {
      key: "mdmp",
      name: "MDMP",
      order: [
        "receipt-of-mission",
        "mission-analysis",
        "course-of-action-development",
        "course-of-action-analysis",
        "course-of-action-comparison",
        "course-of-action-approval",
        "orders-production-dissemination-and-transition",
      ],
    },
    {
      key: "br",
      name: "Battle Rhythm",
      groups: [
        {
          label: "Briefings & Sync",
          keys: [
            "commanders-update-briefing",
            "battle-update-briefing",
            "operations-synchronization",
          ],
        },
        {
          label: "Boards",
          keys: [
            "operations-assessment-board",
            "plans-synchronization-board",
            "sustainment-board",
            "targeting-board",
          ],
        },
        {
          label: "Running Estimates",
          keys: [
            "assessment-running-estimate",
            "civil-military-operations-running-estimate",
            "cyberspace-electromagnetic-activities-running-estimate",
            "information-collection-running-estimate",
            "information-operations-running-estimate",
            "knowledge-management-running-estimate",
            "protection-running-estimate",
            "sustainment-running-estimate",
            "targeting-running-estimate",
            "airspace-control-running-estimate",
          ],
        },
      ],
    },
    {
      key: "rdsp",
      name: "RDSP",
      order: [
        "compare-the-current-situation-to-the-order",
        "determine-that-a-decision-and-what-type-is-required",
        "develop-a-course-of-action",
        "refine-and-validate-the-course-of-action",
        "implement",
      ],
    },
    {
      key: "operations-process",
      name: "Operations Processes",
      order: [
        "fires-process",
        "efdi",
        "running-estimates",
      ],
    },
  ];

  function renderSubtile(entry, doctrineName) {
    const title = M.escapeHtml(entry.title);
    return `
      <section class="subtile" aria-label="${doctrineName} subtile ${title}">
        <h2>${title}</h2>
        <span class="subtile-cta" aria-hidden="true">View detail &rarr;</span>
      </section>
    `;
  }

  function renderKey(entries, key, doctrineName, doctrineKey) {
    const entry = entries[key];
    if (!entry) {
      console.warn(`matrix-renderer: missing entry "${key}" for doctrine "${doctrineKey}"`);
      return "";
    }
    return renderSubtile(entry, doctrineName);
  }

  function renderGroup(entries, group, doctrineName, doctrineKey) {
    const cards = group.keys.map((k) => renderKey(entries, k, doctrineName, doctrineKey)).join("");
    if (!group.label) return cards;
    return `
      <div class="subtile-group">
        <div class="subtile-group-label">${M.escapeHtml(group.label)}</div>
        <div class="subtile-group-cards">${cards}</div>
      </div>
    `;
  }

  function renderDoctrine({ key, name, order, groups }) {
    const container = document.querySelector(`.${key}-subtiles`);
    if (!container) return;
    const data = M.getData(key);
    if (!data?.entries) return;
    if (groups) {
      container.innerHTML = groups.map((g) => renderGroup(data.entries, g, name, key)).join("");
      return;
    }
    const keys = order || Object.keys(data.entries);
    container.innerHTML = keys.map((k) => renderKey(data.entries, k, name, key)).join("");
  }

  DOCTRINES.forEach(renderDoctrine);
})();
