(function () {
  const hptlDetailData = {
    title: "High-Payoff Target List (HPTL)",
    subtitle:
      "Focused drill-down from Fires Process > Output. This is a first-pass lifecycle representation so we can iterate on the best way to show HPTL doctrine.",
    source:
      "Current content is a representation scaffold for iteration. We can replace or expand it with doctrine-spanning HPTL references next.",
    categories: [
      {
        heading: "Origin",
        decisions: [
          "Candidate targets emerge from target development, running estimates, and commander priorities.",
          "Potential HPTs are tied back to the enemy capabilities or activities that most threaten mission accomplishment."
        ]
      },
      {
        heading: "Prioritize",
        decisions: [
          "Potential targets are weighed against the friendly scheme of maneuver and desired effects.",
          "The list is refined toward the targets that offer the greatest payoff if engaged."
        ]
      },
      {
        heading: "Approve",
        decisions: [
          "The HPTL is reviewed inside the targeting process and synchronized with guidance and decision support tools.",
          "This is where we can later show the exact doctrinal approval and publication touchpoints."
        ]
      },
      {
        heading: "Use",
        decisions: [
          "The approved HPTL informs detection, tracking, delivery, and assessment priorities.",
          "It connects to products like the AGM, TSS, and collection synchronization."
        ]
      },
      {
        heading: "Update",
        decisions: [
          "Assessment, BDA, and operational changes drive updates to the HPTL over time.",
          "This final column is a good place to represent revalidation or retirement in the next iteration."
        ]
      }
    ],
    note:
      "This popout is attached directly to the HPTL output box so we can experiment with the lifecycle view at the object level before deciding how deeply to embed it into the larger Fires Process model."
  };

  window.ModalUtils.registerData('hptl', hptlDetailData);
})();
