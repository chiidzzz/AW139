export const ENG_OUT = {
  id: "eng-out",
  title: "1(2) ENG OUT",
  interactive: true,

  steps: {
    // ============================================
    // START PAGE
    // ============================================
    start: {
      id: "start",
      type: "action-question",
      alert: true,
      warningText: "1(2) ENG OUT",

      action:
        "Associated engine NG <strong>&lt; 34.3%</strong> or rate of change outside predetermined limits.<br><br>" +
        "<strong>1. Adjust collective as required to maintain NR within limits.</strong><br>" +
        "<strong>2. Achieve safe OEI flight.</strong>",

      question: "Has the affected engine flamed out?",

      choices: [
        { text: "Yes – Engine has flamed out", next: "flamed-out-warning" },
        {
          text: "No – Engine running at low power but still running above G.I",
          next: "engine-running",
        },
      ],
    },

    // ============================================
    // FLAMED OUT BRANCH
    // ============================================s
    "flamed-out-warning": {
      id: "flamed-out-warning",
      type: "action-question",

      action:
        "<strong>Engine has flamed out.</strong><br><br>" +
        "<em>Consider relight only if cause is known and relight is essential.</em>",

      question: "Do you want to attempt an in-flight engine restart?",

      choices: [
        { text: "Yes — Attempt Restart", next: "__open:engine-restart" },
        {
          text: "No — Proceed with Engine Shutdown in an emergency",
          next: "__open:engine-shutdown-emergency",
        },
      ],
    },

    // ============================================
    // ENGINE RUNNING BRANCH
    // ============================================
    "engine-running": {
      id: "engine-running",
      type: "action-question",

      action:
        "Engine still running but power is degraded.<br>" +
        "Select <strong>ENG GOV → MANUAL</strong>.<br>" +
        "Maintain OEI control.",

      question: "Is manual engine control effective?",

      choices: [
        { text: "Yes — Continue OEI flight", next: "continue-flight" },
        {
          text: "No — Engine Shutdown in an emergency required",
          next: "__open:engine-shutdown-emergency",
        },
      ],
    },

    // ============================================
    // LAND & COMPLETE
    // ============================================
    land: {
      id: "land",
      type: "action",
      text: "<strong>Land as soon as practicable.</strong>",
      next: "complete",
    },

    "continue-flight": {
      id: "continue-flight",
      type: "actions",
      actions: [
        "Continue flight controlling engine power manually",
        "Land as soon as practicable",
        {
          type: "note",
          text:
            "If possible the torque of the manually controlled engine should be maintained at a torque level 10% below the other engine. " +
            "(If PI on either/both engines is ITT or NG limited, refer to TQ on MFD PWR PLANT page.)",
        },
      ],
      next: "complete",
    },
  },
};
