export const ENGINE_FIRE_FLIGHT = {
  id: "engine-fire-flight",
  title: "ENGINE BAY FIRE (FLIGHT)",
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

        "Achieve safe OEI Flight",

        ":: On affected engine:",
        "ENG MODE switch — <strong>IDLE</strong>",
        "Confirm engine FIRE — check indications",
        "ECL — <strong>OFF</strong>",
        "Lift FIRE/ARM guard and press illuminated pushbutton",
        "Set FIRE EXTING switch — <strong>BTL1</strong>",

        ":: When conditions permit:",
        "ENG MODE switch — <strong>OFF</strong>",
        "Fuel PUMP — <strong>OFF</strong>",
        "FUEL switch — <strong>OFF</strong>",
        "XFEED — <strong>CLOSED</strong>",

        {
          type: "question",
          text: "Does the FIRE warning clear?",
          choices: [
            { text: "Yes", next: "fire_clears_after_btl1" },
            {
              text: "No — Fire warning persists",
              next: "fire_persists_after_btl1",
            },
          ],
        },
      ],
    },

    // ========================= FIRE CLEARS AFTER BTL1 =========================
    fire_clears_after_btl1: {
      type: "actions",
      buttonLabel: "CAUTION →",

      actions: [
        ":: FIRE warning clears after BTL1:",
        "Deselect FIRE/ARM pushbutton",
        "Land as soon as possible",
      ],

      next: "post_actions",
    },

    // ========================= FIRE PERSISTS AFTER BTL1 =========================
    fire_persists_after_btl1: {
      type: "actions",

      actions: [
        ":: <strong><span class='text-alert-red'>1(2) ENG FIRE</span> warning persists after BTL1:</strong>",
        "Set FIRE EXTING switch — <strong>BTL2</strong>",

        {
          type: "question",
          text: "Does the FIRE warning clear now?",
          choices: [
            { text: "Yes", next: "fire_clears_after_btl2" },
            {
              text: "No — Fire warning still persists",
              next: "fire_persists_after_btl2",
            },
          ],
        },
      ],
    },

    // ========================= FIRE CLEARS AFTER BTL2 =========================
    fire_clears_after_btl2: {
      type: "actions",
      buttonLabel: "CAUTION →",

      actions: [
        ":: FIRE warning clears after BTL2:",
        "Land as soon as possible",
      ],

      next: "post_actions",
    },

    // ========================= FIRE PERSISTS AFTER BTL2 =========================
    fire_persists_after_btl2: {
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",

      actions: [
        ":: FIRE warning persists after BTL2:",
        "<strong>LAND IMMEDIATELY</strong>",
        {
          type: "caution",
          text: "In case of a subsequent fire in the other engine bay the initial ARM 1(2) pushbutton must be deselected to allow operation of the ARM 2(1) pushbutton.",
        },

        {
          type: "note",
          text: "When XFEED is CLOSED the affected engine fuel tank will have a maximum of 228 kg of unusable fuel. If essential, and the pilot is sure the engine fire has been contained, the unusable fuel can be made available by setting XFEED to OPEN and fuel PUMP ON.",
        },
      ],

      next: "__open:emergency-post-crash-shutdown",
    },

    // ========================= CAUTION PAGE (FINAL) =========================
    post_actions: {
      type: "actions",

      actions: [
        {
          type: "caution",
          text: "In case of a subsequent fire in the other engine bay the initial ARM 1(2) pushbutton must be deselected to allow operation of the ARM 2(1) pushbutton.",
        },

        {
          type: "note",
          text: "When XFEED is CLOSED the affected engine fuel tank will have a maximum of 228 kg of unusable fuel. If essential, and the pilot is sure the engine fire has been contained, the unusable fuel can be made available by setting XFEED to OPEN and fuel PUMP ON.",
        },
      ],

      next: "complete",
    },
  },
};
