export const ROTOR_OVERSPEED = {
  title: "ROTOR OVER-SPEED",
  items: [
    {
      type: "flow-box-with-note",
      text: "ROTOR HIGH",
      alert: true,
      rightNote: "+ Audio Tone and Voice Warning",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "Rotor RPM above limit",
      subtext: "Check NR on PFD",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "Tone and ROTOR HIGH",
      subtext: "Above 104% — Power ON or OEI<br>Above 110% — Power OFF",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "If rotor speed high:",
      highlight: true,
    },
    { type: "flow-arrow" },
    { type: "action", text: "Raise collective to decrease rotor speed" },
    {
      type: "action",
      text: "Refer to engine emergency and malfunction drills if relevant",
    },
  ],
};
