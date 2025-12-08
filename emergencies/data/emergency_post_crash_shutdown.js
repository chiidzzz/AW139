export const EMERGENCY_POST_CRASH_SHUTDOWN = {
  id: "emergency-post-crash-shutdown",
  title: "EMERGENCY / POST CRASH SHUTDOWN",
  interactive: false,

  items: [
    {
      type: "header",
      text: "In the event of an emergency or crash landing, priority must be given to ensuring that personnel are evacuated safely at the most appropriate time. Every effort should be made to carry out the following shutdown procedures immediately:",
    },

    { type: "action", text: "ENG MODE 1 & 2 switches — <strong>OFF</strong>." },

    { type: "plain", text: "If engine does not shut down then:" },

    { type: "action", text: "ECL 1 & 2 — <strong>OFF</strong>." },

    {
      type: "action",
      text: "FUEL PUMP 1 & 2 switches — <strong>OFF</strong>.",
    },

    { type: "action", text: "ENG FUEL 1 & 2 switches — <strong>OFF</strong>." },

    {
      type: "action",
      text: "ENG 1 & 2 FIRE ARM pushbuttons — Lift guard and press appropriate pushbutton, if required.",
    },

    {
      type: "action",
      text: "ENG EXTING switch — Select <strong>BTL 1</strong> and/or 2, if required.",
    },

    { type: "plain", text: "When rotor stopped:" },

    {
      type: "action",
      text: "GEN 1 & 2 and BATT MASTER switches — <strong>OFF</strong> (using gang-bar).",
    },
  ],
};
