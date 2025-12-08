export const ENGINE_EXHAUST_FIRE_AFTER_SHUTDOWN = {
  id: "engine-exhaust-fire-after-shutdown",
  title: "ENGINE EXHAUST FIRE AFTER SHUTDOWN",

  items: [
    {
      type: "header",
      text: "ENGINE EXHAUST FIRE AFTER SHUTDOWN",
    },

    {
      type: "plain",
      text: "If there are visible signs of fire in the engine exhaust, possibly accompanied by a rising ITT after shutdown, personnel should not be allowed to exit until the following actions have been carried out:",
    },

    { type: "action", text: "1. Fire warnings — Confirm not illuminated." },
    { type: "action", text: "2. ENG GOV switch — Set MAN." },

    {
      type: "action",
      text: "3. ENGINE IGN circuit breaker — Out. <span class='small'>(Overhead CB panel, ringed in WHITE)</span>",
    },

    {
      type: "action",
      text: "4. BUS TIE switch — Select ON <span class='small'>(for ENG 2 only)</span>.",
    },

    { type: "action", text: "5. ECL — OFF." },
    { type: "action", text: "6. ECL starter pushbutton — Push." },

    {
      type: "action",
      text: "7. Gas generator (NG) — Note increasing.",
    },

    {
      type: "action",
      text: "8. ECL starter pushbutton — Push to stop when ITT decrease is noted <span class='small'>(not more than 45 seconds; Starter Duty Cycle must be respected)</span>.",
    },

    {
      type: "action",
      text: "9. Rotors stopped — Evacuate aircraft.",
    },
  ],
};
