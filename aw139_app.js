// ===== Constants & helpers (single definitions) =====
function lerp(a, b, t) {
  return a + (b - a) * t;
}

// --- Part 1: Torque → X via PA nodes ---
// m*Torque - c for each 1000-ft node
const TORQUE_FORMULAS_BY_PA = new Map([
  [-1000, { m: 0.48, c: 42.2 }],
  [0, { m: 0.5, c: 42.5 }],
  [1000, { m: 0.5133, c: 41.9 }],
  [2000, { m: 0.54, c: 42.7 }],
  [3000, { m: 0.5533, c: 42.0 }],
  [4000, { m: 0.5733, c: 41.9 }],
  [5000, { m: 0.6033, c: 42.7 }],
  [6000, { m: 0.62, c: 42.1 }],
  [7000, { m: 0.64, c: 41.7 }],
  [8000, { m: 0.6733, c: 42.5 }],
  [9000, { m: 0.6933, c: 41.9 }],
  [10000, { m: 0.7233, c: 42.15 }],
  [11000, { m: 0.7533, c: 42.2 }],
  [12000, { m: 0.78, c: 41.9 }],
  [13000, { m: 0.8133, c: 42.1 }],
  [14000, { m: 0.92, c: 48.7 }],
]);
const PART1_MIN_PA = -1000;
const PART1_MAX_PA = 14000;

function calcX_atNode(paNode, torque) {
  const coeff = TORQUE_FORMULAS_BY_PA.get(paNode);
  if (!coeff) return null;
  return coeff.m * Number(torque) - coeff.c;
}

// Compute X by linearly interpolating between the surrounding 1000-ft nodes
function calcPart1TorqueDerived(PA, torque) {
  if (torque == null || Number.isNaN(Number(torque))) return null;
  if (PA < PART1_MIN_PA || PA > PART1_MAX_PA) {
    return {
      value: null,
      message: "Check pressure altitude between -1000ft & +14000 ft !",
    };
  }
  const step = 1000;
  const cappedPA = Math.min(PART1_MAX_PA, Math.max(PART1_MIN_PA, PA));
  let lower =
    Math.floor((cappedPA - PART1_MIN_PA) / step) * step + PART1_MIN_PA;
  let upper = lower + step;
  if (upper > PART1_MAX_PA) {
    upper = PART1_MAX_PA;
    lower = upper - step;
  }

  const xLower = calcX_atNode(lower, torque);
  const xUpper = calcX_atNode(upper, torque);
  const denom = upper - lower === 0 ? 1 : upper - lower;
  const t = (cappedPA - lower) / denom;
  const xVal = xLower + (xUpper - xLower) * t;

  // nearest node (for highlight only)
  const nearest =
    Math.abs(cappedPA - lower) <= Math.abs(upper - cappedPA) ? lower : upper;

  return { value: Number(xVal.toFixed(3)), message: null, paNode: nearest };
}

// --- Part 2: ITT cubics per OAT node ---
const ITT_CUBIC_BY_OAT = new Map([
  [-10, { a: 0.001323553, b: -0.050445972, c: 3.91969438, d: 557.901640559 }],
  [0, { a: 0.0013, b: -0.0465, c: 3.7777, d: 589.05 }],
  [10, { a: 0.0011, b: -0.0387, c: 3.7153, d: 618.3 }],
  [20, { a: 0.0005, b: -0.0036, c: 3.2728, d: 648.12 }],
  [30, { a: 0.0007, b: -0.0143, c: 3.4882, d: 676.22 }],
  [40, { a: 0.0002, b: 0.0101, c: 3.2392, d: 705.06 }],
  [50, { a: 0.0003, b: 0.0034, c: 3.348, d: 733.81 }],
]);

// --- Part 3: Ng cubics per OAT node ---
const NG_CUBIC_BY_OAT = new Map([
  [-10, { a: 0.0000505, b: -0.00074275, c: 0.25797018, d: 86.92329767 }],
  [0, { a: 0.0000834, b: -0.0034274, c: 0.3128293, d: 88.0857619 }],
  [10, { a: 0.0000644, b: -0.0021019, c: 0.2855636, d: 89.5857046 }],
  [20, { a: 0.0000169, b: 0.0007798, c: 0.2375639, d: 91.1007081 }],
  [30, { a: -0.0000181, b: 0.0022507, c: 0.2308412, d: 92.3327287 }],
  [40, { a: 0.0000088, b: 0.0008873, c: 0.2510384, d: 93.5441777 }],
  [50, { a: -0.0000215, b: 0.0020057, c: 0.239933, d: 94.8723597 }],
]);

const PART2_MIN_OAT = -10;
const PART2_MAX_OAT = 50;

// Evaluate node cubic
function evalCubic(poly, x) {
  return poly.a * x * x * x + poly.b * x * x + poly.c * x + poly.d;
}

// Excel-like interpolation across OAT bands using 7 nodes
function interpAcrossOATForITT(oat, X) {
  const y = {
    m10: evalCubic(ITT_CUBIC_BY_OAT.get(-10), X),
    p0: evalCubic(ITT_CUBIC_BY_OAT.get(0), X),
    p10: evalCubic(ITT_CUBIC_BY_OAT.get(10), X),
    p20: evalCubic(ITT_CUBIC_BY_OAT.get(20), X),
    p30: evalCubic(ITT_CUBIC_BY_OAT.get(30), X),
    p40: evalCubic(ITT_CUBIC_BY_OAT.get(40), X),
    p50: evalCubic(ITT_CUBIC_BY_OAT.get(50), X),
  };
  const t = oat;
  if (t >= -10 && t < 0) return y.m10 + ((t + 10) * (y.p0 - y.m10)) / 10;
  if (t >= 0 && t < 10) return y.p0 + ((t - 0) * (y.p10 - y.p0)) / 10;
  if (t >= 10 && t < 20) return y.p10 + ((t - 10) * (y.p20 - y.p10)) / 10;
  if (t >= 20 && t < 30) return y.p20 + ((t - 20) * (y.p30 - y.p20)) / 10;
  if (t >= 30 && t < 40) return y.p30 + ((t - 30) * (y.p40 - y.p30)) / 10;
  if (t >= 40 && t <= 50) return y.p40 + ((t - 40) * (y.p50 - y.p40)) / 10;
  return null;
}

function interpAcrossOATForNg(oat, X) {
  const y = {
    m10: evalCubic(NG_CUBIC_BY_OAT.get(-10), X),
    p0: evalCubic(NG_CUBIC_BY_OAT.get(0), X),
    p10: evalCubic(NG_CUBIC_BY_OAT.get(10), X),
    p20: evalCubic(NG_CUBIC_BY_OAT.get(20), X),
    p30: evalCubic(NG_CUBIC_BY_OAT.get(30), X),
    p40: evalCubic(NG_CUBIC_BY_OAT.get(40), X),
    p50: evalCubic(NG_CUBIC_BY_OAT.get(50), X),
  };
  const t = oat;
  if (t >= -10 && t < 0) return y.m10 + ((t + 10) * (y.p0 - y.m10)) / 10;
  if (t >= 0 && t < 10) return y.p0 + ((t - 0) * (y.p10 - y.p0)) / 10;
  if (t >= 10 && t < 20) return y.p10 + ((t - 10) * (y.p20 - y.p10)) / 10;
  if (t >= 20 && t < 30) return y.p20 + ((t - 20) * (y.p30 - y.p20)) / 10;
  if (t >= 30 && t < 40) return y.p30 + ((t - 30) * (y.p40 - y.p30)) / 10;
  if (t >= 40 && t <= 50) return y.p40 + ((t - 40) * (y.p50 - y.p40)) / 10;
  return null;
}

// --- Vue app ---
const app = Vue.createApp({
  data() {
    return {
      currentPage: "Home",
      // Inputs
      qnh: 29.92,
      qnhUnit: "inHg",
      fat: null,
      indicatedAltitude: 87,
      engineTorque: null,
      // Derived
      pressureAltitude: null,
      densityAltitude: null,
      maxAllowableITT: null,
      maxAllowableNg: null,
      // Debug
      part1TorqueOut: null,
      inputError: null,
      // Converter
      pressureUnitFrom: "hPa",
      pressureUnitTo: "inHg",
      pressureInput: null,
      pressureConverted: "",
    };
  },
  mounted() {
    this.recalc();
    this.convertPressure();
  },
  methods: {
    navigateTo(page) {
      this.currentPage = page;
    },

    goHome() {
      this.currentPage = "Home";
    },

    recalc() {
      // Convert QNH to inHg
      const qnhInHg = this.qnhUnit === "inHg" ? this.qnh : this.qnh * 0.02953;
      const IA = Number(this.indicatedAltitude || 0);
      const PA = IA + (29.92 - qnhInHg) * 1000;
      this.pressureAltitude = Math.round(PA);

      // Density Altitude
      let DA = null;
      if (this.fat !== null && !Number.isNaN(Number(this.fat))) {
        const ISA = 15 - 0.00198 * PA;
        DA = PA + 120 * (Number(this.fat) - ISA);
      }
      this.densityAltitude = DA === null ? null : Math.round(DA);

      // Part 1: X via interpolation
      const p1 = calcPart1TorqueDerived(PA, this.engineTorque);
      this.part1TorqueOut = p1 ? p1.value : null;

      // Input range checks
      const OAT = Number(this.fat);
      const TORQ = Number(this.engineTorque);
      this.inputError = null;
      if (!(IA >= 0 && IA <= 14000))
        this.inputError = "Indicated Altitude must be between 0 and 14000 ft";
      if (this.fat !== null && !Number.isNaN(OAT) && !(OAT >= -10 && OAT <= 50))
        this.inputError = "OAT must be between -10°C and +50°C";
      if (
        this.engineTorque !== null &&
        !Number.isNaN(TORQ) &&
        !(TORQ >= 90 && TORQ <= 105)
      )
        this.inputError = "Engine Torque must be between 90% and 105%";

      // Part 2 / Part 3
      let itt = null,
        ng = null;
      if (!this.inputError && this.part1TorqueOut != null) {
        const X = this.part1TorqueOut;
        const ittRaw = interpAcrossOATForITT(OAT, X);
        const ngRaw = interpAcrossOATForNg(OAT, X);
        itt = ittRaw != null ? Number(ittRaw.toFixed(1)) : null;
        ng = ngRaw != null ? Number(ngRaw.toFixed(1)) : null;
      }
      this.maxAllowableITT = itt;
      this.maxAllowableNg = ng;
    },
    // Converter
    convertPressure() {
      if (this.pressureUnitFrom === "hPa") {
        this.pressureUnitTo = "in. Hg";
        this.pressureConverted =
          (Number(this.pressureInput || 0) * 0.02953).toFixed(2) + " inHg";
      } else {
        this.pressureUnitTo = "hPa";
        this.pressureConverted =
          (Number(this.pressureInput || 0) / 0.02953).toFixed(1) + " hPa";
      }
    },
    updateConversionUnits() {
      this.pressureUnitTo = this.pressureUnitFrom === "hPa" ? "in. Hg" : "hPa";

      // Clear input & output when switching units
      this.pressureInput = null;
      this.pressureConverted = "";
    },
    fmt(v) {
      return v === null || Number.isNaN(v) ? "—" : v.toLocaleString();
    },
    showOrNA1(v) {
      return v === null || v === undefined || Number.isNaN(v)
        ? "—"
        : Number(v).toFixed(1);
    },
  },
}).mount("#app");
