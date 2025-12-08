export const ROTOR_UNDERSPEED = {
  title: "ROTOR UNDER-SPEED",
  items: [
    {
      type: "flow-box-with-note",
      text: "ROTOR LOW",
      alert: true,
      rightNote: "+ Audio Tone and Voice Warning",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "Rotor RPM below limit",
      subtext: "Check NR on PFD",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "Tone and ROTOR LOW indications",
      subtext:
        "Below 98% — Power ON<br>Below 90% — Power ON (OEI Landing)<br>Below 95% — Power OFF",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "If rotor speed low:",
      highlight: true,
    },
    { type: "flow-arrow" },
    { type: "action", text: "Lower collective to increase rotor speed" },
    {
      type: "action",
      text: "Refer to engine emergency and malfunction drills if relevant",
    },
  ],
};
