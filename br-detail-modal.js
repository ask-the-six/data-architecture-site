const brModalData = {
  "commanders-update-briefing": {
    title: "Commander's Update Briefing",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-4: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Running estimates",
        "Updated situation template",
        "Updated operational graphics, friendly unit locations, and disposition",
        "Significant activities in last 24 hours",
        "Commander's critical information requirement",
        "Decision support matrix"
      ],
      process: [
        "Roll call (G-3)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Subordinate commanders update: Combat power",
        "Subordinate commanders update: Intelligence assessment",
        "Subordinate commanders update: Operations assessment",
        "Subordinate commanders update: Issues and recommendations",
        "Subordinate commanders update: Commander's guidance"
      ],
      output: [
        "Commander's guidance",
        "Fragmentary order as required"
      ]
    }
  },
  "battle-update-briefing": {
    title: "Battle Update Briefing",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-3: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Running estimates",
        "Updated situation template",
        "Updated operational graphics, friendly unit locations, and disposition",
        "Significant activities in last 24 hours",
        "Commander's critical information requirements",
        "Decision support matrix"
      ],
      process: [
        "Roll call (G-3)",
        "Orders received and issued (G-3)",
        "Weather update (SWO)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Fires update (DFSCOORD, ALO, and CEWO)",
        "Protection update (chief of protection)",
        "Sustainment update (G-1, G-4, G-8, and surgeon)",
        "Civil affairs update (G-9)",
        "IO update (IO officer)",
        "Signal update (G-6)",
        "Other staff updates by exception",
        "Commander's guidance"
      ],
      output: [
        "Commander's decisions and guidance",
        "Fragmentary order as required"
      ]
    }
  },
  "operations-synchronization": {
    title: "Operations Synchronization",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-5: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Running estimates",
        "Updated situation template",
        "Updated operational graphics, friendly unit locations, and disposition",
        "Significant activities in last 24 hours",
        "Execution matrix",
        "Decision support matrix",
        "Commander's guidance"
      ],
      process: [
        "Roll call (G-3)",
        "Fragmentary order as required",
        "Review commander's guidance (G-3)",
        "Weather update (SWO)",
        "Review upcoming critical events and decisions (G-3)",
        "Intelligence (G-2)",
        "Movement and maneuver (G-3)",
        "Fires (DFSCOORD)",
        "Protection (chief of protection)",
        "Sustainment (G-1, G-4, G-8, and surgeon)",
        "Command and control (G-3, G-6)",
        "Other staff and LNOs by exception",
        "Recommended changes to the current order",
        "Guidance"
      ],
      output: [
        "Updated execution matrix",
        "Recommended changes to the decision support matrix",
        "Fragmentary orders"
      ]
    }
  },
  "assessment-running-estimate": {
    title: "Assessment Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-6 (Assessment Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Assessment plan",
        "Higher echelon, subordinate, and unified action partner assessments",
        "Running estimates"
      ],
      process: [
        "Roll call (G-5)",
        "Plan review (G-5)",
        "Subordinate unit assessments (G-5, LNOs)",
        "Unified action partner assessments (G-5, LNOs)",
        "Assessment discussions (staff leads)",
        "Assessment summary (G-5)",
        "Guidance (chief of staff)"
      ],
      output: [
        "Updated assessment products",
        "Recommended adjustments to the assessment and information collection plans",
        "Assessment reports to higher headquarters"
      ]
    }
  },
  "civil-military-operations-running-estimate": {
    title: "Civil-Military Operations Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-7 (Civil-Military Operations Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Running estimates",
        "Higher headquarters orders, directives, and policy",
        "Commander's guidance",
        "Outputs from the targeting and information operations working groups"
      ],
      process: [
        "Roll call (G-9)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Civil affairs project update (G-9)",
        "Engineer project update (engineer)",
        "Staff judge advocate concerns (SJA)",
        "Issues and discussions (G-9)",
        "Recommend changes to the current operation order (G-9)",
        "Guidance (chief of staff)"
      ],
      output: [
        "Updated civil-military operations assessment",
        "Recommended adjustment to the commander's civil-military operations objectives and priorities",
        "Recommended tasks to subordinate units",
        "Recommended key leader engagements"
      ]
    }
  },
  "cyberspace-electromagnetic-activities-running-estimate": {
    title: "Cyberspace Electromagnetic Activities Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-8 (CEMA Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Higher headquarters orders, directives, and policy",
        "Commander's guidance",
        "Outputs from the targeting and IO working groups",
        "Running estimates",
        "Subordinate cyberspace or EW requests"
      ],
      process: [
        "Roll call (CEWO)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Cyberspace operations update (CEWO)",
        "EW update (CEWO)",
        "Spectrum management update (spectrum manager)",
        "Target nominations (CEWO)",
        "CEMA capabilities requests recommendation (CEWO)",
        "Guidance (G-3)"
      ],
      output: [
        "Recommended requests for CEMA-related capabilities and resources",
        "Approval of IO working group input",
        "Approval of targeting working group input",
        "Approval of recommended changes to the current operation order"
      ]
    }
  },
  "information-collection-running-estimate": {
    title: "Information Collection Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-9 (Information Collection Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Commander's guidance",
        "CCIRs",
        "Future operations requirements",
        "Subordinate unit requirements",
        "Targeting requirements",
        "Air tasking order nomination"
      ],
      process: [
        "Roll call (G-2)",
        "Past information collection plan review (G-2)",
        "Weather update (staff weather officer)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Future operations requirements (G-3)",
        "Subordinate unit requirements (G-3)",
        "Targeting requirements (targeting officer)",
        "Allocation of collection resources and assets availability (collection manager)",
        "Summary (G-2)",
        "Guidance (chief of staff)"
      ],
      output: [
        "Priorities and recommendations for collection",
        "Updated information collection plan",
        "Recommended changes to CCIRs",
        "Fragmentary order input"
      ]
    }
  },
  "information-operations-running-estimate": {
    title: "Information Operations Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-10 (Information Operations Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Higher orders, directives, and guidance",
        "Current IO scheme of support synchronization matrix",
        "Running estimates",
        "Combined information overlay",
        "Subordinate unit requests for support",
        "Current messages and talking points (SLE)",
        "Current PAG and planned media events"
      ],
      process: [
        "Roll call (IO officer)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Information environment update (IO officer)",
        "Review targeting guidance and previous targeting cycle (G-3)",
        "Assessment update: information requirements and indicators (IO officer)",
        "Receive unit updates and requests (unit representatives)",
        "Review, validate, and nominate effects and targets for the next 24, 48, 72, and 96 hours",
        "Review and update IO synchronization matrix (IO officer)",
        "Review friction points",
        "Staff comments",
        "Guidance (IO chief)"
      ],
      output: [
        "Updated IO scheme synchronization matrix",
        "Updated IO synchronization matrix",
        "Key leader engagement recommendations",
        "Refined themes and messages",
        "Target nominations",
        "Updated combined information overlay",
        "Input to targeting working group and decision board",
        "Updated information requirements",
        "Fragmentary order recommendations"
      ]
    }
  }
};

window.brModalData = brModalData;

const subtitleDefault = "Inputs and outputs are drawn from FM 6.0, Chapter 4. I kept the same five-layer matrix and aligned the doctrinal content in the Data Decisions column.";

Object.assign(brModalData, {
  "knowledge-management-running-estimate": {
    title: "Knowledge Management Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-11 (Knowledge Management Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Recommended changes to KM processes, training, tools, and organization",
        "KM issues",
        "Planned network outages",
        "Technical and portal capabilities"
      ],
      process: [
        "Roll call (KM officer)",
        "Review of due outs and minutes from last meeting (KM officer)",
        "Review of upcoming suspense and issues (KM officer)",
        "New action items: people, processes, tools, and organization",
        "Summary (KM officer)",
        "Guidance (chief of staff)"
      ],
      output: [
        "Updates to KM standard operating procedures",
        "Changes to processes",
        "Recommended changes to the battle rhythm"
      ]
    }
  },
  "protection-running-estimate": {
    title: "Protection Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-12 (Protection Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Higher orders, directives, and guidance",
        "Current order, including commander's intent and concept of operations",
        "Current scheme of protection",
        "Risk management products",
        "Threat and hazard assessment",
        "Vulnerability assessment",
        "Criticality assessment",
        "Updated scheme of protection",
        "Protection running estimate",
        "Protection prioritization list",
        "Recommended force protection conditions",
        "Current critical assets list and defended assets list",
        "Combined information overlay"
      ],
      process: [
        "Roll call",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Protection update by protection warfighting function tasks (staff leads)",
        "Critical assets list and defended assets list review (chief of protection)",
        "Guidance (G-3)"
      ],
      output: [
        "Updated protection assessment",
        "Recommendations to critical and defended assets lists",
        "Recommended protection guidance and mitigation measures",
        "Fragmentary order recommendations"
      ]
    }
  },
  "sustainment-running-estimate": {
    title: "Sustainment Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-13 (Sustainment Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Higher and sustainment organizations' plans, orders, directives, and policy",
        "Updated running estimates"
      ],
      process: [
        "Roll call (G-4)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Logistics update (transportation officer, supply and services officer, distribution management officer, engineer)",
        "Personnel update (G-1)",
        "Comptroller update (G-8)",
        "Health service support update (Surgeon)",
        "Summary of issue and recommendations (G-4)",
        "Guidance (G-4)"
      ],
      output: [
        "Recommended priorities of support",
        "Synchronized sustainment operation for next 24 to 72 hours",
        "Fragmentary order as required"
      ]
    }
  },
  "targeting-running-estimate": {
    title: "Targeting Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-14 (Targeting Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Commander's targeting guidance",
        "Battle damage assessments",
        "Collection plan",
        "Previous cycle's high-payoff target list, attack guidance matrix, and target selection standards",
        "Target nominations"
      ],
      process: [
        "Roll call",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Review targeting guidance (DFSCOORD)",
        "Previous targeting cycle: battle damage assessment and re-attack recommendation (targeting officer)",
        "Target develop and refinement (24-72) (targeting officer)",
        "Target nominations",
        "Collection plan",
        "Proposed high-payoff target list, attack guidance matrix, and target selection standards for upcoming targeting cycle (targeting officer)",
        "Guidance (chief of staff)"
      ],
      output: [
        "Recommend target nominations",
        "Recommend air support request (24 to 96 hours)",
        "Draft high-payoff target list, attack guidance matrix, and target selection standards",
        "Draft collection plan",
        "Fragmentary order recommendations"
      ]
    }
  },
  "airspace-control-running-estimate": {
    title: "Airspace Control Running Estimate",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-15 (Airspace Control Working Group): https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Division assigned airspace",
        "Commander's priority of airspace users",
        "Appendix 10 (Airspace Control) of Annex C (Operations)",
        "Subordinate airspace plan",
        "Standing coordination measures",
        "Planned targets"
      ],
      process: [
        "Roll call",
        "Changes to unit boundaries (G-3)",
        "ACP and ACO updates (airspace element)",
        "Subordinate airspace plan integration (airspace element)",
        "Preplanned gun-target lines and FSCMs; PAA location updates (fire support element)",
        "Counterfire plan (fire support element)",
        "Collection plan and ISR (G-2 or UAS liaison officer)",
        "Air interdiction plan (ALO)",
        "Close air support plan (ALO)",
        "Aviation operations scheme of maneuver (AMSO)",
        "Guidance (aviation officer)"
      ],
      output: [
        "Completed airspace plan sent to BCD",
        "Airspace control appendix recommendations",
        "ACP and special instructions changes"
      ]
    }
  },
  "operations-assessment-board": {
    title: "Operations Assessment Board",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-16: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Assessment plan",
        "Running estimates",
        "Assessment working group products (narratives, trend analysis, spot light charts, and others)"
      ],
      process: [
        "Roll call (G-5)",
        "Plan review and assessment framework (G-5)",
        "Consolidated staff assessment (G-3)",
        "Subordinate commanders' assessments",
        "Unified action partner assessments",
        "Commander's guidance"
      ],
      output: [
        "Commander's decisions and guidance",
        "Changes to the operation order",
        "Updated commander's planning guidance"
      ]
    }
  },
  "plans-synchronization-board": {
    title: "Plans Synchronization Board",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-17: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Higher echelon plans, orders, and directives",
        "Running estimates"
      ],
      process: [
        "Roll call (G-5)",
        "Commander's guidance and planning priorities",
        "Higher and adjacent unit plans update (G-5)",
        "Decision support matrix (G-5)",
        "Current planning priorities and status",
        "Specific plans updates or briefs (lead planners)",
        "Commander's guidance"
      ],
      output: [
        "Approved planning products, including mission statement, courses of action, and decision support matrix",
        "Key decisions necessary to continue planning or transition planning efforts between cells"
      ]
    }
  },
  "sustainment-board": {
    title: "Sustainment Board",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-18: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Operations synchronization matrix for next 72 to 96 hours",
        "Recommendations from sustainment-related working groups",
        "Sustainment common operational picture"
      ],
      process: [
        "Roll call (G-4)",
        "Intelligence update (G-2)",
        "Operations update (G-3)",
        "Logistics update (transportation officer, supply and services officer, distribution management officer, and engineer)",
        "Personnel update (G-1)",
        "Comptroller update (G-8)",
        "Health service support update (surgeon)",
        "Summary of issue and recommendations (G-4)",
        "Sustainment commander",
        "Guidance (ADC-S)"
      ],
      output: [
        "Updated logistics synchronization matrix",
        "Approved sustainment policy and priorities, or changes to it",
        "Fragmentary order"
      ]
    }
  },
  "targeting-board": {
    title: "Targeting Board",
    source: "Source: Official FM 6.0, May 16, 2022, Chapter 4, Table 4-19: https://armypubs.army.mil/epubs/DR_pubs/DR_a/ARN35404-FM_6-0-000-WEB-1.pdf",
    rows: {
      input: [
        "Running estimates",
        "Battle damage assessment",
        "Information collection plan",
        "Targeting working group products"
      ],
      process: [
        "Roll call",
        "Battle damage assessment for the last 24 hours",
        "Weather-intelligence estimate for the next 24 hours",
        "Collection plan review",
        "High-payoff target list, attack guidance matrix, and target selection standards verification",
        "Review target nomination",
        "Planned information-related capabilities executions for the next 48 hours",
        "Weather-intelligence estimate for the next 48 hours",
        "Future operations and decision support matrix review",
        "Fire support considerations",
        "High-payoff target list, attack guidance matrix, and target selection standards validation",
        "Planned information-related capabilities executions for the next 72 hours",
        "Weather-intelligence estimate for the next 72 hours",
        "Future operations decision support matrix review",
        "High-payoff target list, attack guidance matrix, and target selection standards recommendations",
        "Commander's guidance"
      ],
      output: [
        "Approved high-payoff target list",
        "Approved attack guidance matrix",
        "Approved target selection standards",
        "Approved targeting guidance",
        "Approved target nominations",
        "Changes to fire support coordination measures",
        "Fragmentary order as required"
      ]
    }
  }
});

const modal = document.getElementById("br-detail-modal");
const modalTitle = document.getElementById("br-detail-modal-title");
const modalSubtitle = document.getElementById("br-detail-modal-subtitle");
const modalGrid = document.getElementById("br-detail-modal-grid");
const modalSource = document.getElementById("br-detail-modal-source");
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

function buildDecisionBar(text, label, title) {
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
    ? items.map((item) => buildDecisionBar(item, label, title)).join("")
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

document.querySelectorAll(".br-subtiles .subtile").forEach((tile) => {
  const title = tile.querySelector("h2")?.textContent.trim() || "";
  const key = title
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll("/", " ")
    .replaceAll("'", "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  if (!brModalData[key]) {
    return;
  }

  tile.classList.add("subtile--interactive");
  tile.setAttribute("tabindex", "0");
  tile.setAttribute("role", "button");

  tile.addEventListener("click", () => openModal(brModalData[key]));
  tile.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openModal(brModalData[key]);
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
