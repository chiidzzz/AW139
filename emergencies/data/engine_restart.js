export const ENGINE_RESTART = {
  id: "engine-restart",
  title: "ENGINE RESTART IN FLIGHT",
  interactive: true,

  steps: {
    start: {
      type: "choice",
      question: "Select restart procedure:",
      choices: [
        { text: "Normal Restart", next: "restart-normal-general" },
        { text: "Manual Restart", next: "restart-manual-general" },
      ],
    },

    // ================= NORMAL RESTART =====================
    "restart-normal-general": {
      type: "actions",
      actions: [
        ":: ENGINE RESTART IN FLIGHT PROCEDURE",
        ":: GENERAL",

        ":: If an engine flames out or is shut down during flight and there is no indication of a mechanical malfunction or engine fire, the engine may be restarted.",

        {
          type: "note",
          text: "If, after a double engine failure, ENG 2 is to be started first set BUS TIE to ON.",
        },
        { type: "reset" },
        ":: STARTING MALFUNCTIONS AND ASSOCIATED ABORT ACTIONS",

        "Light-up is not within 10 seconds of ENG MODE switch to IDLE",
        "Abnormal noise heard",
        "ITT increases beyond engine limits (HOT START caution illuminated).",
        "Engine hangs (stagnation in NG below 54%)",
        "Engine starter fails to disengage by 49% NG.",

        { type: "reset" },

        ":: Shut down engine by:",

        "ENG MODE switch — OFF",
        "ECL — OFF",
        "FUEL PUMP — OFF",
        "ENG FUEL switch — OFF",

        {
          type: "caution",
          text: "Failure to follow the appropriate abort procedure may cause damage to the engine.",
        },

        {
          type: "note",
          text: "Observe the starter generator duty cycle limitations.",
        },
      ],
      next: "restart-normal-proc",
    },

    "restart-normal-proc": {
      type: "actions",
      actions: [
        ":: RESTARTING PROCEDURE",

        {
          type: "caution",
          text: "AP1 may disengage during starter activation.",
        },

        "Airspeed — Less than 120 KIAS.",
        "ECL — Confirm FLIGHT.",
        "ENG Fuel switch — ON - Fuel valve indicator vertical.",
        "FUEL PUMP — ON - FUEL PUMP caution not illuminated, check pressure.",
        "MFD — Confirm PWR PLANT page.",
        "ENG MODE switch — Depending on altitude:",

        ":: Below 15000 ft (4572 m) Hp: select IDLE.",
        ":: Above 15000 ft (4572 m) Hp: select IDLE when NG at 0%.",

        {
          type: "note",
          text: "It is recommended to start the engine to IDLE, if necessary, it is possible to start to FLIGHT by setting the ENG MODE switch directly to FLT.",
        },

        "Gas Producer NG — Note increasing and START legend displayed.",
        "ITT — Note increasing and IGN legend displayed.",
        "Oil pressure — Confirm rising.",
        "Starter — Disengages by 49% NG.",
        "NF — Stabilizes below 100% (or 100% if started to FLT).",

        "ENG MODE — FLT.",
        "Engine parameters — Confirm within limits.",
      ],
      next: "complete",
    },

    // =============== MANUAL RESTART ======================
    "restart-manual-general": {
      type: "actions",
      actions: [
        ":: ENGINE RESTART IN FLIGHT PROCEDURE",

        { type: "reset" },
        ":: STARTING MALFUNCTIONS AND ASSOCIATED ABORT ACTIONS",

        "Light-up is not within 10 seconds of ECL starter pushbutton engagement",
        "Abnormal noise heard",
        "ITT increases beyond engine limits (HOT START caution illuminated).",
        "Engine hangs (stagnation in NG below 54%) and NG cannot be accelerated with movement of ECL",
        "Engine starter fails to disengage by 49% NG.",

        { type: "reset" },

        ":: Shut down engine by:",

        "ENG MODE switch — OFF",
        "ECL — OFF",
        "FUEL PUMP — OFF",
        "ENG FUEL switch — OFF",

        {
          type: "caution",
          text: "Failure to follow the appropriate abort procedure may cause damage to the engine.",
        },

        {
          type: "note",
          text: "Observe the starter generator duty cycle limitations.",
        },
      ],
      next: "restart-manual-proc",
    },

    "restart-manual-proc": {
      type: "actions",
      actions: [
        ":: MANUAL IN FLIGHT RESTART PROCEDURE",

        {
          type: "caution",
          text: "AP1 may disengage during starter activation.",
        },

        "MFD — Confirm PWR PLANT page.",
        "ECL — OFF on required engine.",
        "ENG GOV — MANUAL.",
        "ENG Fuel switch — ON - Fuel valve indicator vertical.",
        "FUEL PUMP — ON - FUEL PUMP caution not illuminated, check pressure.",
        "ENG MODE switch — Depending on altitude:",
        ":: Below 15000 ft (4572 m) Hp: select IDLE when NG below 20%.",
        ":: Above 15000 ft (4572 m) Hp: select IDLE when NG at 0%.",

        {
          type: "note",
          text: "Confirm no engine bleeds are operating (HEATER and/or EAPS OFF, if fitted).",
        },

        "ECL starter pushbutton — Push and release, START and IGN legends displayed.",
        "NG — Note increasing.",
        "ECL — Advance to FLIGHT when NG > 15% and ITT < 200°C.",
        "ITT — Confirm increasing.",
        "Engine oil pressure  — Confirm increasing.",
        "Oil pressure — Rising.",
        "Starter — Disengage above 49% NG.",
        "NG — Stabilize at or above 68%.",

        {
          type: "note",
          text: "If NG hangs below 68%, advance ECL beyond FLIGHT to accelerate to 68% NG then return to FLIGHT.",
        },

        "Engine parameters — Confirm within limits.",

        {
          type: "caution",
          text: "In manual mode the ECL must be advanced to adjust engine power. This should be carried out using the ECL beep switch. It is recommended that the manual engine be set to a torque 10% lower than the other engine.",
        },
      ],
      next: "complete",
    },

    complete: {
      type: "action",
      text: "<strong>Restart Procedure Complete</strong>",
      next: "complete",
    },
  },
};
