export const EXTENDED_FLIGHT_ENDURANCE = {
  id: "extended-flight-endurance",
  title: "EXTENDED FLIGHT ENDURANCE AFTER DOUBLE DC GENERATOR FAILURE",
  interactive: true,

  steps: {
    // ========================= START =========================
    start: {
      type: "actions",

      actions: [
        {
          type: "info",
          text: "The following assumes the Double DC Generator Failure procedure has been followed and a double DC generator failure is confirmed.",
        },

        {
          type: "note",
          text: "The battery endurance reported here assumes the pilot operates the VHF2 radio system in transmission for a maximum of 1 minute every 15 minutes.",
        },

        {
          type: "note",
          text: "The LDG LT can be turned on for 3 minutes before landing.",
        },

        {
          type: "flow-box-with-note",
          alert: true,
          text: "1-2 DC GEN",
        },

        ":: Double DC generator failure confirmed",
        "Confirm BATTERY MAIN switch <strong>OFF</strong>",
        "Select FUEL XFEED <strong>CLOSED</strong>",
        "FUEL PUMP 1 AND 2 switches <strong>OFF</strong>",
        "On RCP, select PLT switch to <strong>PFD ONLY</strong>",

        {
          type: "question",
          text: "Day flight or Night flight?",
          choices: [
            { text: "Day flight", next: "day_flight" },
            { text: "Night flight", next: "night_flight" },
          ],
        },
      ],
    },

    // ========================= DAY FLIGHT =========================
    day_flight: {
      type: "actions",

      actions: [
        ":: Day flight:",
        "Confirm LT panel switches OFF",
        "Confirm POSITION LIGHTS OFF",

        {
          type: "question",
          text: "Is OAT greater than 4°C?",
          choices: [
            { text: "Yes — OAT > 4°C", next: "day_warm" },
            { text: "No — OAT < 4°C", next: "day_cold" },
          ],
        },
      ],
    },

    // ========================= DAY WARM =========================
    day_warm: {
      type: "actions",

      actions: [
        ":: Day flight, OAT > 4°C:",
        "Confirm PITOT HEATER <strong>OFF</strong>",
        "<strong>Land as soon as practicable within 75 minutes</strong>",
      ],

      next: "complete",
    },

    // ========================= DAY COLD =========================
    day_cold: {
      type: "actions",

      actions: [
        ":: Day flight, OAT < 4°C:",
        "Confirm PITOT HEATER 2 <strong>ON</strong>",
        "<strong>Land as soon as practicable within 66 minutes</strong>",
      ],

      next: "complete",
    },

    // ========================= NIGHT FLIGHT =========================
    night_flight: {
      type: "actions",

      actions: [
        ":: Night flight:",

        {
          type: "question",
          text: "Is OAT greater than 4°C?",
          choices: [
            { text: "Yes — OAT > 4°C", next: "night_warm" },
            { text: "No — OAT < 4°C", next: "night_cold" },
          ],
        },
      ],
    },

    // ========================= NIGHT WARM =========================
    night_warm: {
      type: "actions",

      actions: [
        ":: Night flight, OAT > 4°C:",
        "Confirm PITOT HEATER <strong>OFF</strong>",
        "<strong>Land as soon as practicable within 62 minutes</strong>",
      ],

      next: "complete",
    },

    // ========================= NIGHT COLD =========================
    night_cold: {
      type: "actions",

      actions: [
        ":: Night flight, OAT < 4°C:",
        "Confirm PITOT HEATER 2 <strong>ON</strong>",
        "<strong>Land as soon as practicable within 57 minutes</strong>",
      ],

      next: "complete",
    },
  },
};
