const EMERGENCIES_DATA = [
  {
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
  },
  {
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
        text: "Tone and “ROTOR HIGH”",
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
  },
  {
    title: "ENGINE OUT",
    items: [
      {
        type: "flow-box-with-note",
        text: "1(2) ENG OUT",
        alert: true,
        rightNote: "+ Audio Tone and Voice Warning",
      },
      { type: "flow-arrow" },
      {
        type: "flow-box",
        text: "Associated engine NG < 34.3% or rate of change outside predetermined limits",
      },
      { type: "flow-arrow" },
      {
        type: "action",
        text: "Adjust collective as required to achieve safe OEI flight",
      },
      { type: "flow-arrow" },

      // --- If affected engine has flamed out ---
      {
        type: "flow-box",
        text: "If affected engine has flamed out",
        highlight: true,
      },
      { type: "flow-arrow" },
      {
        type: "action",
        text: "Carry out ENGINE SHUTDOWN IN AN EMERGENCY procedure (Page 3-35)",
      },
      { type: "action", text: "Land as soon as practicable" },
      {
        type: "flow-box",
        text: "Consider relight only if cause of flame-out known and relight essential",
        subtext: "ENGINE RESTART IN FLIGHT procedure (Page 3-89)",
      },
      { type: "flow-arrow" },

      // --- If engine still running above G.I. ---
      {
        type: "flow-box",
        text: "If engine at low power but still running above G.I.",
        highlight: true,
      },
      { type: "flow-arrow" },
      {
        type: "action",
        text: "Select ENG GOV to MANUAL control",
      },
      { type: "flow-arrow" },
      {
        type: "flow-dual",
        left: {
          text: "Manual control effective",
          detail:
            "Continue flight controlling engine power manually<br>Land as soon as practicable",
        },
        right: {
          text: "Manual control ineffective",
          detail:
            "Carry out ENGINE SHUTDOWN IN AN EMERGENCY procedure (Page 3-35)<br>Land as soon as practicable",
        },
      },

      // --- Note ---
      {
        type: "note",
        text: "If possible, torque of the manually controlled engine should be maintained about 10% below the other engine. (If PI on either/both engines is ITT or NG limited, refer to TQ on MFD PWR PLANT page.)",
      },
    ],
  },
  {
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
      { type: "flow-arrow" },
      {
        type: "action",
        text: "Carry out ENGINE SHUTDOWN IN AN EMERGENCY procedure (Page 3-35)",
      },
      { type: "flow-arrow" },
      {
        type: "action",
        text: "Land as soon as practicable",
      },
      {
        type: "note",
        text: "Following engine drive shaft failure, NF may overspeed and reach the NF overspeed trip point (111%).",
      },
    ],
  },
  {
    title: "ENGINE IDLE",
    items: [
      {
        type: "flow-box-with-note",
        text: "1(2) ENG IDLE",
        rightNote: "+ Voice Warning",
        alert: true, // red warning light
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
  },
  {
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
        text: "Illumination of the CAS Warning <span class='text-alert'>1(2) ENG OUT</span> caption",
      },
      {
        type: "action",
        text: "An audible tone and an ”ENGINE 1(2) OUT” voice warning",
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
  },
  {
    title: "SINGLE ENGINE FAILURE IN HOVER (5 TO 10 FT)",
    items: [
      { type: "header", text: "SINGLE ENGINE FAILURE IN HOVER (5 TO 10 FT)" },

      {
        type: "action",
        text: "<strong>Collective pitch —</strong> Maintain collective pitch setting or lower collective slightly if required to establish descent.",
      },
      {
        type: "action",
        text: "<strong>Touchdown —</strong> Increase collective to cushion landing as touchdown becomes imminent.",
      },
      {
        type: "action",
        text: "<strong>Landing —</strong> After touchdown, centralize cyclic and simultaneously reduce collective to minimum. Apply wheel brakes as required.",
      },
    ],
  },
  {
    title: "SINGLE ENGINE FAILURE ON TAKE OFF (CATEGORY B)",
    items: [
      { type: "header", text: "SINGLE ENGINE FAILURE ON TAKE OFF CATEGORY B" },

      {
        type: "plain",
        text: "If gross weight and flight path permit, takeoff and climb out may be continued. For a rejected takeoff carry out the following:",
      },

      {
        type: "action",
        text: "<strong>Collective pitch —</strong> Reduce as necessary to maintain rotor RPM if altitude permits.",
      },
      {
        type: "action",
        text: "<strong>Cyclic —</strong> Make a partial flare to reduce ground speed. Limit flare to 15° when close to the ground.",
      },
      {
        type: "action",
        text: "<strong>Collective pitch —</strong> Apply to cushion touchdown.",
      },
      {
        type: "action",
        text: "<strong>Landing —</strong> After touchdown, centralize cyclic and simultaneously reduce collective to minimum.",
      },
      {
        type: "action",
        text: "<strong>Brakes —</strong> Apply wheel brakes to minimize ground roll.",
      },
    ],
  },
  {
    title: "SINGLE ENGINE FAILURE DURING CRUISE",
    items: [
      { type: "header", text: "SINGLE ENGINE FAILURE DURING CRUISE" },

      {
        type: "action",
        text: "<strong>Collective —</strong> Adjust as necessary to maintain rotor RPM and torque within limits.",
      },
      {
        type: "action",
        text: "<strong>Cyclic —</strong> Establish Safe OEI flight.",
      },
      {
        type: "action",
        text: "<strong>Collective —</strong> Re-adjust collective to minimize altitude loss by applying up to maximum OEI power.",
      },
      {
        type: "action",
        text: "<strong>Engine restart —</strong> Consider engine re-start if cause of initial failure has been determined and corrected. See ENGINE RESTART IN FLIGHT procedure (Page 3-89).",
      },
      {
        type: "action",
        text: "<strong>Engine —</strong> If engine restart fails or no attempt to restart is made, carry out the ENGINE SHUTDOWN IN AN EMERGENCY procedure (Page 3-35).",
      },
    ],
  },
  {
    title: "SINGLE ENGINE LANDING CATEGORY B",
    items: [
      { type: "header", text: "SINGLE ENGINE LANDING CATEGORY B" },

      {
        type: "action",
        text: "<strong>Pre-landing checks —</strong> Establish normal approach and carry out pre-landing checks.",
      },
      {
        type: "action",
        text: "<strong>Landing direction —</strong> Orientate the aircraft for an approach into the prevailing wind.",
      },
      {
        type: "action",
        text: "<strong>Initial point —</strong> During the approach, reduce airspeed gradually to arrive at a point 200 ft (61 m) above the touchdown point with a rate of descent ≤ 500 fpm. Initiate deceleration to achieve 30 KIAS at 50 ft (15 m). Rotate nose up to max 20° at 50 ft to decelerate.",
      },
      {
        type: "action",
        text: "<strong>Collective —</strong> Continue deceleration to running touchdown or hover. Use collective to cushion touchdown. Maximum nose-up attitude on touchdown: 15°.",
      },
      {
        type: "action",
        text: "<strong>Landing —</strong> After touchdown, centralize cyclic and reduce collective to minimum.",
      },
      {
        type: "action",
        text: "<strong>Braking —</strong> Apply wheel brakes as required.",
      },
    ],
  },
];

const app = Vue.createApp({
  data() {
    return {
      query: "",
      selected: null,
    };
  },
  computed: {
    filtered() {
      const q = this.query.trim().toLowerCase();
      if (!q) return [];
      return EMERGENCIES_DATA.filter((e) => e.title.toLowerCase().includes(q));
    },
  },
  methods: {
    select(item) {
      this.selected = item;
      this.query = item.title;
    },
  },
});

app.mount("#app");
