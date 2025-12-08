export const ENGINE_IDLE = {
  title: "ENGINE IDLE",
  items: [
    {
      type: "flow-box-with-note",
      text: "1(2) ENG IDLE",
      rightNote: "+ Voice Warning",
      alert: true,
    },
    { type: "flow-arrow" },
    {
      type: "action",
      text: "(Warning triggered only with aircraft on ground)",
    },
    { type: "flow-arrow" },
    {
      type: "flow-box",
      text: "Take-off commenced with associated engine at IDLE<br>or<br>Associated engine MODE switch at IDLE and collective not fully down",
    },
    { type: "flow-arrow" },
    {
      type: "action",
      text: "Reduce collective to MPOG",
    },
    {
      type: "action",
      text: "Select engine MODE switch to FLT before TAKE-OFF",
    },
  ],
};
