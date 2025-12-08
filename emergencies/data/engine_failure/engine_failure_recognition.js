export const ENGINE_FAILURE_RECOGNITION = {
  title: "ENGINE FAILURE RECOGNITION",
  items: [
    { type: "header", text: "ENGINE FAILURE RECOGNITION" },

    {
      type: "plain",
      text: "The following cues will be available to the crew following a single or multiple engine failure:",
    },

    {
      type: "action",
      text: "Noticeable right sideslip (helicopter nose swinging to the left)",
    },
    {
      type: "action",
      text: "Illumination of the CAS Warning <span class='text-alert-red'>1(2) ENG OUT</span> caption",
    },
    {
      type: "action",
      text: "An audible tone and an ENGINE 1(2) OUT voice warning",
    },
    {
      type: "action",
      text: "The failed engine PI/torque will split significantly from the operational engine",
    },
    {
      type: "action",
      text: "Dependent on collective position at the time of the failure, a drop in rotor speed (NR) may occur.",
    },
  ],
};
