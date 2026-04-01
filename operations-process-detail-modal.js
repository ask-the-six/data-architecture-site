(function () {
  const operationsProcessModalData = {
    "fires-process": {
      title: "Fires Process",
      source: "Source basis: FM 3-60, Army Targeting (11 August 2023), especially the D3A targeting-process discussion and foundational targeting products. Because FM 3-60 presents this mostly in paragraph form rather than a single inputs/outputs table, the rows here are structured from the doctrine's descriptions.",
      rows: {
        input: [
          "Commander's guidance and targeting priorities",
          "Current operation order, scheme of maneuver, and phase priorities",
          "Running estimates from operations, intelligence, and fires",
          "Intelligence preparation and target development information",
          "Available joint and Army fires capabilities"
        ],
        process: [
          "Decide: identify targets that prevent the enemy commander from achieving intent, develop initial HVTs, set priorities, and build foundational targeting products",
          "Detect: identify, confirm, validate, and track HPTs; collect essential target information; update collection plans and synchronization",
          "Deliver: execute the selected lethal or nonlethal engagement and continue target tracking and battle damage collection during engagement",
          "Assess: determine effects through combat assessment, including BDA, munitions effectiveness assessment, and reattack recommendations"
        ],
        output: [
          "High-payoff target list (HPTL)",
          "Target selection standards (TSS)",
          "Attack guidance matrix (AGM)",
          "Intelligence collection synchronization matrix (ICSM) and target synchronization matrix (TSM)",
          "Battle damage assessment and reattack recommendations"
        ]
      }
    },
    "efdi": {
      title: "EFDI",
      subtitle: "EFDI is modeled here as a user-developed publish-once, subscribe-many warning and action architecture. The structure below translates the sensor-to-action concept into the same five-layer matrix used elsewhere on the page.",
      source: "Source basis: user-provided EFDI concept narrative derived from Army doctrinal logic about multidomain operations, intelligence, command and control, resilient networks, and distributed warning-to-action flows. EFDI is treated here as a naming update from EFDL and represented as a conceptual architecture rather than a formal doctrinal term.",
      rows: {
        input: [
          "Sensor detections from radar, RF, EO/IR, acoustic, airborne, and space-enabled sources",
          "Edge-node metadata such as timestamp, geolocation, confidence, track grouping, and border-crossing estimate",
          "Mission context including defended assets, routes, airspace, civilian areas, and supported missions",
          "Authority, relevance, and release rules for civil, military, intelligence, and coalition subscribers",
          "Available transport paths, network status, and cloud or enclave accessibility"
        ],
        process: [
          "Detect at the sensor layer and publish first to an edge node rather than directly to every consumer",
          "Normalize, validate, timestamp, geolocate, and standardize the event at ingest before pushing to the shared event bus",
          "Fuse tracks and signatures into a recognized event through correlation, classification, geospatial overlay, and prediction services",
          "Apply relevance, geography, mission, and authority rules to determine who should be alerted automatically",
          "Allow authorized organizations to subscribe, pull, act, and then publish status back into the same network as feedback"
        ],
        output: [
          "Role-specific alert products for civil warning, air defense, intelligence, maneuver headquarters, and sustainment nodes",
          "A fused recognized event with classification, projected routes, likely targets, and time-to-impact estimates",
          "Actionable tactical tracks for air-defense engagement and operational-picture updates for command posts",
          "Published action status such as alerts sent, engagement complete, convoy rerouted, or further collection required",
          "Archived event history for forensic review, retraining, trend analysis, and cross-domain dissemination"
        ]
      }
    }
  };

  window.operationsProcessModalData = operationsProcessModalData;

  const subtitleDefault = "Operations-process content is structured from FM 3-60 and shown in the same five-layer matrix, with the doctrinal content aligned in the Data Decisions column.";

  const modal = document.getElementById("operations-process-detail-modal");
  const modalTitle = document.getElementById("operations-process-detail-modal-title");
  const modalSubtitle = document.getElementById("operations-process-detail-modal-subtitle");
  const modalGrid = document.getElementById("operations-process-detail-modal-grid");
  const modalSource = document.getElementById("operations-process-detail-modal-source");
  const modalClose = modal.querySelector(".modal-close");

  function escapeHtml(value) {
    return value
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function isHptlOutput(label, text) {
    return label === "Output" && /high-payoff target list|\bHPTL\b/i.test(text);
  }

  function buildDecisionBar(text, title, label) {
    const modalTarget = isHptlOutput(label, text)
      ? "hptl-detail-modal"
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
    modalSubtitle.textContent = entry.subtitle || subtitleDefault;
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

  document.querySelectorAll(".operations-process-subtiles .subtile").forEach((tile) => {
    const title = tile.querySelector("h2")?.textContent.trim() || "";
    const key = title
      .toLowerCase()
      .replaceAll("&", "and")
      .replaceAll("/", " ")
      .replaceAll("'", "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    if (!operationsProcessModalData[key]) {
      return;
    }

    tile.classList.add("subtile--interactive");
    tile.setAttribute("tabindex", "0");
    tile.setAttribute("role", "button");

    tile.addEventListener("click", () => openModal(operationsProcessModalData[key]));
    tile.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(operationsProcessModalData[key]);
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
