(function () {
  const subtitleDefault = "ADM content is organized from FM 5.0 and Army design doctrine, then expressed in the same five-layer matrix with the conceptual content aligned in the Data Decisions column.";

  const entries = {
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

  window.ModalUtils.registerData('adm', { subtitleDefault, entries });
})();
