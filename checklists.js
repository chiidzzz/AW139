// ====== Embedded CHECKLISTS_DATA (moved from app.js) ======
const CHECKLISTS_DATA = {
  "quick-start": {
    title: "QUICK ENGINE START",
    items: [
      {
        type: "caution",
        text: "CAUTION: Ensure second engine engages as the NF reaches FLIGHT condition. A failed engagement is indicated by positive NF value and near zero torque. If this occurs, shut down the non engaged engine first and when engine stopped shut down other engine. If a hard engagement occurs, shut down both engines for maintenance action.",
      },
      { type: "check", text: "BUS TIE switch", action: "ON" },
      {
        type: "check",
        text: "ENG 1 FUEL switch",
        action: "ON - Fuel valve indicator vertical",
      },
      { type: "check", text: "MFD display", action: "Confirm PWR PLANT page" },
      {
        type: "check",
        text: "FUEL PUMP 1 switch",
        action: "ON - Check pressure",
      },
      {
        type: "check",
        text: "ENG 2 FUEL switch",
        action: "ON - Fuel valve indicator vertical",
      },
      {
        type: "check",
        text: "FUEL PUMP 2 switch",
        action: "ON - Check pressure",
      },
      { type: "check", text: "ENG 1 MODE switch", action: "FLT" },
      {
        type: "check",
        text: "ENG 2 MODE switch",
        action: "FLT when N°1 engine NG is above 25%",
      },
      {
        type: "caution",
        text: "CAUTION: Avoid operating the ENG MODE switches simultaneously.",
      },
      {
        type: "check",
        text: "Gas Producer (NG)",
        action: "Note increasing and START legend displayed",
      },
      {
        type: "check",
        text: "Engine temperature (ITT)",
        action: "Note increasing and IGN legend displayed",
      },
      { type: "check", text: "Engine oil pressure", action: "Confirm rising" },
      {
        type: "check",
        text: "Engine N°1 & N°2 starters",
        action: "Disengaged by 49% NG",
      },
      {
        type: "check",
        text: "Main hydraulic system",
        action:
          "When main rotor begins to rotate, confirm rise in main hydraulic pressure",
      },
      {
        type: "check",
        text: "Cyclic control",
        action: "Confirm centralized on PFD cyclic indicator",
      },
      {
        type: "check",
        text: "N°1 & N°2 engine power turbine speed (NF)",
        action: "Confirm stabilized at 100%",
      },
      {
        type: "check",
        text: "Engine and transmission oil",
        action: "Check pressures and temperatures within limits",
      },
      {
        type: "check",
        text: "External power switch",
        action: "OFF and disconnect external power (if used)",
      },
      {
        type: "check",
        text: "GEN 1 and GEN 2 switches",
        action: "Confirm ON (reset if required)",
      },
      { type: "check", text: "BUS TIE switch", action: "Confirm AUTO" },
      { type: "check", text: "RAD MSTR switch", action: "ON" },
      { type: "check", text: "Clock", action: "Set" },
      { type: "check", text: "Rotor speed", action: "Confirm 100%" },
    ],
  },
  "normal-start": {
    title: "NORMAL ENGINE START",
    items: [
      {
        type: "check",
        text: "ENG 1 FUEL switch",
        action: "ON - Fuel valve indicator bar vertical",
      },
      { type: "check", text: "MFD display", action: "Confirm PWR PLANT page" },
      {
        type: "check",
        text: "FUEL PUMP 1 switch",
        action: "ON - 1 FUEL PUMP caution out, check pressure",
      },
      { type: "check", text: "ENG 1 MODE switch", action: "IDLE" },
      {
        type: "check",
        text: "Gas Producer (NG)",
        action: "Note increasing and START legend displayed",
      },
      {
        type: "check",
        text: "Engine temperature (ITT)",
        action: "Note increasing and IGN legend displayed",
      },
      { type: "check", text: "Engine oil pressure", action: "Confirm rising" },
      {
        type: "check",
        text: "Engine N°1 starter",
        action: "Disengaged by 49% NG",
      },
      {
        type: "check",
        text: "Main hydraulic system",
        action:
          "When main rotor begins to rotate, confirm rise in main hydraulic pressure",
      },
      {
        type: "check",
        text: "Cyclic control",
        action: "Confirm centralized on PFD cyclic indicator",
      },
      {
        type: "check",
        text: "N°1 engine power turbine speed (NF) and rotor speed (NR)",
        action: "Confirm both stabilized to IDLE speed of 65%±1%",
      },
      {
        type: "check",
        text: "Engine and transmission oil",
        action: "Check pressures and temperatures within limits",
      },
      { type: "check", text: "ENG 1 MODE switch", action: "FLT" },
      {
        type: "check",
        text: "GEN 1",
        action: "Confirm ON (reset if required)",
      },
      { type: "header", text: "ENGINE 2 START" },
      {
        type: "check",
        text: "ENG 2 FUEL switch",
        action: "ON - Fuel valve indicator vertical",
      },
      {
        type: "check",
        text: "FUEL PUMP 2 switch",
        action: "ON - 2 FUEL PUMP caution out, check pressure",
      },
      {
        type: "check",
        text: "GEN 1",
        action: "Check loadmeter in GREEN band (if EXT PWR not used)",
      },
      { type: "check", text: "Repeat procedure for engine N°2", action: "" },
      {
        type: "check",
        text: "Engine and transmission parameters",
        action: "Check within limits",
      },
      {
        type: "check",
        text: "External power switch",
        action: "OFF and disconnect external power (if used)",
      },
      {
        type: "check",
        text: "GEN 1 and GEN 2 switches",
        action: "Confirm ON (reset if required)",
      },
      { type: "check", text: "BUS TIE switch", action: "Confirm AUTO" },
      { type: "check", text: "RAD MSTR switch", action: "ON" },
      { type: "check", text: "Clock", action: "Set" },
      { type: "check", text: "Rotor speed", action: "Confirm 100%" },
    ],
  },
  "aborted-start": {
    title: "ABORTED ENGINE START",
    items: [
      {
        type: "caution",
        text: "CAUTION: Failure to follow the Abort Procedure may cause damage to the engine.",
      },
      {
        type: "warning",
        text: "Monitor engine start and if any of the following occur: light up is not within 10 seconds of ENG MODE to IDLE, abnormal noise heard, ITT increases beyond engine limits (HOT START caution illuminated), engine hangs (stagnation in NG below 54%), the main rotor has not begun to rotate when NG reaches 40%, if engine starter fails to disengage by 49% NG.",
      },
      { type: "check", text: "ENG MODE switch", action: "OFF" },
      { type: "header", text: "If engine does not shut down then:" },
      { type: "check", text: "ECL", action: "OFF" },
      { type: "check", text: "FUEL PUMP", action: "OFF" },
      { type: "check", text: "ENG FUEL switch", action: "OFF" },
    ],
  },
};

const app = Vue.createApp({
  data() {
    return {
      currentPage: "menu",
      checklists: CHECKLISTS_DATA,
      currentChecklistId: null,
      checklistStates: {},
      missIndex: null,
      inlineNotice: null,
    };
  },

  computed: {
    currentChecklistData() {
      return this.currentChecklistId
        ? this.checklists[this.currentChecklistId]
        : null;
    },
  },
  mounted() {
    this.loadChecklistStates();
  },
  methods: {
    getAfterColon(s) {
      const i = s.indexOf(":");
      return i >= 0 ? s.slice(i + 1).trim() : s;
    },
    showInlineNotice(index, text = "Complete previous steps first.") {
      this.inlineNotice = { index, text };
      clearTimeout(this.__inlineTimer);
      this.__inlineTimer = setTimeout(() => {
        this.inlineNotice = null;
      }, 1800);
    },
    openChecklist(id) {
      this.currentChecklistId = id;
      this.currentPage = "view";
      this.missIndex = null;
      // ensure state object
      if (!this.checklistStates[id]) this.checklistStates[id] = {};
    },
    backToMenu() {
      this.currentPage = "menu";
      this.currentChecklistId = null;
      this.missIndex = null;
    },
    loadChecklistStates() {
      const saved = localStorage.getItem("aw139-checklist-states");
      if (saved) this.checklistStates = JSON.parse(saved);
    },
    saveChecklistStates() {
      localStorage.setItem(
        "aw139-checklist-states",
        JSON.stringify(this.checklistStates)
      );
    },
    toggleItem(itemIndex) {
      const checklist = this.currentChecklistData;
      if (!checklist) return;
      // If not a 'check' item, ignore toggling
      if (checklist.items[itemIndex]?.type !== "check") return;

      // Find first previous 'check' that isn't done.
      let firstMissing = null;
      for (let i = 0; i < itemIndex; i++) {
        if (checklist.items[i]?.type === "check") {
          if (!this.isItemChecked(i)) {
            firstMissing = i;
            break;
          }
        }
      }
      if (firstMissing !== null) {
        this.missIndex = firstMissing;
        this.showInlineNotice(itemIndex);
        // highlight missing previous step and scroll it into view
        this.$nextTick(() => {
          const el = document.querySelector(`[data-item="${firstMissing}"]`);
          if (el) {
            el.classList.add("miss");
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            setTimeout(() => el.classList.remove("miss"), 1000);
          }
        });
        return;
      }

      // Toggle current
      const state =
        this.checklistStates[this.currentChecklistId] ||
        (this.checklistStates[this.currentChecklistId] = {});
      state[itemIndex] = !state[itemIndex];
      this.saveChecklistStates();

      // If completed all, auto return to menu after a short delay
      if (this.isChecklistComplete(this.currentChecklistId)) {
        setTimeout(() => {
          this.backToMenu();
        }, 700);
      }
    },
    isItemChecked(itemIndex) {
      return !!this.checklistStates[this.currentChecklistId]?.[itemIndex];
    },
    resetCurrentChecklist() {
      if (confirm("Reset this checklist? All progress will be cleared.")) {
        this.checklistStates[this.currentChecklistId] = {};
        this.saveChecklistStates();
        this.missIndex = null;
      }
    },
    isChecklistComplete(checklistId) {
      const checklist = this.checklists[checklistId];
      if (!checklist) return false;
      const state = this.checklistStates[checklistId] || {};
      for (let i = 0; i < checklist.items.length; i++) {
        if (checklist.items[i].type === "check") {
          if (!state[i]) return false;
        }
      }
      // At least one 'check' exists
      return checklist.items.some((it) => it.type === "check");
    },
    getChecklistProgress(checklistId) {
      const checklist = this.checklists[checklistId];
      if (!checklist) return { completed: 0, total: 0 };
      const state = this.checklistStates[checklistId] || {};
      let completed = 0,
        total = 0;
      for (let i = 0; i < checklist.items.length; i++) {
        if (checklist.items[i].type === "check") {
          total++;
          if (state[i]) completed++;
        }
      }
      return { completed, total };
    },
    getProgressPercentage(checklistId) {
      const p = this.getChecklistProgress(checklistId);
      return p.total > 0 ? Math.round((p.completed / p.total) * 100) : 0;
    },
    getCheckNumber(itemIndex) {
      const items = this.currentChecklistData?.items || [];
      let n = 0;
      for (let i = 0; i <= itemIndex; i++) if (items[i]?.type === "check") n++;
      return String(n).padStart(2, "0");
    },
  },
});
app.mount("#app");
