export const ENGINE_DRIVE_SHAFT = {
  title: "ENGINE DRIVE SHAFT FAILURE",
  items: [
    {
      type: "flow-box",
      text: "1(2) OVSPD",
      caution: true,
    },
    { type: "flow-arrow" },

    {
      type: "flow-box",
      text: "Rapid decrease in engine 1(2) TQ to 0 with NF1(2) above NR and/or possible",
    },
    { type: "flow-arrow" },

    {
      type: "flow-box",
      text: "NF approx 110% and/or PI 0%, drive shaft failure on affected engine",
    },
    { type: "flow-arrow" },

    {
      type: "action",
      text: "Achieve safe OEI flight",
    },

    {
      type: "note",
      text: "Following engine drive shaft failure, NF may overspeed and reach the NF overspeed trip point (111%).",
    },

    {
      type: "action",
      text: "Carry out ENGINE SHUTDOWN IN EMERGENCY procedure __open:engine-shutdown-emergency",
    },
  ],
};
