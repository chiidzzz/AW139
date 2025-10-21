// ====== Embedded CHECKLISTS_DATA (moved from app.js) ======
const CHECKLISTS_DATA = {
  "external-preflight": {
    title: "EXTERNAL PRE-FLIGHT CHECKS",
    items: [
      // === Intro step with image and OK button ===
      {
        type: "intro-image",
        src: "preflight-sequence.jpg",
      },

      // === Area 1 – Helicopter Nose ===
      { type: "header", text: "AREA 1 – HELICOPTER NOSE" },
      {
        type: "check",
        text: "Main and tail rotor tie-downs",
        action: "Removed",
      },
      { type: "check", text: "Nose exterior", action: "Condition" },
      {
        type: "check",
        text: "Pitot-static probe (Left side)",
        action: "Cover removed, condition, unobstructed",
      },
      {
        type: "check",
        text: "Left side brake lines in brake pedal area (looking through bottom transparent panel)",
        action: "Condition",
      },
      {
        type: "check",
        text: "Nose landing gear",
        action: "Condition, shock strut extension, leaks, tire pressure",
      },
      {
        type: "check",
        text: "Ventilation air intakes (in landing gear bay)",
        action: "Unobstructed",
      },
      {
        type: "check",
        text: "Nose compartment access door",
        action: "Latched and secure",
      },
      {
        type: "check",
        text: "Pitot-static probe (Right side)",
        action: "Cover removed, condition, unobstructed",
      },
      {
        type: "check",
        text: "Right side brake lines in brake pedal area (looking through bottom transparent panel)",
        action: "Condition",
      },

      // === Area 2 – Fuselage (Right-Hand Side) ===
      { type: "header", text: "AREA 2 – FUSELAGE (RIGHT-HAND SIDE)" },
      {
        type: "check",
        text: "Windshield and roof transparent panel",
        action: "Condition, cleanliness",
      },
      { type: "check", text: "Windscreen wiper", action: "Condition" },
      { type: "check", text: "Fuselage exterior", action: "Condition" },
      {
        type: "check",
        text: "Pilot cockpit door",
        action: "Condition, cleanliness, window secure",
      },
      {
        type: "check",
        text: "Passenger cabin door",
        action: "Condition, cleanliness, secure",
      },
      {
        type: "check",
        text: "Right side emergency exits",
        action: "Verify secure",
      },
      {
        type: "check",
        text: "Main landing gear",
        action: "Condition, shock strut extension, leaks, tire pressure",
      },
      {
        type: "check",
        text: "Drains and vent lines",
        action: "Free of obstructions",
      },
      {
        type: "check",
        text: "Fuel tank sump area (Right side)",
        action: "Confirm no leaks",
      },
      {
        type: "check",
        text: "Baggage compartment tie-down/net",
        action: "Condition, cargo (if on board) correctly secure",
      },
      {
        type: "check",
        text: "Baggage door",
        action:
          "Secure; if baggage door extension kit installed (P/N 4G5230F00111) confirm key in closed position",
      },
      {
        type: "check",
        text: "Engine area",
        action: "Check for fuel and/or oil leaks",
      },
      {
        type: "check",
        text: "Cowling and fairings",
        action: "Condition and latched",
      },
      { type: "check", text: "Air intakes", action: "Clear and unobstructed" },
      {
        type: "check",
        text: "Main rotor components and blades",
        action: "General condition",
      },
      {
        type: "check",
        text: "Main rotor damper indicators",
        action: "Position",
      },
      {
        type: "check",
        text: "Engine air intake screen",
        action: "Cover removed, free of damage and obstruction",
      },
      { type: "check", text: "Engine cowling", action: "Secure" },
      { type: "check", text: "Gravity fuel filler cap", action: "Secure" },
      {
        type: "check",
        text: "Engine exhaust",
        action: "Cover removed, condition",
      },
      {
        type: "check",
        text: "Fire Bottle discharge indicator",
        action: "Green",
      },

      // === Area 3 – Tail Boom (Right-Hand Side) ===
      { type: "header", text: "AREA 3 – TAIL BOOM (RIGHT-HAND SIDE)" },
      { type: "check", text: "Tail boom exterior", action: "Condition" },
      { type: "check", text: "Tail rotor drive shaft cover", action: "Secure" },
      { type: "check", text: "Antenna (1)", action: "Condition" },
      { type: "check", text: "Stabilizer", action: "Condition and secure" },
      { type: "check", text: "Navigation light", action: "Condition" },

      // === Area 4 – Fin, Intermediate and Tail Gearbox, Tail Rotor ===
      {
        type: "header",
        text: "AREA 4 – FIN, INTERMEDIATE AND TAIL GEARBOX, TAIL ROTOR",
      },
      { type: "check", text: "Tail fin", action: "Condition" },
      {
        type: "check",
        text: "Intermediate and tail rotor gearbox",
        action: "Check for leaks",
      },
      {
        type: "check",
        text: "Tail navigation and anticollision lights",
        action: "Condition",
      },
      {
        type: "check",
        text: "Tail rotor hub and blades",
        action: "Condition, cleanliness",
      },
      {
        type: "check",
        text: "Tail rotor pitch change mechanism",
        action: "Condition",
      },

      // === Area 5 – Tail Boom (Left-Hand Side) ===
      { type: "header", text: "AREA 5 – TAIL BOOM (LEFT-HAND SIDE)" },
      { type: "check", text: "Tail boom exterior", action: "Condition" },
      { type: "check", text: "Stabilizer", action: "Condition and secure" },
      { type: "check", text: "Navigation light", action: "Condition" },
      { type: "check", text: "Antenna (1)", action: "Condition" },
      { type: "check", text: "Tail rotor drive shaft cover", action: "Secure" },

      // === Area 6 – Fuselage (Left-Hand Side) ===
      { type: "header", text: "AREA 6 – FUSELAGE (LEFT-HAND SIDE)" },
      { type: "check", text: "Fuselage exterior", action: "Condition" },
      {
        type: "check",
        text: "Engine exhaust",
        action: "Cover removed, condition",
      },
      {
        type: "check",
        text: "Fire Bottle discharge indicator",
        action: "Green",
      },
      {
        type: "check",
        text: "Baggage compartment tie-down/net",
        action: "Condition; cargo (if on board) correctly secure",
      },
      {
        type: "check",
        text: "Baggage door",
        action:
          "Secure; if baggage door extension kit installed (P/N 4G5230F00111) confirm key in closed position",
      },
      {
        type: "check",
        text: "Engine area",
        action: "Check for fuel and/or oil leaks",
      },
      {
        type: "check",
        text: "Engine air intake screen",
        action: "Cover removed, clear of damage and obstructions",
      },
      { type: "check", text: "Engine cowling", action: "Secure" },
      { type: "check", text: "Air intakes", action: "Clear and unobstructed" },
      {
        type: "check",
        text: "Main rotor components and blades",
        action: "General condition",
      },
      {
        type: "check",
        text: "Left side emergency exits",
        action: "Confirm secure",
      },
      {
        type: "check",
        text: "Drains and vent lines",
        action: "Free of obstructions",
      },
      {
        type: "check",
        text: "Fuel tank sump area (Left side)",
        action: "Confirm no leaks",
      },
      {
        type: "check",
        text: "Main landing gear",
        action: "Condition; shock strut extension, leaks, tire pressure",
      },
      {
        type: "check",
        text: "Passenger cabin door",
        action: "Condition, cleanliness, secure",
      },
      { type: "check", text: "Cowling and fairings", action: "Condition" },
      {
        type: "check",
        text: "Co-pilot cockpit door",
        action: "Condition, cleanliness, window secure",
      },
      {
        type: "check",
        text: "Windshield and roof transparent panel",
        action: "Condition and cleanliness",
      },
      { type: "check", text: "Windscreen wiper", action: "Condition" },

      // === Area 7 – Cabin and Cockpit Interior ===
      { type: "header", text: "AREA 7 – CABIN AND COCKPIT INTERIOR" },
      {
        type: "check",
        text: "Passenger emergency exits",
        action: "Verify secure",
      },
      {
        type: "check",
        text: "Cabin interior",
        action: "Equipment and cargo secure",
      },
      { type: "check", text: "First Aid Kit", action: "On board" },
      {
        type: "check",
        text: "Cabin fire extinguisher",
        action: "Secure, charged",
      },
      {
        type: "check",
        text: "Passenger doors",
        action:
          "Closed and secure; confirm levers fully down in locked position",
      },
      {
        type: "check",
        text: "Pilot and Copilot safety belts and inertia reels",
        action: "Condition",
      },
      { type: "check", text: "Pilot and Copilot seats", action: "Secure" },
      {
        type: "check",
        text: "Pilot and Copilot flight controls",
        action: "Condition and secure",
      },
      {
        type: "check",
        text: "Lower and lateral transparent panels",
        action: "Integrity, cleanliness and no signs of brake fluid",
      },
      { type: "check", text: "Pilot and Copilot doors", action: "Secure" },
      {
        type: "check",
        text: "Instruments, panels and circuit breakers",
        action: "Condition and legibility",
      },
    ],
  },

  "normal-start": {
    title: "NORMAL ENGINE START",
    items: [
      { type: "header", text: "COCKPIT / ENGINE PRE-START CHECKS" },

      {
        type: "check",
        text: "Pedals and seats",
        action: "Adjust",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Seat belts",
        action: "Fasten and adjust",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Circuit breakers",
        action: "All engaged",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ECLs (Engine Control Levers)",
        action: "Confirm at FLIGHT",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "All switches",
        action: "OFF or CLOSED",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ENG 1 and ENG 2 MODE switches",
        action: "OFF",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ELT switch (on instrument panel)",
        action: "Confirm ARM",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Landing Gear (LDG GEAR) lever",
        action: "Confirm DOWN",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "External Power Unit (if used)",
        action: "Connect and switch ON",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "BATTERY MASTER",
        action: "ON",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "BATTERY MAIN and AUX",
        action: "ON",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "EXT PWR",
        action: "ON (if required)",
        batteryOnly: false,
      },
      { type: "check", text: "GEN 1 & 2", action: "ON", batteryOnly: true },
      { type: "check", text: "BUS TIE", action: "AUTO", batteryOnly: true },
      {
        type: "check",
        text: "POSITION lights switch",
        action: "Confirm functioning then set as required",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ANTI-COLL lights switch",
        action: "ON (confirm functioning)",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "LT PANEL switch",
        action:
          "ON – Confirm emergency lights functioning (cabin, sponson L/R, cockpit door L/R), then OFF or ARM as required",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "MFD",
        action: "Set POWERPLANT page and check configuration setting",
        batteryOnly: true,
      },
      {
        type: "note",
        text: "If MFD/PFD are in COMPOSITE mode, reset to NORMAL using RCP switches (MFD ONLY – PFD ONLY – NORMAL) before starting.",
      },
      {
        type: "check",
        text: "CAS messages",
        action: "Check",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "MFD",
        action: "Check fuel quantity",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "LDG GEAR panel",
        action: "Check 3 green lights and EMER DOWN switch secure",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "NOSE WHEEL lock",
        action: "Confirm LOCK illuminated and/or aircraft suitably chocked",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "PARK BRAKE",
        action:
          "Pull and turn handle and press pedals until PARK BRAKE ON advisory illuminates on CAS",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "RAD MSTR switch",
        action: "As required (GND if battery start)",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "FORCE TRIM switch",
        action: "ON",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "CLTV / YAW TRIM switch",
        action: "ON",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "AWG switch",
        action:
          "As required (REGRADE or INHIBIT position disables '150 FEET' voice message)",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "LD-SH switch",
        action: "TORQUE",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "AFCS",
        action: "Confirm not engaged",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Cyclic stick",
        action: "Centred",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Collective lever",
        action: "Full down, friction as required",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Flight Controls",
        action:
          "Push ELEC PUMP on HYD panel. Carry out cyclic, collective and yaw pedals full and free check. Utilizing the cyclic position indicator on PFD, centralize cyclic control by moving in the direction indicated by the yellow arrows to obtain the central circle green. ELEC HYD PUMP select OFF.",
        batteryOnly: true,
      },
      {
        type: "caution",
        text: "Full and free check should be carried out with slow displacement of the controls and one control at a time in order not to overload the electric pump.",
      },

      {
        type: "note",
        text: "Cyclic position indicator is only presented on the PFD when the aircraft is on the ground and the collective is near its down position (MPOG).",
      },
      {
        type: "note",
        text: "Electric hydraulic pump disengages automatically after 2 minutes.",
      },
      {
        type: "check",
        text: "HYD SOV (shut off valve) switch",
        action: "Centred and guarded",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "FIRE WARNING TEST pushbutton – Press on the TEST control panel, BAG, and confirm the following visual and aural warnings:",
        action:
          "<strong>•</strong> MWL illuminates<br>" +
          "<strong>•</strong> 'BAG FIRE' CAS warning<br>" +
          "<strong>•</strong> 'BAG' light on FIRE EXTING panel<br>" +
          '<strong>•</strong> Audio tone and voice warning ("WARNING WARNING")<br><br>' +
          "<u>Then press ENG 1 and confirm the following visual and aural warnings:</u><br>" +
          "<strong>•</strong> ENG 1 ECL fire light<br>" +
          "<strong>•</strong> ENG 1 FIRE on FIRE EXTING panel<br>" +
          "<strong>•</strong> MWL and MCL illuminate<br>" +
          "<strong>•</strong> '1 ENG FIRE' CAS warning<br>" +
          "<strong>•</strong> '1 FIRE DET' CAS caution<br>" +
          '<strong>•</strong> Audio tone and voice message ("ENGINE 1 FIRE")<br>' +
          "<strong>•</strong> FIRE 1 light on ENG CONTROL panel<br><br>" +
          "<u>Then press ENG 2 and confirm the following visual and aural warnings:</u><br>" +
          "<strong>•</strong> ENG 2 ECL fire light<br>" +
          "<strong>•</strong> ENG 2 FIRE on FIRE EXTING panel<br>" +
          "<strong>•</strong> MWL and MCL illuminate<br>" +
          "<strong>•</strong> '2 ENG FIRE' CAS warning<br>" +
          "<strong>•</strong> '2 FIRE DET' CAS caution<br>" +
          '<strong>•</strong> Audio tone and voice message ("ENGINE 2 FIRE")<br>' +
          "<strong>•</strong> FIRE 2 light on ENG CONTROL panel",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "FUEL pushbutton – Fuel test starts automatically at electrical power on.",
        action:
          "Confirm <strong>1(2) FCU TEST FAIL</strong> caution not illuminated.<br><br>" +
          "<u>If further test required, press pushbutton and confirm the following:</u><br>" +
          "<strong>•</strong> 'TEST' replaces 'FUEL' legend on Pilot and Copilot MFD<br>" +
          "<strong>•</strong> 1(2) FCU TEST FAIL caution not illuminated",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "CHIP DETECTOR pushbutton.",
        action:
          "<strong>•</strong> Press ENG 1 pushbutton and confirm CAS caution: <strong>1 ENG CHIP</strong> and <strong>MCL</strong> illuminate<br>" +
          "<strong>•</strong> Press ENG 2 pushbutton and confirm CAS caution: <strong>2 ENG CHIP</strong> and <strong>MCL</strong> illuminate",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "AWG TEST pushbutton – Press momentarily on the TEST control panel (AWG).",
        action:
          "Confirm the <strong>AURAL SYSTEM TEST</strong> message is heard.<br><br>" +
          "If required, press and hold pushbutton for 6 seconds and confirm the following aural warnings:<br>" +
          '<strong>•</strong> Audio tone and voice message "WARNING"<br>' +
          "<strong>•</strong> ROTOR LOW<br>" +
          "<strong>•</strong> ENGINE 1 OUT<br>" +
          "<strong>•</strong> ENGINE 2 OUT<br>" +
          "<strong>•</strong> ENGINE 1 FIRE<br>" +
          "<strong>•</strong> ENGINE 2 FIRE<br>" +
          "<strong>•</strong> ROTOR HIGH<br>" +
          "<strong>•</strong> ENGINE 1 IDLE<br>" +
          "<strong>•</strong> ENGINE 2 IDLE<br>" +
          "<strong>•</strong> WARNING<br>" +
          "<strong>•</strong> AUTOPILOT<br>" +
          "<strong>•</strong> AIRSPEED<br>" +
          "<strong>•</strong> ALTITUDE<br>" +
          "<strong>•</strong> LANDING GEAR<br>" +
          "<strong>•</strong> 150 FEET<br>" +
          "<strong>•</strong> AURAL SYSTEM TEST",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "OIL LEVEL pushbuttons – Press sequentially and confirm associated CAS cautions:",
        action:
          "<strong>•</strong> Press MGB pushbutton – CAS caution <strong>MGB OIL LOW</strong> and <strong>MCL</strong> illuminate<br>" +
          "<strong>•</strong> Press IGB pushbutton – CAS caution <strong>IGB OIL LOW</strong> and <strong>MCL</strong> illuminate<br>" +
          "<strong>•</strong> Press TGB pushbutton – CAS caution <strong>TGB OIL LOW</strong> and <strong>MCL</strong> illuminate",
        batteryOnly: true,
      },

      {
        type: "check",
        text: "LAMP TEST pushbutton – Press and confirm the following illuminate:",
        action:
          "<strong>•</strong> MWL and MCL illuminate<br>" +
          "<strong>•</strong> ENG 1 & 2 FIRE/ARM and BAG lights on FIRE EXTING panel<br>" +
          "<strong>•</strong> FIRE lights on ENG CONTROL panel<br>" +
          "<strong>•</strong> HYD 1 & 2 PRESS/TEMP and ELEC PUMP ON indicators on HYD panel<br>" +
          "<strong>•</strong> NOSE/LH/RH red and green lamps, NOSE WHEEL UNLK/LOCK lamps on LDG GEAR panel<br>" +
          "<strong>•</strong> All green indications on AUTOPILOT and GUIDANCE CONTROL panel",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "RPM switch (on collective)",
        action: "<strong>Set 100%</strong>",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "1 ENG GOV (on collective)",
        action: "<strong>AUTO</strong>",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "2 ENG GOV (on collective)",
        action: "<strong>AUTO</strong>",
        batteryOnly: true,
      },
      {
        type: "check",
        text: "ENG TRIM beep switches (on collective) – Verify operation, then leave the engine control levers in the FLIGHT position.",
        action:
          "On BATTERY power use a single 'click' back and forward to confirm ECL stops in FLIGHT gate.",
        batteryOnly: true,
      },
      {
        type: "note",
        text: "Each engine trim beep switch controls the respective control lever from MIN to FLIGHT position when in AUTO mode, and from MIN to MAX position when in MANUAL mode.",
      },
      {
        type: "note",
        text: "Both engines control levers should always be operated through the beep switches located on the collective control. They should be operated manually only in case of failure of the remote control (ECL FAIL caution message), or before starting, to position the lever to FLIGHT.",
      },
      {
        type: "note",
        text: "NOSE WHEEL should be LOCKed, yaw pedals centralized and the aircraft suitably chocked to avoid possible aircraft movement during rotor start.",
      },
      {
        type: "check",
        text: "COND/HTR (if fitted)",
        action:
          "<strong>OFF</strong> – Confirm <strong>HEATER SOV 1 &amp; 2 NORMAL</strong>",
      },
    ],
  },

  "quick-start": {
    title: "QUICK ENGINE START",
    items: [
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
      { type: "check", text: "VENT switches", action: "As required" },
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

// Add this AFTER the CHECKLISTS_DATA object in your checklists.js file
// Replace everything from "const app = Vue.createApp({" onwards with this:

const app = Vue.createApp({
  data() {
    return {
      currentPage: "menu",
      checklists: CHECKLISTS_DATA,
      currentChecklistId: null,
      checklistStates: {},
      missIndex: null,
      inlineNotice: null,
      powerSource: null, // 'battery' or 'external'
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
    nextIntroStep() {
      const checklist = this.currentChecklistData;
      if (!checklist) return;
      for (let i = 0; i < checklist.items.length; i++) {
        if (checklist.items[i].type !== "intro-image") {
          this.toggleItem(i);
          break;
        }
      }
    },

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
      // If opening normal-start, show power source selection
      if (id === "normal-start") {
        this.currentChecklistId = id;
        this.currentPage = "power-select";
        return;
      }

      this.currentChecklistId = id;
      this.currentPage = "view";
      this.missIndex = null;
      this.powerSource = null;
      if (!this.checklistStates[id]) this.checklistStates[id] = {};
    },

    selectPowerSource(source) {
      this.powerSource = source;
      this.currentPage = "view";
      if (!this.checklistStates[this.currentChecklistId]) {
        this.checklistStates[this.currentChecklistId] = {};
      }
    },

    getFilteredItems() {
      if (!this.currentChecklistData) return [];

      // If not normal-start or no power source selected yet, show all items
      if (this.currentChecklistId !== "normal-start" || !this.powerSource) {
        return this.currentChecklistData.items;
      }

      // If battery start, filter to only show items marked with batteryOnly or non-check items
      if (this.powerSource === "battery") {
        return this.currentChecklistData.items.filter((item) => {
          // Always show headers, cautions, warnings, notes
          if (item.type !== "check") return true;
          // For check items, only show those marked with batteryOnly
          return item.batteryOnly === true;
        });
      }

      // External power shows all items
      return this.currentChecklistData.items;
    },

    backToMenu() {
      this.currentPage = "menu";
      this.currentChecklistId = null;
      this.missIndex = null;
      this.powerSource = null;
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
      const filteredItems = this.getFilteredItems();
      if (!filteredItems || !filteredItems[itemIndex]) return;

      // If not a 'check' item, ignore toggling
      if (filteredItems[itemIndex]?.type !== "check") return;

      // Find the original index in the full checklist
      const originalIndex = this.currentChecklistData.items.indexOf(
        filteredItems[itemIndex]
      );

      // Find first previous 'check' in filtered list that isn't done.
      let firstMissing = null;
      for (let i = 0; i < itemIndex; i++) {
        if (filteredItems[i]?.type === "check") {
          const origIdx = this.currentChecklistData.items.indexOf(
            filteredItems[i]
          );
          if (!this.isItemCheckedByOriginalIndex(origIdx)) {
            firstMissing = i;
            break;
          }
        }
      }

      if (firstMissing !== null) {
        this.missIndex = firstMissing;
        this.showInlineNotice(itemIndex);
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

      // Toggle current using original index
      const state =
        this.checklistStates[this.currentChecklistId] ||
        (this.checklistStates[this.currentChecklistId] = {});
      state[originalIndex] = !state[originalIndex];
      this.saveChecklistStates();

      // If completed all, auto return to menu after a short delay
      if (this.isChecklistComplete(this.currentChecklistId)) {
        setTimeout(() => {
          this.backToMenu();
        }, 700);
      }
    },

    isItemChecked(itemIndex) {
      const filteredItems = this.getFilteredItems();
      if (!filteredItems[itemIndex]) return false;
      const originalIndex = this.currentChecklistData.items.indexOf(
        filteredItems[itemIndex]
      );
      return !!this.checklistStates[this.currentChecklistId]?.[originalIndex];
    },

    isItemCheckedByOriginalIndex(originalIndex) {
      return !!this.checklistStates[this.currentChecklistId]?.[originalIndex];
    },

    resetCurrentChecklist() {
      if (confirm("Reset this checklist? All progress will be cleared.")) {
        this.checklistStates[this.currentChecklistId] = {};
        this.saveChecklistStates();
        this.missIndex = null;
        this.powerSource = null;
        // If normal-start, go back to power selection
        if (this.currentChecklistId === "normal-start") {
          this.currentPage = "power-select";
        }
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
      const filteredItems = this.getFilteredItems();
      let n = 0;
      for (let i = 0; i <= itemIndex; i++) {
        if (filteredItems[i]?.type === "check") n++;
      }
      return String(n).padStart(2, "0");
    },
  },
});

app.mount("#app");
