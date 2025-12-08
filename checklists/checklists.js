// ====== Embedded CHECKLISTS_DATA (moved from app.js) ======
const CHECKLISTS_DATA = {
  "external-preflight": {
    title: "External Pre-Flight Checks",
    items: [
      // === Intro step with image and OK button ===
      {
        type: "intro-image",
        src: "../assets/images/preflight-sequence.jpg",
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
    title: "Normal Engine Start",
    items: [
      { type: "header", text: "COCKPIT / ENGINE PRE-START CHECKS" },

      { type: "check", text: "Pedals and seats", action: "Adjust" },
      { type: "check", text: "Seat belts", action: "Fasten and adjust" },
      { type: "check", text: "Circuit breakers", action: "All engaged" },
      {
        type: "check",
        text: "ECLs (Engine Control Levers)",
        action: "Confirm at FLIGHT",
      },
      { type: "check", text: "All switches", action: "OFF or CLOSED" },
      { type: "check", text: "ENG 1 and ENG 2 MODE switches", action: "OFF" },
      {
        type: "check",
        text: "ELT switch (on instrument panel)",
        action: "Confirm ARM",
      },
      {
        type: "check",
        text: "Landing Gear (LDG GEAR) lever",
        action: "Confirm DOWN",
      },
      {
        type: "check",
        text: "External Power Unit",
        action: "Connect and switch ON",
        batteryOnly: false,
      },
      { type: "check", text: "BATTERY MASTER", action: "ON" },
      { type: "check", text: "BATTERY MAIN and AUX", action: "ON" },
      {
        type: "check",
        text: "EXT PWR",
        action: "ON (if required)",
        batteryOnly: false,
      },
      { type: "check", text: "GEN 1 & 2", action: "ON" },
      { type: "check", text: "BUS TIE", action: "AUTO" },
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
      },
      {
        type: "note",
        text: "If MFD/PFD are in COMPOSITE mode, reset to NORMAL using RCP switches (MFD ONLY – PFD ONLY – NORMAL) before starting.",
      },
      { type: "check", text: "CAS messages", action: "Check" },
      { type: "check", text: "MFD", action: "Check fuel quantity" },
      {
        type: "check",
        text: "LDG GEAR panel",
        action: "Check 3 green lights and EMER DOWN switch secure",
      },
      {
        type: "check",
        text: "NOSE WHEEL lock",
        action: "Confirm LOCK illuminated and/or aircraft suitably chocked",
      },
      {
        type: "check",
        text: "PARK BRAKE",
        action:
          "Pull and turn handle and press pedals until PARK BRAKE ON advisory illuminates on CAS",
      },
      {
        type: "check",
        text: "RAD MSTR switch",
        action: "As required (GND if battery start)",
      },
      { type: "check", text: "FORCE TRIM switch", action: "ON" },
      { type: "check", text: "CLTV / YAW TRIM switch", action: "ON" },
      {
        type: "check",
        text: "AWG switch",
        action:
          "As required (REGRADE or INHIBIT position disables '150 FEET' voice message)",
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
        action: `
        <ol>
          <li>Push ELEC PUMP on HYD panel.</li>
          <li>Carry out cyclic, collective and yaw pedals full and free check.</li>
          <li>Utilizing the cyclic position indicator on PFD, centralize cyclic control by moving in the direction indicated by the yellow arrows to obtain the central circle green.</li>
          <li>ELEC HYD PUMP select OFF.</li>
        </ol>
      `,
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
        text: "FIRE WARNING TEST pushbutton – Press on the TEST control panel, BAG, and confirm:",
        action: `
        <ol>
          <li>MWL illuminates</li>
          <li>'BAG FIRE' CAS warning</li>
          <li>'BAG' light on FIRE EXTING panel</li>
          <li>Audio tone and voice warning ("WARNING WARNING")</li>
        </ol>
        <u>Then press ENG 1 and confirm:</u>
        <ul>
          <li>ENG 1 ECL fire light</li>
          <li>ENG 1 FIRE on FIRE EXTING panel</li>
          <li>MWL and MCL illuminate</li>
          <li>'1 ENG FIRE' and '1 FIRE DET' CAS warnings</li>
          <li>Audio voice message: "ENGINE 1 FIRE"</li>
        </ul>
        <u>Then press ENG 2 and confirm:</u>
        <ul>
          <li>ENG 2 ECL fire light</li>
          <li>ENG 2 FIRE on FIRE EXTING panel</li>
          <li>MWL and MCL illuminate</li>
          <li>'2 ENG FIRE' and '2 FIRE DET' CAS warnings</li>
          <li>Audio voice message: "ENGINE 2 FIRE"</li>
        </ul>
      `,
      },

      {
        type: "check",
        text: "FUEL pushbutton – Fuel test starts automatically at electrical power on",
        action: `
        <ol>
          <li>Confirm 1(2) FCU TEST FAIL caution not illuminated.</li>
          <li>If further test required:
            <ul>
              <li>Press pushbutton and confirm 'TEST' replaces 'FUEL' legend on Pilot and Copilot MFD.</li>
              <li>1(2) FCU TEST FAIL caution not illuminated.</li>
            </ul>
          </li>
        </ol>
      `,
        batteryOnly: false,
      },

      {
        type: "check",
        text: "CHIP DETECTOR pushbutton",
        action: `
        <ul>
          <li>Press ENG 1 pushbutton – Confirm CAS caution: 1 ENG CHIP and MCL illuminate.</li>
          <li>Press ENG 2 pushbutton – Confirm CAS caution: 2 ENG CHIP and MCL illuminate.</li>
        </ul>
      `,
        batteryOnly: false,
      },

      {
        type: "check",
        text: "AWG TEST pushbutton – Press momentarily on TEST control panel (AWG)",
        action: `
        <ol>
          <li>Confirm 'AURAL SYSTEM TEST' message heard.</li>
          <li>If required, press and hold pushbutton for 6 seconds and confirm the following aural warnings:</li>
          <ul>
            <li>ROTOR LOW, ENGINE 1 OUT, ENGINE 2 OUT, ENGINE 1 FIRE, ENGINE 2 FIRE, ROTOR HIGH</li>
            <li>ENGINE 1 IDLE, ENGINE 2 IDLE, WARNING, AUTOPILOT, AIRSPEED, ALTITUDE, LANDING GEAR, 150 FEET</li>
          </ul>
        </ol>
      `,
        batteryOnly: false,
      },

      {
        type: "check",
        text: "OIL LEVEL pushbuttons – Press sequentially and confirm associated CAS cautions:",
        action: `
        <ol>
          <li>Press MGB pushbutton – CAS caution: MGB OIL LOW and MCL illuminate.</li>
          <li>Press IGB pushbutton – CAS caution: IGB OIL LOW and MCL illuminate.</li>
          <li>Press TGB pushbutton – CAS caution: TGB OIL LOW and MCL illuminate.</li>
        </ol>
      `,
      },
      {
        type: "check",
        text: "LAMP TEST pushbutton – Press and confirm the following illuminate:",
        action: `
        <ul>
          <li>MWL and MCL illuminate</li>
          <li>ENG 1 & 2 FIRE/ARM and BAG lights on FIRE EXTING panel</li>
          <li>HYD 1 & 2 PRESS/TEMP and ELEC PUMP ON indicators on HYD panel</li>
          <li>NOSE/LH/RH lamps and wheel LOCK/UNLK lamps on LDG GEAR panel</li>
          <li>All green indications on AUTOPILOT and GUIDANCE CONTROL panel</li>
        </ul>
      `,
      },
      {
        type: "check",
        text: "RPM switch (on collective)",
        action: "<strong>Set 100%</strong>",
      },
      {
        type: "check",
        text: "1 ENG GOV (on collective)",
        action: "<strong>AUTO</strong>",
      },
      {
        type: "check",
        text: "2 ENG GOV (on collective)",
        action: "<strong>AUTO</strong>",
      },
      {
        type: "check",
        text: "ENG TRIM beep switches (on collective)",
        action: `
    <ol>
      <li>Verify operation, then leave the engine control levers in the FLIGHT position.</li>
      <li><strong>On BATTERY power, use a single ‘click’ back and forward to confirm ECL stops in FLIGHT gate.</strong></li>
    </ol>
  `,
      },
      {
        type: "note",
        text: "Each engine trim beep switch controls the respective control lever from MIN to FLIGHT position when in AUTO mode, and from MIN to MAX position when in MANUAL mode.",
      },
      {
        type: "note",
        text: "Both engine control levers should always be operated through the beep switches located on the collective control. They should be operated manually only in case of failure of the remote control (ECL FAIL caution message), or before starting, to position the lever to FLIGHT.",
      },
      {
        type: "note",
        text: "NOSE WHEEL should be LOCKed, yaw pedals centralized and the aircraft suitably chocked to avoid possible aircraft movement during rotor start.",
      },
      {
        type: "check",
        text: "COND/HTR (if fitted)",
        action:
          "<strong>OFF</strong> – Confirm <strong>HEATER SOV 1 & 2 NORMAL</strong>",
        batteryOnly: false,
      },

      // === ABORTED ENGINE START PROCEDURE ===
      { type: "header", text: "ABORTED ENGINE START PROCEDURE" },
      {
        type: "caution",
        text: "Failure to follow the Abort Procedure may cause damage to the engine.",
      },
      {
        type: "info",
        text: `
        <ul>
          <li>No light-up within 10 seconds of ENG MODE to IDLE</li>
          <li>Abnormal noise heard</li>
          <li>ITT increases beyond limits (HOT START caution illuminated)</li>
          <li>Engine hangs (stagnation in NG below 54%)</li>
          <li>Main rotor not begun to rotate when NG reaches 40%</li>
          <li>Starter fails to disengage by 49% NG</li>
        </ul>
        <strong>Shut down engine by:</strong>
        <ol>
          <li>ENG MODE switch — OFF</li>
          <li>If engine does not shut down then: ECL — OFF</li>
          <li>FUEL PUMP — OFF</li>
          <li>ENG FUEL switch — OFF</li>
        </ol>
      `,
      },

      // === DRY MOTORING PROCEDURE ===
      { type: "header", text: "DRY MOTORING PROCEDURE" },
      {
        type: "info",
        text: `
        <ol>
          <li>ENG GOV switch — AUTO</li>
          <li>ENG MODE switch — OFF</li>
          <li>ECL — OFF</li>
          <li>FUEL PUMP switch — OFF</li>
          <li>ENG FUEL switch — OFF (fuel valve indicator bar horizontal)</li>
          <li>ENGINE IGN circuit breaker (ringed in WHITE on CB panel) — OUT</li>
          <li>ENG MODE switch — Select IDLE as necessary (not more than 45 seconds)</li>
          <li>Gas generator (NG) — Note increasing</li>
          <li>ENG MODE switch — OFF as necessary</li>
          <li>ENGINE IGN circuit breaker — IN</li>
        </ol>
      `,
      },

      // === ENGINE STARTING ===
      { type: "header", text: "NORMAL ENGINE STARTING" },
      { type: "header", text: "ENGINE 1 START" },
      {
        type: "caution",
        text: "An engine battery start should not be attempted if the MAIN BUS 1 voltage is below 23V.",
      },
      {
        type: "note",
        text: "During battery start FUEL PUMP 1(2) may illuminate temporarily.",
      },
      {
        type: "note",
        text: "Either engine may be started first and it is recommended that normal engine starts be made using the AUTO mode.",
      },
      {
        type: "note",
        text: "If engine N°2 is to be started first, set BUS TIE switch to ON and confirm MAIN BUS 2 voltage is not below 23V.",
      },

      {
        type: "check",
        text: "Rotor brake",
        action: "Confirm OFF – ROTOR BRAKE ON advisory extinguished.",
      },
      {
        type: "check",
        text: "ENG 1 FUEL switch",
        action: "ON – Fuel valve indicator vertical.",
      },
      { type: "check", text: "MFD", action: "Set POWERPLANT page." },
      {
        type: "check",
        text: "FUEL PUMP 1 switch",
        action: "ON – 1 FUEL PUMP caution out, check pressure.",
      },
      { type: "check", text: "ENG 1 MODE switch", action: "IDLE" },
      {
        type: "note",
        text: "It is recommended to start the engine to IDLE, if necessary, it is possible to start to FLIGHT by setting the ENG MODE switch directly to FLT.",
      },
      {
        type: "check",
        text: "Gas Producer (NG)",
        action: "Note increasing and 'START' legend displayed.",
      },
      {
        type: "check",
        text: "ITT indication",
        action: "Confirm increasing and 'IGN' legend displayed.",
      },
      { type: "check", text: "Engine oil pressure", action: "Confirm rising." },
      {
        type: "check",
        text: "Engine N°1 starter",
        action: "Disengages by 49% NG.",
      },
      {
        type: "check",
        text: "Main hydraulic system",
        action: `
        <ol>
          <li>When the main rotor begins to rotate, confirm rise in main hydraulic pressure.</li>
          <li>Confirm cyclic control centralized on PFD indicator.</li>
        </ol>
      `,
      },
      {
        type: "check",
        text: "N°1 engine power turbine speed (NF) and rotor speed (NR)",
        action: "Confirm both stabilized to IDLE speed of 65%±1%.",
      },
      {
        type: "note",
        text: "If the engine was started directly to FLIGHT, the NF will stabilize at 100% together with rotor speed (NR).",
      },
      {
        type: "check",
        text: "Engine and transmission oil",
        action: "Check pressures and temperatures within limits.",
      },
      { type: "check", text: "ENG 1 MODE switch", action: "FLIGHT" },
      {
        type: "check",
        text: "GEN 1 switch",
        action: "Confirm ON (reset if required)",
      },
      {
        type: "check",
        text: "Go to External power start",
        action: "Complete full pre-start checks.",
        batteryOnly: true,
      },

      // === ENGINE 2 START ===
      { type: "header", text: "ENGINE 2 START", batteryOnly: false },
      {
        type: "note",
        text: "If required the BUS TIE may be selected to ON to allow continuation of the ENG 2 start in case of EXT PWR failure or ENG/GEN 1 failure during the ENG 2 start cycle.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ENG 2 FUEL switch",
        action: "ON – Fuel valve indicator vertical.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "FUEL PUMP 2 switch",
        action: "ON – 2 FUEL PUMP caution out, check pressure.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "GEN 1",
        action: "Check loadmeter in GREEN band (if EXT PWR not used).",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "ENG 2 MODE switch",
        action: "IDLE",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Gas Producer (NG)",
        action: "Note increasing and START legend displayed.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Engine temperature (ITT)",
        action: "Note increasing and IGN legend displayed.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Engine oil pressure",
        action: "Confirm rising.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Engine N°2 starter",
        action: "Disengaged by 49% NG.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "N°2 engine power turbine speed (NF) and rotor speed (NR)",
        action: "Confirm both stabilized to IDLE speed of 65% ±1%.",
        batteryOnly: false,
      },
      {
        type: "caution",
        text: "Ensure second engine engages as the NF reaches FLIGHT condition. A failed engagement is indicated by positive NF value and near zero torque. If this occurs, shut down the non engaged engine first and when engine stopped shut down other engine. If a hard engagement occurs, shut down both engines for maintenance action.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "Engine and transmission parameters",
        action: "Check within limits.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "External power switch",
        action: "OFF and disconnect external power (if used).",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "GEN 1 and GEN 2 switches",
        action: "Confirm ON (reset if required).",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "BUS TIE switch",
        action: "Confirm AUTO.",
        batteryOnly: false,
      },
      {
        type: "check",
        text: "RAD MSTR switch",
        action: "ON.",
        batteryOnly: false,
      },
      { type: "check", text: "Clock", action: "Set.", batteryOnly: false },
      {
        type: "check",
        text: "Rotor speed",
        action: "Confirm 100%.",
        batteryOnly: false,
      },
    ],
  },

  "quick-start": {
    title: "Quick Engine Start",
    items: [
      {
        type: "note",
        text: "This procedure may be carried out on BATTERY or External Power to speed up the Take Off.",
      },
      { type: "check", text: "BUS TIE switch", action: "ON." },
      {
        type: "check",
        text: "Rotor brake (if fitted)",
        action: "Confirm OFF, ROTOR BRAKE ON advisory extinguished.",
      },
      {
        type: "check",
        text: "ENG 1 FUEL switch",
        action: "ON - Fuel valve indicator vertical.",
      },
      {
        type: "check",
        text: "MFD display",
        action: "Confirm PWR PLANT page.",
      },
      {
        type: "check",
        text: "FUEL PUMP 1 switch",
        action: "ON - Check pressure.",
      },
      {
        type: "check",
        text: "ENG 2 FUEL switch",
        action: "ON - Fuel valve indicator vertical.",
      },
      {
        type: "check",
        text: "FUEL PUMP 2 switch",
        action: "ON - Check pressure.",
      },
      {
        type: "check",
        text: "ENG 1 MODE switch",
        action: "FLT.",
      },
      {
        type: "check",
        text: "ENG 2 MODE switch",
        action: "FLT when N°1 engine NG is above 25%.",
      },
      {
        type: "caution",
        text: "Avoid operating the ENG MODE switches simultaneously.",
      },
      {
        type: "check",
        text: "Gas Producer (NG)",
        action: "Note increasing and START legend displayed.",
      },
      {
        type: "check",
        text: "Engine temperature (ITT)",
        action: "Note increasing and IGN legend displayed.",
      },
      {
        type: "check",
        text: "Engine oil pressure",
        action: "Confirm rising.",
      },
      {
        type: "check",
        text: "Engine N°1 & N°2 starters",
        action: "Disengaged by 49% NG.",
      },
      {
        type: "check",
        text: "Main hydraulic system",
        action:
          "When the main rotor begins to rotate, confirm rise in main hydraulic pressure. Confirm cyclic control centralized on PFD indicator.",
      },
      {
        type: "check",
        text: "N°1 & N°2 engine power turbine speed (NF)",
        action: "Confirm stabilized at 100%.",
      },
      {
        type: "check",
        text: "Engine and transmission oil",
        action: "Check pressures and temperatures within limits.",
      },
      {
        type: "check",
        text: "External power switch",
        action: "OFF and disconnect external power (if used).",
      },
      {
        type: "check",
        text: "GEN 1 and GEN 2 switches",
        action: "Confirm ON (reset if required).",
      },
      {
        type: "check",
        text: "BUS TIE switch",
        action: "Confirm AUTO.",
      },
      {
        type: "check",
        text: "RAD MSTR switch",
        action: "ON.",
      },
      {
        type: "check",
        text: "Clock",
        action: "Set.",
      },
      {
        type: "check",
        text: "Rotor speed",
        action: "Confirm 100%.",
      },
      {
        type: "check",
        text: "VENT switches",
        action: "As required.",
      },
    ],
  },
  "system-checks": {
    title: "System Checks",
    items: [
      {
        type: "check",
        text: "MFD PWR PLANT page",
        action: "Check all parameters within limits.",
      },
      {
        type: "check",
        text: "Main Hydraulic",
        action: `
        <ol>
          <li>Pressure and temperature within limits.</li>
          <li>Make small cyclic, collective and pedal movements and confirm hydraulic pressure drop not excessive.</li>
          <li>Centralize cyclic control on PFD indicator.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "Fuel XFEED switch",
        action: `
        <ol>
          <li>Select OPEN, confirm bar horizontal.</li>
          <li>Select NORM, confirm bar vertical.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "FUEL PUMP 1",
        action: `
        <ol>
          <li>OFF. Note fall in fuel N°1 pressure, 1 FUEL PUMP caution displayed.</li>
          <li>Automatic operation of cross feed valve (bar horizontal).</li>
          <li>FUEL XFEED advisory displayed on CAS and consequent increase of fuel N°1 pressure.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "FUEL PUMP 1",
        action: `
        <ol>
          <li>ON. 1 FUEL PUMP caution out.</li>
          <li>Cross feed automatically closed (bar vertical).</li>
          <li>FUEL XFEED advisory extinguishes.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "FUEL PUMP 2",
        action: `
        <ol>
          <li>OFF. Note fall in fuel N°2 pressure, 2 FUEL PUMP caution displayed.</li>
          <li>Automatic operation of cross feed valve (bar horizontal).</li>
          <li>FUEL XFEED advisory displayed on CAS and consequent increase of fuel N°2 pressure.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "FUEL PUMP 1",
        action: `
        <ol>
          <li>OFF. Note fall in fuel N°1 pressure, 1 FUEL PUMP caution displayed.</li>
          <li>Cross feed valve still open (bar horizontal).</li>
          <li>FUEL XFEED advisory still present.</li>
          <li>Confirm correct engine operation on engine driven suction pumps.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "Fuel XFEED switch",
        action: `
        <ol>
          <li>Select CLOSED, confirm bar vertical.</li>
          <li>Wait 15 seconds then confirm correct engine operation on engine 1 and 2.</li>
          <li>Select NORM, confirm bar horizontal.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "FUEL PUMP 1 & 2",
        action: `
        <ol>
          <li>ON. 1 & 2 FUEL PUMP caution out.</li>
          <li>Cross feed automatically closed (bar vertical).</li>
          <li>FUEL XFEED advisory extinguishes.</li>
        </ol>`,
      },
      { type: "check", text: "OEI TNG switch", action: "Check (if required)." },
      { type: "check", text: "MFD page", action: "Select as required." },
      { type: "check", text: "MCDU", action: "Set COM and NAV as required." },
      { type: "check", text: "FD panel", action: "Check in SBY." },
      {
        type: "check",
        text: "TEST button on Autopilot controller",
        action: `
        <ol>
          <li>Press and follow instruction on MFD AFCS synoptic page.</li>
          <li>Confirm test completes successfully and no AP messages are displayed on Crew Alert System.</li>
          <li>Reselect TEST button to return MFD to NORMAL.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "ICS panels",
        action: "Set as required. Set BKUP volume as required.",
      },
      {
        type: "check",
        text: "AHRS, ADS and display reversion switches",
        action: "NORM.",
      },
      { type: "check", text: "LT panels", action: "Set as required." },
      { type: "check", text: "CABIN LT panel", action: "Set as required." },
      { type: "check", text: "COMPASS switches", action: "MAG." },
      {
        type: "check",
        text: "RAD ALT",
        action: "Confirm zero altitude (±5 ft).",
      },
      {
        type: "check",
        text: "DH TEST button on remote instrument controller",
        action: `
        <ol>
          <li>Press, confirm RAD ALT 100 ft (±10 ft) and ‘TEST’ message displayed.</li>
          <li>Release, confirm zero altitude (±5 ft).</li>
        </ol>`,
      },
      {
        type: "check",
        text: "DH selector on remote instrument controller",
        action: "Set as required.",
      },
      {
        type: "check",
        text: "Altimeters: Pilot, Standby, Copilot",
        action: "Set and check.",
      },
      {
        type: "check",
        text: "PITOT HEATER 1 & 2",
        action: "ON for indicated OAT of +4°C or less.",
      },
      { type: "check", text: "POSITION light switch", action: "As required." },
      { type: "check", text: "RPM switch", action: "Set 100%." },
      { type: "check", text: "NR/NF", action: "Confirm stabilized at 100%." },
      { type: "check", text: "LDG LT & LDG LT2", action: "As required." },
      {
        type: "check",
        text: "PARK BRAKE",
        action: "OFF. Check no PARK BRK ON caution message.",
      },
      {
        type: "check",
        text: "Warning and Caution messages",
        action: "Check as required.",
      },
    ],
  },
  taxiing: {
    title: "Taxiing",
    items: [
      { type: "check", text: "AFCS", action: "As required." },
      { type: "check", text: "NOSE WHEEL lock", action: "Press to UNLK." },
      {
        type: "check",
        text: "Collective and cyclic",
        action: `
        <ol>
          <li>Increase collective slowly.</li>
          <li>Move the cyclic stick forward moderately to start movement.</li>
        </ol>`,
      },
      { type: "check", text: "Pedal brakes", action: "Check operation." },
      {
        type: "check",
        text: "Pedal control",
        action: "As required to select direction.",
      },
      {
        type: "check",
        text: "Collective and pedal brakes",
        action: `
        <ol>
          <li>To reduce speed and stop, lower collective.</li>
          <li>Apply pedal brakes.</li>
        </ol>`,
      },
      { type: "check", text: "NOSE WHEEL lock", action: "Press to LOCK." },
      {
        type: "note",
        text: "If the nose wheel is not aligned forward (UNLK caption flashing) it will self centre and lock as soon as the helicopter lifts off.",
      },
      {
        type: "caution",
        text: "Do not use aft cyclic to slow the aircraft. The use of large cyclic displacements in conjunction with low collective can cause main rotor hub and cowling damage.",
      },
      {
        type: "note",
        text: "Turning, whilst taxiing, should be carried out with collective at minimum pitch and cyclic central or as required to compensate for crosswind.",
      },
    ],
  },
  "pre-takeoff": {
    title: "Pre Take-Off Checks",
    items: [
      { type: "check", text: "AFCS", action: "Confirm engaged." },
      { type: "check", text: "MFD", action: "Select PWR PLANT page." },
      { type: "check", text: "PARK BRAKE handle", action: "Released." },
      {
        type: "check",
        text: "ENG MODE",
        action: "Confirm both set to FLIGHT.",
      },
      { type: "check", text: "ECL", action: "Confirm both set to FLIGHT." },
      {
        type: "check",
        text: "TQ LIMITER pushbutton",
        action:
          "Push, if required, to enable TQ limiter function (LIMITER ON advisory message).",
      },
      {
        type: "caution",
        text: "With TQ LIMITER enabled, the AEO engine total torque will be limited to a combined torque value of 228% TQ. OEI engine torque limit will remain at 160% TQ.",
      },
      { type: "check", text: "CAS", action: "Clear/as required." },
    ],
  },
  takeoff: {
    title: "Take Off (Category B)",
    items: [
      {
        type: "check",
        text: "Hover",
        action: `
        <ol>
          <li>Establish at 5 feet (1.5 m) AGL.</li>
          <li>Avoid relative wind between 135° and 225° (quartering tailwinds) as it is not recommended.</li>
        </ol>`,
      },
      { type: "check", text: "NOSE WHEEL steering", action: "Confirm LOCK." },
      {
        type: "check",
        text: "Power checks",
        action:
          "Carry out as required in accordance with IN-FLIGHT POWER CHECKS procedure in Section 4.",
      },
      {
        type: "check",
        text: "Engines/Rotor",
        action: "Check TQ/ITT matching and NR 100%.",
      },
      {
        type: "check",
        text: "Warnings and cautions",
        action: "Confirm none displayed.",
      },
      {
        type: "check",
        text: "MFD PWR PLANT page",
        action:
          "Check all parameters within normal operating limits and confirm no engine matching abnormalities.",
      },
      {
        type: "check",
        text: "Flight controls",
        action: "Check correct functioning.",
      },
      {
        type: "check",
        text: "Collective/Cyclic Control",
        action: `
        <ol>
          <li>Apply cyclic to commence a nose down attitude change of 7°.</li>
          <li>At approximately halfway through the rotation, apply collective to increase PI to 5% above the hover PI.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "Acceleration and Climb",
        action: `
        <ol>
          <li>Accelerate forward and climb to achieve 50 ft (15 m) above take-off surface at 50 KIAS.</li>
          <li>Continue up to 80 KIAS.</li>
        </ol>`,
      },
      {
        type: "check",
        text: "Climb",
        action:
          "At 80 KIAS (Vy), adjust attitude to stabilize at Vy and climb smoothly.",
      },
      {
        type: "check",
        text: "Power limits",
        action: "Observe PI limitations for Take Off power rating.",
      },
      {
        type: "check",
        text: "Landing gear",
        action: "UP (by 200 ft (61 m) AGL).",
      },
      {
        type: "note",
        text: "For OAT of -30°C and below, undercarriage retraction time may double.",
      },
      { type: "check", text: "NR/NF", action: "Confirm 100%." },
      { type: "check", text: "After Take-Off checks", action: "Complete." },
      {
        type: "check",
        text: "Power",
        action: "Adjust as required for cruise flight or continued climb.",
      },
    ],
  },
  "in-flight": {
    title: "In-Flight Procedures",
    items: [
      { type: "header", text: "AFTER TAKE-OFF" },
      {
        type: "check",
        text: "Landing gear",
        action: "Confirm UP.",
      },
      {
        type: "check",
        text: "LDG LT & LDG LT2 switches",
        action: "Confirm OFF.",
      },
      {
        type: "check",
        text: "Engine parameters, temperatures and pressures",
        action: "Normal – within limits.",
      },
      {
        type: "check",
        text: "LD-SH switch",
        action: "As required (TORQUE or TEMP) – confirm parameters matched.",
      },
      {
        type: "note",
        text: "The LD-SH switch allows the pilot to maintain engine TORQUE or ITT matched, as required.",
      },
      { type: "check", text: "TQ LIMiter pushbutton", action: "As required." },
      { type: "check", text: "CAS", action: "Clear/as required." },
      {
        type: "note",
        text: "During flight below 1000 ft (300 m) AGL fly attentive.",
      },
      { type: "check", text: "MFD", action: "As required." },

      { type: "header", text: "CLIMB CHECKS" },
      { type: "check", text: "VENT", action: "As required." },
      { type: "check", text: "Radios/Navigation", action: "As required." },
      { type: "check", text: "Autopilot mode", action: "As required." },

      { type: "header", text: "CRUISE CHECKS" },
      {
        type: "check",
        text: "Collective",
        action: "Adjust as necessary to keep engine parameters within limits.",
      },
      {
        type: "check",
        text: "LD-SH switch",
        action: "As required (TORQUE or TEMP) – confirm parameters matched.",
      },
      {
        type: "note",
        text: "The LD-SH switch allows the pilot to maintain engine TORQUE or ITT matched, as required.",
      },
      {
        type: "note",
        text: "If the engines are ITT limited on the PI indicator, and there is a large ITT mismatch, PI matching can be restored by selecting LD-SH switch to TEMP.",
      },
      {
        type: "check",
        text: "FUEL",
        action:
          "Every 30 minutes: Check quantity, XFEED closed or as required.",
      },
      {
        type: "note",
        text: "If fuel consumption is greater than expected, see 'Abnormal Fuel Consumption' procedure (MALFUNCTION / FUEL page 76).",
      },
      { type: "check", text: "Airspeed", action: "Maintain within limits." },
      {
        type: "check",
        text: "PITOT HEATER switches",
        action: "ON for indicated OAT of +4°C or less.",
      },
      { type: "check", text: "Compass", action: "Check all synchronized." },
      {
        type: "check",
        text: "Radios/Navigation",
        action: "As required.",
      },
      {
        type: "check",
        text: "Standby instrument",
        action: "Check airspeed, altimeter and artificial horizon against PFD.",
      },
      { type: "check", text: "Autopilot modes", action: "As required." },
      {
        type: "check",
        text: "LDG LT & LDG LT2 switches",
        action: "OFF, if used.",
      },
      {
        type: "check",
        text: "MFD",
        action: `
    <ol>
      <li>Every flight hour: select <strong>PWR PLANT</strong> page and confirm no engine matching abnormalities.</li>
      <li>Above 15,000 ft (4,560 m): monitor DC generator load.</li>
    </ol>
  `,
      },
    ],
  },
  "approach-landing": {
    title: "Approach And Landing",
    items: [
      { type: "header", text: "PRE-LANDING CHECKS" },
      { type: "check", text: "RPM switch", action: "Confirm 100%." },
      { type: "check", text: "NR/NF", action: "Confirm 100%." },
      { type: "check", text: "MFD", action: "Select PWR PLANT page." },
      { type: "check", text: "TQ LIMiter pushbutton", action: "As required." },
      {
        type: "check",
        text: "Landing gear lever",
        action: "DOWN – Three green lights on LDG control panel.",
      },
      {
        type: "note",
        text: "For OAT of -30°C and below, undercarriage extension time may double.",
      },
      { type: "check", text: "NOSEWHEEL steering", action: "LOCK." },
      {
        type: "check",
        text: "LDG LT & LDG LT2 switches",
        action: "As required.",
      },
      {
        type: "check",
        text: "Temperatures and Pressures",
        action: "Within limits.",
      },
      {
        type: "check",
        text: "Fuel",
        action: "Quantity, XFEED closed unless required.",
      },
      { type: "check", text: "RAD ALT bug", action: "As required." },
      {
        type: "check",
        text: "Altimeters",
        action: "Pilot, Standby, Copilot – Set.",
      },
      { type: "check", text: "PARK BRAKE handle", action: "As required." },
      { type: "check", text: "Cabin", action: "Secure." },
      { type: "check", text: "PITOT HEATER", action: "As required." },
      {
        type: "note",
        text: `
    If an ILS approach is required, select both NAVs to the same frequency. 
    On ESIS select NAV ON and set the course to the final ILS course.<br><br>
    <strong>Recommended airspeeds:</strong>
    <ol>
      <li>Glideslopes up to 4° → 120 KIAS</li>
      <li>Glideslopes between 4° and 7.5° → 100 KIAS</li>
    </ol>
  `,
      },

      {
        type: "note",
        text: "When descending below 150 ft AGL, the vocal message ‘ONE FIFTY FEET’ is activated regardless of gear status. This message is suppressed if AWG switch is set to REGRADE or INHIBIT.",
      },
      { type: "header", text: "LANDING (CATEGORY B)" },
      { type: "check", text: "AWG switch", action: "NORMAL." },
      {
        type: "check",
        text: "Landing direction",
        action: "Orient for approach into prevailing wind if possible.",
      },
      {
        type: "check",
        text: "Initial point",
        action: `
    <ol>
      <li>Approach smoothly, reducing airspeed gradually.</li>
      <li>Arrive 200 ft AGL above the touchdown point with ≤500 fpm rate of descent.</li>
      <li>Initiate a deceleration to achieve 30 KIAS at 50 ft.</li>
      <li>At 50 ft rotate nose up to approximately 20° to decelerate.</li>
    </ol>
  `,
      },

      {
        type: "check",
        text: "Landing",
        action: "Continue to decelerate and descend to hover.",
      },
      {
        type: "check",
        text: "MFD PWR PLANT page",
        action: `
    <ol>
      <li>While in hover, check all parameters within normal operating limits.</li>
      <li>Confirm there are no engine matching abnormalities.</li>
    </ol>
  `,
      },

      {
        type: "check",
        text: "Touch down",
        action:
          "Max nose-up attitude 15° at touchdown. Apply wheel brakes as required.",
      },
      {
        type: "check",
        text: "NOSE WHEEL lock",
        action: "UNLK if ground taxiing required.",
      },
    ],
  },
  "post-landing": {
    title: "Post Landing And Shutdown",
    items: [
      { type: "header", text: "POST LANDING CHECKS" },
      { type: "check", text: "AFCS", action: "As required." },
      {
        type: "check",
        text: "LDG LT & LDG LT2 switches",
        action: "OFF (if used).",
      },
      { type: "check", text: "Position lights", action: "OFF (if used)." },

      { type: "header", text: "PRE-SHUTDOWN CHECKS" },
      {
        type: "check",
        text: "PARK BRAKE handle",
        action: `
        <ol>
          <li>Pull and turn handle – PARK BRK PRESS caution illuminates.</li>
          <li>Press pedals until caution extinguishes and PARK BRK ON advisory illuminates.</li>
        </ol>
      `,
      },
      {
        type: "check",
        text: "NOSE WHEEL",
        action: "Push to LOCK, if required.",
      },
      { type: "check", text: "Collective lever", action: "Set to MPOG." },
      {
        type: "check",
        text: "Cyclic stick",
        action: "Centralized (verify on PFD cyclic indicator).",
      },
      { type: "check", text: "Pedals", action: "Centered." },
      { type: "check", text: "AFCS", action: "Confirm disengaged." },
      { type: "check", text: "Avionics", action: "As required." },
      {
        type: "check",
        text: "PITOT HEATER switches",
        action: "OFF (if used).",
      },
      {
        type: "check",
        text: "External Power",
        action: "If required, carry out EXTERNAL POWER connection procedure.",
      },

      { type: "header", text: "ENGINES AND ROTOR SHUTDOWN" },
      {
        type: "check",
        text: "ENG 1 and 2 MODE switches",
        action: "Set to IDLE.",
      },
      {
        type: "note",
        text: "A period of 120 seconds stabilization at IDLE is recommended.",
      },
      {
        type: "check",
        text: "BUS TIE switch",
        action: "ON (for night operations).",
      },
      { type: "check", text: "Fuel PUMP 1 and 2 switches", action: "OFF." },
      { type: "check", text: "ENG 1 and 2 MODE switches", action: "OFF." },
      {
        type: "caution",
        text: `
        During shutdown, note that NG speed decelerates freely without abnormal noise or rapid rundown. ITT does not rise abnormally.
      `,
      },
      {
        type: "check",
        text: "ENG 1 and 2 FUEL valves",
        action:
          "OFF – Confirm 1 & 2 FUEL PUMP cautions displayed (fuel valve indicator bar horizontal).",
      },
      {
        type: "check",
        text: "Fuel XFEED switch",
        action: "CLOSED (indicator bar vertical).",
      },
      { type: "check", text: "Cockpit lights", action: "OFF." },
      { type: "check", text: "ANTI-COLL lights", action: "OFF." },
      { type: "check", text: "BUS TIE switch", action: "Confirm AUTO." },
      {
        type: "caution",
        text: "Prior to switching electrical power OFF, ensure engine NG values are at 0%.",
      },
      {
        type: "check",
        text: "BATTERY MASTER and GENERATORS",
        action: "OFF.",
      },
      { type: "check", text: "BATTERY MAIN and AUX", action: "OFF." },

      { type: "header", text: "POST SHUTDOWN CHECKS" },
      {
        type: "info",
        text: `
        <ul>
          <li>If parked for more than 1 hour, chock the wheels.</li>
          <li>If on sloping ground, chock the wheels immediately.</li>
          <li>If OAT ≤ -20°C and aircraft remains outside, remove Main and Auxiliary batteries and store in a heated room.</li>
        </ul>
      `,
      },
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
      this.checklistStates.__lastPowerSource = source;
      this.saveChecklistStates();
      this.currentPage = "view";
      if (!this.checklistStates[this.currentChecklistId]) {
        this.checklistStates[this.currentChecklistId] = {};
      }
    },

    getFilteredItems() {
      if (!this.currentChecklistData) return [];

      const items = this.currentChecklistData.items;

      // If not normal-start or no power source selected → show all
      if (this.currentChecklistId !== "normal-start" || !this.powerSource) {
        return items;
      }

      // Battery start → show only items that are:
      // - batteryOnly: true
      // - or have no batteryOnly property
      if (this.powerSource === "battery") {
        return items.filter(
          (item) => item.batteryOnly === true || item.batteryOnly === undefined
        );
      }

      // External start → show only items that are:
      // - batteryOnly: false
      // - or have no batteryOnly property
      if (this.powerSource === "external") {
        return items.filter(
          (item) => item.batteryOnly === false || item.batteryOnly === undefined
        );
      }

      return items;
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

    showModal(message, onConfirm) {
      const overlay = document.createElement("div");
      overlay.className = "modal-overlay";

      const box = document.createElement("div");
      box.className = "modal-box";
      box.innerHTML = `
    <p>${message}</p>
    <div class="modal-actions">
      <button class="modal-ok" type="button">OK</button>
    </div>
  `;

      overlay.appendChild(box);
      document.body.appendChild(overlay);

      box.querySelector(".modal-ok").addEventListener("click", () => {
        overlay.remove();
        if (onConfirm) onConfirm();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") overlay.remove();
      });
    },

    showConfirm(message, onConfirm, onCancel) {
      const overlay = document.createElement("div");
      overlay.className = "modal-overlay";

      const box = document.createElement("div");
      box.className = "modal-box";
      box.innerHTML = `
    <p>${message}</p>
    <div class="modal-actions">
      <button class="modal-ok" type="button">OK</button>
      <button class="modal-cancel" type="button">Cancel</button>
    </div>
  `;

      overlay.appendChild(box);
      document.body.appendChild(overlay);

      // handle buttons
      box.querySelector(".modal-ok").addEventListener("click", () => {
        overlay.remove();
        if (onConfirm) onConfirm();
      });
      box.querySelector(".modal-cancel").addEventListener("click", () => {
        overlay.remove();
        if (onCancel) onCancel();
      });

      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) overlay.remove();
      });
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") overlay.remove();
      });
    },

    toggleItem(itemIndex) {
      const checklist = this.currentChecklistData;
      if (!checklist) return;

      // Only consider visible items
      const visibleItems =
        this.currentChecklistId === "normal-start" && this.powerSource
          ? this.getFilteredItems()
          : checklist.items;

      const item = visibleItems[itemIndex];
      if (!item || item.type !== "check") return;

      const realIndex = checklist.items.indexOf(item);
      const state =
        this.checklistStates[this.currentChecklistId] ||
        (this.checklistStates[this.currentChecklistId] = {});

      // ✅ Check for missing previous *visible* steps only
      for (let i = 0; i < itemIndex; i++) {
        const prevItem = visibleItems[i];
        if (prevItem.type === "check") {
          const prevRealIndex = checklist.items.indexOf(prevItem);
          if (!state[prevRealIndex]) {
            this.missIndex = i;
            this.showInlineNotice(itemIndex);
            this.$nextTick(() => {
              const el = document.querySelector(
                `[data-item="${prevRealIndex}"]`
              );
              if (el) {
                el.classList.add("miss");
                el.scrollIntoView({ behavior: "smooth", block: "center" });
                setTimeout(() => el.classList.remove("miss"), 1000);
              }
            });
            return;
          }
        }
      }

      // ✅ Toggle the current visible step
      state[realIndex] = !state[realIndex];
      this.saveChecklistStates();

      // ✅ Handle completion behavior
      if (this.isChecklistComplete(this.currentChecklistId)) {
        if (this.currentChecklistId === "normal-start") {
          if (this.powerSource === "battery") {
            // === Battery start phase ===
            this.showModal(
              "Battery Start checklist complete ✅<br><small>Proceeding to External Power Start...</small>",
              () => {
                setTimeout(() => {
                  this.powerSource = "external";
                  this.checklistStates.__lastPowerSource = "battery";
                  this.saveChecklistStates();
                }, 200);
              }
            );
          } else if (this.powerSource === "external") {
            // === External power phase ===
            this.showModal(
              "Normal Engine Start complete ✅<br><small>Proceeding to System Checks...</small>",
              () => {
                setTimeout(() => {
                  this.openChecklist("system-checks");
                }, 200);
              }
            );
          }
        } else if (this.currentChecklistId === "quick-start") {
          // === Quick Engine Start ===
          this.showModal(
            "Quick Engine Start complete ✅<br><small>Proceeding to System Checks...</small>",
            () => {
              setTimeout(() => {
                this.openChecklist("system-checks");
              }, 200);
            }
          );
        } else {
          // === All other checklists ===
          this.showModal("Checklist Complete ✅", () => {
            setTimeout(() => this.backToMenu(), 200);
          });
        }
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
      this.showConfirm(
        "⚠️ Are you sure you want to reset this checklist?<br><small>All progress will be lost.</small>",
        () => {
          this.checklistStates[this.currentChecklistId] = {};
          this.saveChecklistStates();
          this.missIndex = null;
        }
      );
    },

    isChecklistComplete(checklistId) {
      const progress = this.getChecklistProgress(checklistId);
      if (!progress.total) return false;

      // ✅ Simply check if all visible steps are completed
      return progress.completed === progress.total;
    },

    getChecklistProgress(checklistId) {
      const checklist = this.checklists[checklistId];
      if (!checklist) return { completed: 0, total: 0, label: "0/0" };

      const state = this.checklistStates[checklistId] || {};

      // === Determine visible items EXACTLY like your getFilteredItems() ===
      let visibleItems = checklist.items;
      if (checklistId === "normal-start" && this.powerSource) {
        visibleItems = checklist.items.filter((item) => {
          if (item.type !== "check") return true; // always show headers, notes, etc.

          if (this.powerSource === "battery") {
            // show only steps explicitly batteryOnly:true OR without a flag
            return item.batteryOnly === true || item.batteryOnly === undefined;
          } else if (this.powerSource === "external") {
            // show only steps explicitly batteryOnly:false OR without a flag
            return item.batteryOnly === false || item.batteryOnly === undefined;
          }
          return true;
        });
      }

      // === SPECIAL CASE: When on menu page and checking normal-start progress ===
      // If user did external power only, exclude the battery-only "Go to External power start" step
      if (checklistId === "normal-start" && !this.powerSource) {
        // Check if this is being called from menu (no active powerSource)
        // Exclude the battery-only redirect step from total count
        visibleItems = checklist.items.filter((item) => {
          if (item.type !== "check") return true;
          // Exclude the specific "Go to External power start" step
          if (
            item.batteryOnly === true &&
            item.text === "Go to External power start"
          ) {
            return false;
          }
          return true;
        });
      }

      // === Count totals ===
      const total = visibleItems.filter((i) => i.type === "check").length;
      let completed = 0;

      visibleItems.forEach((item) => {
        if (item.type !== "check") return;
        const index = checklist.items.indexOf(item);
        if (state[index]) completed++;
      });

      const label = `${completed}/${total}`;
      return { completed, total, label };
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
