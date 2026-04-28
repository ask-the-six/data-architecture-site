(function () {
  const subtitleDefault = "RDSP content is organized from FM 5.0's doctrinal step structure and rendered in the same five-layer matrix, with the decision content aligned in the Data Decisions column.";

  const entries = {
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

  window.ModalUtils.registerData('rdsp', { subtitleDefault, entries });
})();
