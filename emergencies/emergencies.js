// ===============================================
// IMPORT ALL EMERGENCY MODULES
// ===============================================
import { ROTOR_UNDERSPEED } from "./data/rotor_underspeed.js";
import { ROTOR_OVERSPEED } from "./data/rotor_overspeed.js";
import { ENG_OUT } from "./data/eng_out.js";
import { ENGINE_RESTART } from "./data/engine_restart.js";
import { ENGINE_DRIVE_SHAFT } from "./data/engine_drive_shaft.js";
import { ENGINE_IDLE } from "./data/engine_idle.js";
import { ENGINE_FAILURE_RECOGNITION } from "./data/engine_failure/engine_failure_recognition.js";
import { SE_HOVER } from "./data/engine_failure/single_engine_hover.js";
import { SE_TAKEOFF_B } from "./data/engine_failure/single_engine_takeoff_b.js";
import { SE_CRUISE } from "./data/engine_failure/single_engine_cruise.js";
import { SE_LAND_B } from "./data/engine_failure/single_engine_landing_b.js";
import { ENGINE_FIRE_GROUND } from "./data/fire/engine_fire_ground.js";
import { ENGINE_FIRE_FLIGHT } from "./data/fire/engine_fire_flight.js";
import { BAGGAGE_BAY_FIRE } from "./data/fire/baggage_bay_fire.js";
import { ENGINE_SHUTDOWN_EMERGENCY } from "./data/engine_shutdown_emergency.js";
import { EMERGENCY_POST_CRASH_SHUTDOWN } from "./data/emergency_post_crash_shutdown.js";
import { COCKPIT_CABIN_FIRE_GROUND } from "./data/fire/cockpit_cabin_fire_ground.js";
import { COCKPIT_CABIN_FIRE_FLIGHT } from "./data/fire/cockpit_cabin_fire_flight.js";
import { ENGINE_EXHAUST_FIRE_AFTER_SHUTDOWN } from "./data/fire/engine_exhaust_fire_after_shutdown.js";
import { ELECTRICAL_FIRE_SMOKE_FLIGHT } from "./data/fire/electrical_fire_smoke_flight.js";
import { EXTENDED_FLIGHT_ENDURANCE } from "./data/electrical_systems/extended_flight_endurance.js";

// ===============================================
// MASTER LIST
// ===============================================
const EMERGENCIES_DATA = [
  ROTOR_UNDERSPEED,
  ROTOR_OVERSPEED,
  ENG_OUT,
  ENGINE_RESTART,
  ENGINE_DRIVE_SHAFT,
  ENGINE_IDLE,
  ENGINE_FAILURE_RECOGNITION,
  SE_HOVER,
  SE_TAKEOFF_B,
  SE_CRUISE,
  SE_LAND_B,
  ENGINE_FIRE_GROUND,
  ENGINE_FIRE_FLIGHT,
  BAGGAGE_BAY_FIRE,
  ENGINE_SHUTDOWN_EMERGENCY,
  EMERGENCY_POST_CRASH_SHUTDOWN,
  COCKPIT_CABIN_FIRE_GROUND,
  COCKPIT_CABIN_FIRE_FLIGHT,
  ENGINE_EXHAUST_FIRE_AFTER_SHUTDOWN,
  ELECTRICAL_FIRE_SMOKE_FLIGHT,
  EXTENDED_FLIGHT_ENDURANCE,
];

// ===============================================
// VUE APP
// ===============================================
const app = Vue.createApp({
  data() {
    return {
      query: "",
      selected: null,
      currentStep: null,
      history: [],
    };
  },

  computed: {
    filtered() {
      const q = this.query.trim().toLowerCase();
      if (!q) return [];
      return EMERGENCIES_DATA.filter((e) => e.title.toLowerCase().includes(q));
    },

    isInteractive() {
      return this.selected && this.selected.interactive;
    },

    currentStepData() {
      if (!this.isInteractive || !this.currentStep) return null;

      const steps = this.selected.steps;

      // ARRAY (rare, but supported)
      if (Array.isArray(steps)) {
        return steps.find((s) => s.id === this.currentStep) || null;
      }

      // OBJECT (majority of interactive flows)
      if (steps && typeof steps === "object") {
        return steps[this.currentStep] || null;
      }

      return null;
    },
  },

  methods: {
    select(item) {
      this.selected = item;
      this.query = item.title;

      if (item.interactive) {
        this.currentStep = "start";
        this.history = [];
      }
    },

    // =====================================================
    // SAFE NUMBERING
    // =====================================================
    getActionNumber(actions, index) {
      let count = 0;

      for (let i = 0; i <= index; i++) {
        const item = actions[i];

        if (!item) continue;

        // RESET
        if (typeof item === "object" && item.type === "reset") {
          count = 0;
          continue;
        }

        // Skip objects entirely
        if (typeof item === "object") continue;

        if (typeof item !== "string") continue;

        const t = item.trim();
        if (!t) continue;

        if (t.startsWith("::")) continue;
        if (t.startsWith("—") || t.startsWith("-")) continue;
        if (/^(note|caution|warning)\s*:/i.test(t)) continue;

        // Valid step
        count++;
      }

      return count;
    },

    // =====================================================
    // HANDLES BOTH NORMAL STEPS + CROSS-PROCEDURE LINKS
    // =====================================================
    chooseOption(nextStepId) {
      // Cross-navigation e.g. "__open:engine-shutdown-emergency"
      if (typeof nextStepId === "string" && nextStepId.startsWith("__open:")) {
        const targetId = nextStepId.replace("__open:", "").trim();
        const target = EMERGENCIES_DATA.find((e) => e.id === targetId);

        if (target) {
          this.selected = target;
          this.currentStep = "start";
          this.history = [];
        }
        return;
      }

      // Standard navigation
      if (this.currentStep) this.history.push(this.currentStep);
      this.currentStep = nextStepId;
    },

    // Called when clicking an inline action link
    handleAction(text) {
      if (!text.includes("__open:")) return;

      const targetId = text.split("__open:")[1].trim();
      const target = EMERGENCIES_DATA.find((e) => e.id === targetId);

      if (target) {
        this.selected = target;
        this.currentStep = "start";
        this.history = [];
      }
    },

    // Formats an action line (makes only the clickable part blue + underlined)
    formatAction(text) {
      if (!text.includes("__open:")) return text;

      const [label, cmd] = text.split("__open:");
      return `
        ${label.trim()}
        <span class="action-link">(${cmd.trim()})</span>
      `;
    },

    goBack() {
      if (this.history.length > 0) {
        this.currentStep = this.history.pop();
      }
    },

    restart() {
      this.currentStep = "start";
      this.history = [];
    },
  },
});

app.mount("#app");
