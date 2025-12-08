export const COCKPIT_CABIN_FIRE_FLIGHT = {
  id: "cockpit-cabin-fire-flight",
  title: "COCKPIT / CABIN FIRE (FLIGHT)",
  interactive: true,

  steps: {
    // ========================= START =========================
    start: {
      type: "actions",

      actions: [
        {
          type: "info",
          text: "An in-flight fire has no single set of detailed procedures that can address all the fire scenarios that are possible. The most urgent action is to get the aircraft on the ground as soon as possible with a reasonable degree of safety.",
        },

        {
          type: "flow-box-with-note",
          alert: true,
          text: "FIRE in cockpit or cabin",
        },

        "Declare an emergency",
        "Prepare to land as soon as possible",
        "Select VENT CREW FAN <strong>OFF</strong>",

        {
          type: "question",
          text: "Can you determine the fire source?",
          choices: [
            {
              text: "Yes",
              next: "fire_source_determined",
            },
            {
              text: "No — Fire source not determined and persists",
              next: "land_immediately_unknown",
            },
          ],
        },
      ],
    },

    // ========================= FIRE SOURCE DETERMINED =========================
    fire_source_determined: {
      type: "actions",

      actions: [
        ":: Fire source determined:",
        "Use on board hand held extinguisher to fight fire",

        {
          type: "question",
          text: "Is the fire extinguished?",
          choices: [
            { text: "Yes", next: "fire_extinguished" },
            { text: "No — Fire persists", next: "land_immediately_persists" },
          ],
        },
      ],
    },

    // ========================= FIRE EXTINGUISHED =========================
    fire_extinguished: {
      type: "actions",

      actions: [
        ":: Fire is extinguished:",
        "Increase ventilation",
        "Land as soon as possible",
        {
          type: "caution",
          text: "If the fire is not completely extinguished, increased ventilation may aggravate the problem.",
        },
      ],

      next: "complete",
    },

    // ========================= FIRE PERSISTS (KNOWN SOURCE) =========================
    land_immediately_persists: {
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",

      actions: [
        ":: Fire persists:",
        "<strong>LAND IMMEDIATELY</strong>",
        {
          type: "caution",
          text: "If the fire is not completely extinguished, increased ventilation may aggravate the problem.",
        },
      ],

      next: "__open:emergency-post-crash-shutdown",
    },

    // ========================= FIRE SOURCE NOT DETERMINED =========================
    land_immediately_unknown: {
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",

      actions: [
        ":: Fire source not determined and fire persists:",
        "<strong>LAND IMMEDIATELY</strong>",
        {
          type: "caution",
          text: "If the fire is not completely extinguished, increased ventilation may aggravate the problem.",
        },
      ],

      next: "__open:emergency-post-crash-shutdown",
    },
  },
};
