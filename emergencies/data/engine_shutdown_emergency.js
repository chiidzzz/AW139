export const ENGINE_SHUTDOWN_EMERGENCY = {
  id: "engine-shutdown-emergency",
  title: "ENGINE SHUTDOWN IN EMERGENCY",
  interactive: true,

  steps: [
    {
      id: "start",
      type: "actions",
      actions: [
        ":: ENGINE SHUTDOWN IN EMERGENCY",

        {
          type: "caution",
          text: "Care should be taken in confirming the failed engine prior to commencing this shutdown procedure.",
        },

        {
          type: "caution",
          text: "If there is evidence of combustion after engine shutdown in flight, carry out a dry motoring procedure as required to extinguish possible fire.",
        },

        ":: Following engine failure/malfunction, establish safe OEI flight. Then shut down the failed engine:",

        "ENG MODE switch — <strong>OFF</strong>.",
        ":: If engine does not shut down then:",
        "ECL — <strong>OFF</strong>.",
        "FUEL PUMP — <strong>OFF</strong>, unless crossfeed required.",
        "ENG FUEL switch — <strong>OFF</strong> (fuel valve indicator horizontal).",
        "Fuel contents — Monitor; use crossfeed if required.",

        {
          type: "note",
          text: "If crossfeed is used, monitor fuel contents and fuel system indications carefully.",
        },
      ],
      next: "complete",
    },

    {
      id: "complete",
      type: "action",
      text: "<strong>Procedure Complete</strong>",
      next: "complete",
    },
  ],
};
