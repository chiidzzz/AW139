export const ELECTRICAL_FIRE_SMOKE_FLIGHT = {
  id: "electrical-fire-smoke-flight",
  title: "ELECTRICAL FIRE/SMOKE PROCEDURE (FLIGHT)",
  interactive: true,

  steps: {
    // ========================= START =========================
    start: {
      type: "actions",

      actions: [
        "Reduce speed, recommended Vy",
        "OPEN windows to ventilate cockpit (if operational conditions permit)",
        "Land as soon as possible",

        ":: Electrical Isolation Actions:",
        "Right pilot select on-side radio/com (N°2)",
        "Switch pilot UTILITY light ON (for night operation)",
        "Set MFD to PWR PLANT page to monitor ESS BUS 2 voltage continuously",
        "Switch GEN 1 & GEN 2 OFF",
        "Switch BATTERY MAIN OFF <span class='small'>(Loss of NON-ESS BUS 1 & 2, MAIN 1 & 2)</span>",

        {
          type: "note",
          text: "AP2 and ATT remain engaged, but relevant green lights on the autopilot control panel will be OFF.",
        },

        {
          type: "question",
          text: "ESS BUS 2 voltage < 22V or fluctuating?",
          choices: [
            {
              text: "Yes",
              next: "smoke_persists_initial",
            },
            {
              text: "No",
              next: "smoke_recheck",
            },
          ],
        },
      ],
    },

    // ========================= SMOKE CLEARS (QRH → GO TO NEXT PAGE) =========================
    smoke_recheck: {
      type: "actions",

      actions: [
        {
          type: "question",
          text: "Does smoke clear?",
          choices: [
            { text: "Yes", next: "bat_main_smoke_clears" },
            {
              text: "No - smoke does not clear",
              next: "smoke_persists_initial",
            },
          ],
        },
      ],
    },

    // ========================= SMOKE DOES NOT CLEAR =========================
    smoke_persists_initial: {
      type: "actions",

      actions: [
        ":: Smoke does not clear:",
        "Switch GEN 1 & 2 ON",
        "Switch BATTERY MASTER OFF",
        "Switch BATTERY AUX OFF",
        "Re-engage AP1 (if possible)",
        "If smoke clears → Land as soon as practicable",
        "If smoke does not clear → Land as soon as possible",
        "<strong>If smoke and/or fire severe → LAND IMMEDIATELY</strong>",
      ],

      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",
      next: "__open:emergency-post-crash-shutdown",
    },

    bat_main_smoke_clears: {
      type: "actions",

      actions: [
        "Switch BATTERY MAIN ON <span class='small'>(MAIN BUS 1 restored)",
        {
          type: "question",
          text: "Does smoke appear?",
          choices: [
            { text: "Yes", next: "bat_main_smoke_yes" },
            { text: "No", next: "gen1_restore" },
          ],
        },
      ],
    },

    bat_main_smoke_yes: {
      type: "actions",
      buttonLabel:
        "Extended Flight Endurance After Double DC Generator Failure→",
      actions: [
        "Switch BATTERY MAIN OFF",
        "<strong>Land as soon as possible within 30 minutes</strong>",
        "Carry out <strong>Extended Flight Endurance After Double DC Generator Failure</strong> procedure.",
      ],

      next: "__open:extended-flight-endurance",
    },

    // ========================= RESTORE GEN1 =========================
    gen1_restore: {
      type: "actions",

      actions: [
        "Switch GEN 1 ON <span class='small'>(MAIN BUS 2 restored)</span>",

        {
          type: "question",
          text: "Does smoke appear?",
          choices: [
            { text: "Yes", next: "gen1_smoke_yes" },
            { text: "No", next: "final_reengage" },
          ],
        },
      ],
    },

    gen1_smoke_yes: {
      type: "actions",
      buttonLabel:
        "Extended Flight Endurance After Double DC Generator Failure→",
      actions: [
        "Switch GEN 1 OFF",
        "Switch BATTERY MAIN OFF",
        "<strong>Land as soon as possible within 30 minutes</strong>",
        "Carry out <strong>Extended Flight Endurance After Double DC Generator Failure</strong> procedure.",
      ],

      next: "__open:extended-flight-endurance",
    },

    // ========================= FINAL (SMOKE CLEARED) =========================
    final_reengage: {
      type: "actions",

      actions: ["Re-engage AP1", "Land as soon as practicable"],

      next: "complete",
    },
  },
};
