(function () {
  const rdspModalData = {
    "compare-the-current-situation-to-the-order": {
      title: "Compare the Current Situation to the Order",
      source: "Source basis: FM 5.0, Planning and Orders Production (RDSP doctrinal sequence), with structured inputs/outputs inferred from the step purpose and Army doctrinal descriptions of execution and current operations.",
      rows: {
        input: [
          "Current order or plan",
          "Commander's intent and guidance",
          "Running estimates",
          "Current situation reports and updates",
          "Decision support tools and CCIRs"
        ],
        process: [
          "Review the current order and commander's guidance",
          "Compare actual conditions to the planned situation",
          "Identify variances, deviations, or unanticipated events",
          "Assess whether the change is significant enough to require action",
          "Update the staff's understanding of the situation"
        ],
        output: [
          "Identified variance or issue",
          "Shared understanding of the updated situation",
          "Updated running estimates",
          "Initial recommendation on whether a decision is required"
        ]
      }
    },
    "determine-that-a-decision-and-what-type-is-required": {
      title: "Determine That a Decision, and What Type, Is Required",
      source: "Source basis: FM 5.0, Planning and Orders Production (RDSP doctrinal sequence), with structured inputs/outputs inferred from the step purpose and delegated current-operations decision responsibilities.",
      rows: {
        input: [
          "Identified variance or issue",
          "Updated running estimates",
          "Current authorities and guidance",
          "Available time",
          "Decision criteria and support tools"
        ],
        process: [
          "Determine whether a decision is required",
          "Determine the type of decision required",
          "Determine who has authority to decide",
          "Determine the urgency and time available",
          "Frame the decision for focused staff action"
        ],
        output: [
          "Decision requirement confirmed",
          "Type of decision identified",
          "Decision authority identified",
          "Focused decision problem for staff action"
        ]
      }
    },
    "develop-a-course-of-action": {
      title: "Develop a Course of Action",
      source: "Source basis: FM 5.0, Planning and Orders Production (RDSP doctrinal sequence), with structured inputs/outputs inferred from RDSP's abbreviated current-operations planning function.",
      rows: {
        input: [
          "Decision problem",
          "Updated running estimates",
          "Current order and graphics",
          "Commander's guidance",
          "Available capabilities and constraints"
        ],
        process: [
          "Generate one or more workable COA options",
          "Focus on actions that solve the immediate problem",
          "Coordinate across warfighting functions",
          "Consider feasibility, suitability, and risk",
          "Draft changes to tasks, control measures, and timing as needed"
        ],
        output: [
          "Proposed COA or options",
          "Draft decision recommendation",
          "Draft adjustments to the current operation",
          "Updated running estimates"
        ]
      }
    },
    "refine-and-validate-the-course-of-action": {
      title: "Refine and Validate the Course of Action",
      source: "Source basis: FM 5.0, Planning and Orders Production (RDSP doctrinal sequence), with structured inputs/outputs inferred from doctrinal validation and synchronization requirements during execution.",
      rows: {
        input: [
          "Proposed COA",
          "Updated running estimates",
          "Risk considerations",
          "Decision support tools",
          "Staff coordination feedback"
        ],
        process: [
          "Refine the proposed COA",
          "Validate assumptions and synchronization requirements",
          "Assess risk and second-order effects",
          "Confirm supportability and timing",
          "Prepare the recommendation for decision"
        ],
        output: [
          "Refined and validated COA",
          "Confirmed supportability and risk considerations",
          "Decision recommendation ready for approval",
          "Updated running estimates"
        ]
      }
    },
    "implement": {
      title: "Implement",
      source: "Source basis: FM 5.0, Planning and Orders Production (RDSP doctrinal sequence), with structured inputs/outputs inferred from fragmentary-order execution and transition practices in current operations.",
      rows: {
        input: [
          "Approved COA",
          "Commander's decision",
          "Refined order changes",
          "Updated running estimates",
          "Transition requirements"
        ],
        process: [
          "Issue the decision and necessary instructions",
          "Publish or disseminate a fragmentary order as required",
          "Transition the changes to those executing the operation",
          "Synchronize affected units and warfighting functions",
          "Monitor execution and continue assessment"
        ],
        output: [
          "Implemented decision",
          "Fragmentary order or updated instructions",
          "Transitioned changes to subordinate units",
          "Updated running estimates for continued execution"
        ]
      }
    }
  };

  window.rdspModalData = rdspModalData;

  const subtitleDefault = "RDSP content is organized from FM 5.0's doctrinal step structure and rendered in the same five-layer matrix, with the decision content aligned in the Data Decisions column.";

  const modal = document.getElementById("rdsp-detail-modal");
  const modalTitle = document.getElementById("rdsp-detail-modal-title");
  const modalSubtitle = document.getElementById("rdsp-detail-modal-subtitle");
  const modalGrid = document.getElementById("rdsp-detail-modal-grid");
  const modalSource = document.getElementById("rdsp-detail-modal-source");
  const modalClose = modal.querySelector(".modal-close");

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function buildDecisionBar(text, title, label) {
    return `
      <div
        class="modal-sub-block modal-row-span modal-sub-block--interactive"
        data-detail-modal="nested-row-detail-modal"
        data-detail-title="${escapeHtml(text)}"
        data-detail-phase="${escapeHtml(label)}"
        data-detail-parent="${escapeHtml(title)}"
        role="button"
        tabindex="0"
      >
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-cell">Placeholder</div>
        <div class="modal-sub-block-anchor">${escapeHtml(text)}</div>
      </div>
    `;
  }

  function buildRow(label, items, title) {
    const rowContent = items && items.length
      ? items.map((item) => buildDecisionBar(item, title, label)).join("")
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

  function openModal(entry) {
    modalTitle.textContent = entry.title;
    modalSubtitle.textContent = subtitleDefault;
    modalGrid.innerHTML = [
      buildRow("Input", entry.rows.input, entry.title),
      buildRow("Process", entry.rows.process, entry.title),
      buildRow("Output", entry.rows.output, entry.title)
    ].join("");
    modalSource.textContent = entry.source;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  document.querySelectorAll(".rdsp-subtiles .subtile").forEach((tile) => {
    const title = tile.querySelector("h2")?.textContent.trim() || "";
    const key = title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!rdspModalData[key]) {
      return;
    }

    tile.classList.add("subtile--interactive");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");

    tile.addEventListener("click", () => openModal(rdspModalData[key]));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(rdspModalData[key]);
      }
    });
  });

  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeModal();
    }
  });
})();
