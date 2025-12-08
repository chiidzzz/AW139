export const BAGGAGE_BAY_FIRE = {
  id: "baggage-bay-fire",
  title: "BAGGAGE BAY FIRE",
  interactive: true,

  steps: [
    // ========================= START =========================
    {
      id: "start",
      type: "choice",
      question: "Where is the aircraft?",
      alert: true,
      warningText: "BAG FIRE",
      choices: [
        { text: "On Ground", next: "__open:emergency-post-crash-shutdown" },
        { text: "In Flight", next: "flight-bag-check" },
      ],
    },

    // ========================= IN FLIGHT — STEP 1 =========================
    {
      id: "flight-bag-check",
      type: "action-question",
      action: "Check BAG illuminated on FIRE EXTING panel",
      question: "Is BAG illuminated?",
      choices: [
        { text: "Yes", next: "bag-vent-actions" },
        { text: "No", next: "lamp-check" },
      ],
    },

    // ========================= BAG ILLUMINATED =========================
    {
      id: "bag-vent-actions",
      type: "action-question",
      action:
        "1. Select VENT CREW switch to <strong>FAN HIGH</strong><br>" +
        "2. Select VENT PAX switch to <strong>ON</strong>",
      question: "Is there smoke in the cabin?",
      choices: [
        { text: "Yes", next: "smoke-persists-check" },
        { text: "No", next: "land-soon" },
      ],
    },

    // ========================= SMOKE EXISTS → check persistence =========================
    {
      id: "smoke-persists-check",
      type: "choice",
      question: "Does smoke persist and intensity increase?",
      choices: [
        { text: "Yes", next: "heavy-smoke-actions" },
        { text: "No", next: "land-soon" },
      ],
    },

    // ========================= HEAVY SMOKE =========================
    {
      id: "heavy-smoke-actions",
      type: "actions",
      buttonLabel: "EMERGENCY / POST CRASH SHUTDOWN →",
      actions: [
        "OPEN windows to ventilate cockpit (cabin emergency windows, left side only, PUSH to release)",
        "Reduce airspeed to below 50 KIAS",
        "<strong>LAND IMMEDIATELY</strong>",
      ],
      next: "__open:emergency-post-crash-shutdown",
    },

    // ========================= LAND SOON =========================
    {
      id: "land-soon",
      type: "actions",
      actions: ["<strong>Land as soon as possible</strong>"],
      next: "complete",
    },

    // ========================= LAMP CHECK =========================
    {
      id: "lamp-check",
      type: "action-question",
      action: "Carry out lamp check",
      question: "Is BAG lamp functioning?",
      choices: [
        { text: "Yes", next: "spurious-cas" },
        { text: "No", next: "bag-vent-actions" },
      ],
    },

    // ========================= SPURIOUS CAS =========================
    {
      id: "spurious-cas",
      type: "actions",
      actions: [
        "Possible spurious CAS indication",
        "<strong>Land as soon as practicable</strong>",
      ],
      next: "complete",
    },

    // ========================= FINAL =========================
    {
      id: "complete",
      type: "complete",
      text: "Procedure Complete",
    },
  ],
};
