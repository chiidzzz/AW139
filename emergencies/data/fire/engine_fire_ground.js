export const ENGINE_FIRE_GROUND = {
  id: "engine-fire-ground",
  title: "ENGINE BAY FIRE (GROUND)",
  interactive: true,

  steps: {
    // ========================= START =========================
    start: {
      type: "actions",

      actions: [
        {
          type: "flow-box-with-note",
          alert: true,
          text: "1(2) ENG FIRE",
          rightNote: "+ Audio Tone and Voice Warning",
        },

        ":: Confirm on ECL <span class='text-alert-red'>ENGINE FIRE</span> light ON",

        ":: On affected engine:",
        "ENG MODE switch — <strong>IDLE</strong>",
        "Confirm engine FIRE",
        "ECL — <strong>OFF</strong>",
        "Lift FIRE/ARM guard and press illuminated pushbutton",
        "Set FIRE EXTING switch — <strong>BTL1</strong>",
        "ENG MODE switch — <strong>OFF</strong>",
        "Fuel PUMP — <strong>OFF</strong>",
        "FUEL switch — <strong>OFF</strong>",
        "XFEED — <strong>CLOSED</strong>",

        // INLINE QUESTION (correct format)
        {
          type: "question",
          text: "Does the FIRE warning clear?",
          choices: [
            { text: "Yes", next: "__open:emergency-post-crash-shutdown" },
            { text: "No — Fire warning persists", next: "fire_persists" },
          ],
        },
      ],
    },

    // ========================= FIRE PERSISTS =========================
    fire_persists: {
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",
      actions: [
        ":: <strong><span class='text-alert-red'>1(2) ENG FIRE</span> warning persists:</strong>",
        "Set FIRE EXTING switch — <strong>BTL2</strong>",

        {
          type: "caution",
          text: "In case of a subsequent fire in the other engine bay the initial ARM 1(2) pushbutton must be deselected to allow operation of the ARM 2(1) pushbutton.",
        },

        // CLICKABLE EXIT
        {
          type: "action",
          text: "Carry out <strong>EMERGENCY / POST CRASH SHUTDOWN</strong> procedure __open:emergency-post-crash-shutdown",
        },
      ],

      next: "__open:emergency-post-crash-shutdown",
    },
  },
};
