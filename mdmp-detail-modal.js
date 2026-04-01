(function () {
  const mdmpModalData = {
    "receipt-of-mission": {
      title: "Receipt of Mission",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Higher headquarters plan or order",
          "New mission anticipated by the commander",
          "Current running estimates"
        ],
        process: [
          "Alert the staff and other key participants",
          "Gather the tools",
          "Update running estimates",
          "Conduct an initial assessment",
          "Determine the time available",
          "Determine the planning approach, including guidance and degree of parallel planning",
          "Issue the initial warning order"
        ],
        output: [
          "Commander's initial guidance",
          "Initial allocation of time",
          "Updated running estimates",
          "Initial warning order"
        ]
      }
    },
    "mission-analysis": {
      title: "Mission Analysis",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Higher headquarters plan or order",
          "Higher headquarters IPB and knowledge products",
          "Initial warning order",
          "Commander's initial guidance",
          "Updated running estimates"
        ],
        process: [
          "Analyze the operational environment",
          "Analyze the unit's tasks",
          "Determine constraints",
          "Identify specified, implied, and essential tasks",
          "Review available assets",
          "Determine additional resource requirements",
          "Identify critical facts and assumptions",
          "Conduct risk assessment",
          "Develop initial intelligence, surveillance, and reconnaissance considerations",
          "Develop initial information collection considerations",
          "Develop the restated mission",
          "Develop the mission-analysis briefing",
          "Develop and issue commander's initial intent and planning guidance",
          "Issue a warning order"
        ],
        output: [
          "Approved restated mission",
          "Initial commander's intent",
          "Initial planning guidance",
          "Mission-analysis briefing",
          "COA evaluation criteria",
          "Updated running estimates",
          "Warning order"
        ]
      }
    },
    "course-of-action-development": {
      title: "Course of Action Development",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Approved restated mission",
          "Commander's intent and planning guidance",
          "Updated running estimates",
          "Mission-analysis products"
        ],
        process: [
          "Assess relative combat power",
          "Generate options",
          "Array initial forces",
          "Develop a broad concept",
          "Assign headquarters",
          "Develop COA statements and sketches"
        ],
        output: [
          "COA statements and sketches",
          "Broad concepts for each COA",
          "Updated running estimates"
        ]
      }
    },
    "course-of-action-analysis": {
      title: "Course of Action Analysis",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "COA statements and sketches",
          "Updated running estimates",
          "Commander's intent and planning guidance",
          "COA evaluation criteria"
        ],
        process: [
          "Gather the tools",
          "List friendly forces",
          "List assumptions",
          "List known critical events and decision points",
          "Select the war-gaming method",
          "Select a recording method",
          "War-game the operation and assess results"
        ],
        output: [
          "Refined COAs",
          "War-game results",
          "Updated running estimates",
          "Decision points, branches, and sequels",
          "Synchronization and decision-support refinements"
        ]
      }
    },
    "course-of-action-comparison": {
      title: "Course of Action Comparison",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Refined COAs",
          "COA evaluation criteria",
          "Updated running estimates"
        ],
        process: [
          "Compare COAs against criteria",
          "Identify strengths and weaknesses",
          "Evaluate advantages and disadvantages",
          "Develop a COA decision matrix",
          "Recommend a COA"
        ],
        output: [
          "COA decision matrix",
          "Recommended COA",
          "Updated running estimates"
        ]
      }
    },
    "course-of-action-approval": {
      title: "Course of Action Approval",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Refined COAs",
          "COA decision matrix and recommendation",
          "Updated running estimates"
        ],
        process: [
          "Brief the commander on the COAs",
          "Review and validate assumptions",
          "Review advantages and disadvantages",
          "Recommend a COA",
          "Commander selects, modifies, or rejects a COA",
          "Refine commander's intent and guidance",
          "Issue a warning order as required"
        ],
        output: [
          "Approved COA",
          "Refined commander's intent",
          "Refined planning guidance",
          "Warning order",
          "Updated running estimates"
        ]
      }
    },
    "orders-production-dissemination-and-transition": {
      title: "Orders Production, Dissemination, and Transition",
      source: "Source basis: FM 5.0, Planning and Orders Production (2022), MDMP step graphics; supplemented by the official Army CALL MDMP guide that cites FM 5.0 figures: https://api.army.mil/e2/c/downloads/2023/11/17/f7177a3c/23-07-594-military-decision-making-process-nov-23-public.pdf",
      rows: {
        input: [
          "Approved COA",
          "Commander's intent and planning guidance",
          "Updated running estimates"
        ],
        process: [
          "Develop the plan or order",
          "Refine and synchronize details",
          "Confirm task organization and control measures",
          "Conduct transition and backbriefs",
          "Disseminate the order"
        ],
        output: [
          "Approved plan or order",
          "Transition to subordinates",
          "Updated running estimates"
        ]
      }
    }
  };

  window.mdmpModalData = mdmpModalData;

  const subtitleDefault = "Inputs, process, and outputs are aligned to the FM 5.0 MDMP step graphics and expressed in the same five-layer matrix, with doctrinal content aligned in the Data Decisions column.";

  const modal = document.getElementById("mdmp-detail-modal");
  const modalTitle = document.getElementById("mdmp-detail-modal-title");
  const modalSubtitle = document.getElementById("mdmp-detail-modal-subtitle");
  const modalGrid = document.getElementById("mdmp-detail-modal-grid");
  const modalSource = document.getElementById("mdmp-detail-modal-source");
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

  document.querySelectorAll(".mdmp-subtiles .subtile").forEach((tile) => {
    const title = tile.querySelector("h2")?.textContent.trim() || "";
    const key = title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!mdmpModalData[key]) {
      return;
    }

    tile.classList.add("subtile--interactive");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");

    tile.addEventListener("click", () => openModal(mdmpModalData[key]));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(mdmpModalData[key]);
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
