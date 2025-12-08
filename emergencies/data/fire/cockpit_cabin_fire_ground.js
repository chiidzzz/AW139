export const COCKPIT_CABIN_FIRE_GROUND = {
  id: "cockpit-cabin-fire-ground",
  title: "COCKPIT / CABIN FIRE (GROUND)",
  interactive: true,

  steps: {
    // ========================= START =========================
    start: {
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",

      actions: [
        {
          type: "info",
          text: "No single set of detailed procedures can address all the fire scenarios that are possible. The most urgent action is to get the aircraft shut down and evacuated immediately.",
        },

        {
          type: "flow-box-with-note",
          alert: true,
          text: "FIRE in cockpit or cabin",
        },

        "Declare an emergency",

        "Carry out <strong>EMERGENCY / POST CRASH SHUTDOWN</strong> procedure",

        "Evacuate aircraft at the earliest opportunity",
      ],

      next: "__open:emergency-post-crash-shutdown",
    },
  },
};
