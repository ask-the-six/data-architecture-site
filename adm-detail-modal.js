(function () {
  const admModalData = {
    "framing-the-operational-environment": {
      title: "Framing the Operational Environment",
      source: "Source basis: FM 5.0, Planning and Orders Production, plus ATP 5-0.1, Army Design Methodology, chapter 3 (official Army doctrine available through RDL and Army doctrinal references). Some inputs and outputs are structured from the doctrine's narrative form.",
      rows: {
        input: [
          "Higher guidance and direction",
          "Orders, directives, policy, and strategic guidance",
          "Higher and next-higher headquarters estimates",
          "Historical and cultural context",
          "Relevant actors, variables, and existing conditions"
        ],
        process: [
          "Understand higher guidance and direction",
          "Understand the current state of the operational environment",
          "Identify relevant actors, relationships, and tensions",
          "Project how the operational environment may trend in the future",
          "Discern the desired future states of relevant actors",
          "Envision the desired end state",
          "Capture the frame in narrative and visual form"
        ],
        output: [
          "Environmental frame",
          "Description of the current state",
          "Projection of future tendencies and dynamics",
          "Desired end state conditions",
          "Narrative and visual depiction of the operational environment"
        ]
      }
    },
    "framing-problems": {
      title: "Framing Problems",
      source: "Source basis: FM 5.0, Planning and Orders Production, plus ATP 5-0.1, Army Design Methodology, chapter 4. Inputs and outputs are structured from the doctrinal framing activities and problem-frame description.",
      rows: {
        input: [
          "Environmental frame",
          "Current and projected states of the operational environment",
          "Desired future states of other actors",
          "Desired end state",
          "Problems identified during earlier design sessions"
        ],
        process: [
          "Review the environmental frame",
          "Identify problems and map their relationships",
          "Determine obstacles impeding progress toward the desired end state",
          "Examine underlying tensions, root causes, and interdependencies",
          "Distinguish what needs to change and what must be preserved",
          "Describe the problem in narrative and visual form"
        ],
        output: [
          "Problem frame",
          "Problem statement",
          "Narrative and visual depiction of interrelated problems",
          "Refined understanding of obstacles, opportunities, and tensions"
        ]
      }
    },
    "framing-solutions": {
      title: "Framing Solutions",
      source: "Source basis: FM 5.0, Planning and Orders Production, plus ATP 5-0.1, Army Design Methodology, chapter 5. Outputs reflect the doctrinal operational-approach product and its transition into detailed planning.",
      rows: {
        input: [
          "Environmental frame",
          "Problem frame",
          "Desired end state",
          "Higher guidance and direction",
          "Understanding of available capabilities, resources, and risks"
        ],
        process: [
          "Review the environmental and problem frames",
          "Formulate an operational approach",
          "Determine enemy and friendly centers of gravity",
          "Identify decisive points",
          "Determine a direct or indirect approach",
          "Establish objectives and devise lines of operation and lines of effort",
          "Refine the operational approach",
          "Document results"
        ],
        output: [
          "Operational approach",
          "Narrative and visual depiction of the approach",
          "Initial commander's intent",
          "Initial planning guidance",
          "Conceptual basis for transition to detailed planning"
        ]
      }
    },
    "reframing": {
      title: "Reframing",
      source: "Source basis: FM 5.0, Planning and Orders Production, plus ATP 5-0.1, Army Design Methodology, chapter 6. Outputs are structured from the doctrine's reframing discussion and assessment triggers.",
      rows: {
        input: [
          "Assessment results",
          "Current operational approach",
          "Earlier hypotheses, conclusions, and decisions",
          "Changes in the operational environment or mission",
          "Invalidated assumptions or evidence of lack of progress"
        ],
        process: [
          "Monitor the current situation",
          "Evaluate progress toward end state conditions, objectives, and tasks",
          "Recommend or direct action for improvement",
          "Revisit earlier hypotheses, conclusions, and decisions",
          "Review understanding of the operational environment, the problem, and the desired end state",
          "Determine whether changed conditions require a new perspective"
        ],
        output: [
          "Reframed understanding of the operational environment",
          "Revised problem frame",
          "Updated or new operational approach",
          "Revised guidance for renewed planning and assessment"
        ]
      }
    }
  };

  window.admModalData = admModalData;

  const subtitleDefault = "ADM content is organized from FM 5.0 and Army design doctrine, then expressed in the same five-layer matrix with the conceptual content aligned in the Data Decisions column.";

  const modal = document.getElementById("adm-detail-modal");
  const modalTitle = document.getElementById("adm-detail-modal-title");
  const modalSubtitle = document.getElementById("adm-detail-modal-subtitle");
  const modalGrid = document.getElementById("adm-detail-modal-grid");
  const modalSource = document.getElementById("adm-detail-modal-source");
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

  document.querySelectorAll(".adm-subtiles .subtile").forEach((tile) => {
    const title = tile.querySelector("h2")?.textContent.trim() || "";
    const key = title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!admModalData[key]) {
      return;
    }

    tile.classList.add("subtile--interactive");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");

    tile.addEventListener("click", () => openModal(admModalData[key]));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(admModalData[key]);
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
