
const app = Vue.createApp({
  data(){ return {
    qnh: 29.92, qnhUnit: "inHg", fat: null, indicatedAltitude: 87, engineTorque: null,
    pressureAltitude: null, densityAltitude: null, maxAllowableITT: null, maxAllowableNg: null, part1TorqueOut: null, inputError: null
  }},
  mounted(){ this.recalc(); },
  methods:{
    // Local helpers (formerly in app.js)
    fmt(n){ return (n===null||n===undefined||Number.isNaN(Number(n))) ? "—" : Number(n).toLocaleString(); },
    showOrNA1(n){ return (n===null||n===undefined||Number.isNaN(Number(n))) ? "—" : n; },

    // Power formulas (moved here from app.js)
    lerp(a, b, t) { return a + (b - a) * t; },
    calcX_atNode(paNode, torque) {
      const k = this.TORQUE_FORMULAS_BY_PA.get(paNode);
      return k ? k.m * Number(torque) - k.c : null;
    },
    calcPart1TorqueDerived(PA, torque) {
      if (torque == null || Number.isNaN(Number(torque))) return null;
      const PART1_MIN_PA = -1000, PART1_MAX_PA = 14000;
      if (PA < PART1_MIN_PA || PA > PART1_MAX_PA)
        return { value: null, message: "Check pressure altitude between -1000ft & +14000 ft !" };
      const step = 1000;
      const capped = Math.min(PART1_MAX_PA, Math.max(PART1_MIN_PA, PA));
      let lo = Math.floor((capped - PART1_MIN_PA) / step) * step + PART1_MIN_PA;
      let hi = lo + step;
      if (hi > PART1_MAX_PA) { hi = PART1_MAX_PA; lo = hi - step; }
      const x1 = this.calcX_atNode(lo, torque);
      const x2 = this.calcX_atNode(hi, torque);
      const t = (capped - lo) / (hi - lo || 1);
      return { value: Number((x1 + (x2 - x1) * t).toFixed(3)), message: null, paNode: Math.abs(capped - lo) <= Math.abs(hi - capped) ? lo : hi };
    },
    evalCubic(p, x) { return p.a * x * x * x + p.b * x * x + p.c * x + p.d; },
    interpAcrossOATForITT(oat, X) {
      const y = {
        m10: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(-10), X),
        p0:  this.evalCubic(this.ITT_CUBIC_BY_OAT.get(0), X),
        p10: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(10), X),
        p20: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(20), X),
        p30: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(30), X),
        p40: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(40), X),
        p50: this.evalCubic(this.ITT_CUBIC_BY_OAT.get(50), X),
      };
      if (oat >= -10 && oat < 0) return y.m10 + ((oat + 10) * (y.p0 - y.m10)) / 10;
      if (oat >= 0 && oat < 10)  return y.p0  + ((oat - 0) * (y.p10 - y.p0)) / 10;
      if (oat >= 10 && oat < 20) return y.p10 + ((oat - 10) * (y.p20 - y.p10)) / 10;
      if (oat >= 20 && oat < 30) return y.p20 + ((oat - 20) * (y.p30 - y.p20)) / 10;
      if (oat >= 30 && oat < 40) return y.p30 + ((oat - 30) * (y.p40 - y.p30)) / 10;
      if (oat >= 40 && oat <= 50) return y.p40 + ((oat - 40) * (y.p50 - y.p40)) / 10;
      return null;
    },
    interpAcrossOATForNg(oat, X) {
      const y = {
        m10: this.evalCubic(this.NG_CUBIC_BY_OAT.get(-10), X),
        p0:  this.evalCubic(this.NG_CUBIC_BY_OAT.get(0), X),
        p10: this.evalCubic(this.NG_CUBIC_BY_OAT.get(10), X),
        p20: this.evalCubic(this.NG_CUBIC_BY_OAT.get(20), X),
        p30: this.evalCubic(this.NG_CUBIC_BY_OAT.get(30), X),
        p40: this.evalCubic(this.NG_CUBIC_BY_OAT.get(40), X),
        p50: this.evalCubic(this.NG_CUBIC_BY_OAT.get(50), X),
      };
      if (oat >= -10 && oat < 0) return y.m10 + ((oat + 10) * (y.p0 - y.m10)) / 10;
      if (oat >= 0 && oat < 10)  return y.p0  + ((oat - 0) * (y.p10 - y.p0)) / 10;
      if (oat >= 10 && oat < 20) return y.p10 + ((oat - 10) * (y.p20 - y.p10)) / 10;
      if (oat >= 20 && oat < 30) return y.p20 + ((oat - 20) * (y.p30 - y.p20)) / 10;
      if (oat >= 30 && oat < 40) return y.p30 + ((oat - 30) * (y.p40 - y.p30)) / 10;
      if (oat >= 40 && oat <= 50) return y.p40 + ((oat - 40) * (y.p50 - y.p40)) / 10;
      return null;
    },

    recalc(){
      const qnhInHg = this.qnhUnit === "inHg" ? this.qnh : this.qnh * 0.02953;
      const IA = Number(this.indicatedAltitude || 0);
      const PA = IA + (29.92 - qnhInHg) * 1000;
      this.pressureAltitude = Math.round(PA);

      let DA = null;
      if (this.fat !== null && !Number.isNaN(Number(this.fat))) {
        const ISA = 15 - 0.00198 * PA;
        DA = PA + 120 * (Number(this.fat) - ISA);
      }
      this.densityAltitude = DA === null ? null : Math.round(DA);

      const p1 = this.calcPart1TorqueDerived(PA, this.engineTorque);
      this.part1TorqueOut = p1 ? p1.value : null;
      const OAT = Number(this.fat);
      const TORQ = Number(this.engineTorque);
      this.inputError = null;
      if (!(IA >= 0 && IA <= 14000)) this.inputError = "Indicated Altitude must be between 0 and 14000 ft";
      if (this.fat !== null && !Number.isNaN(OAT) && !(OAT >= -10 && OAT <= 50)) this.inputError = "OAT must be between -10°C and +50°C";
      if (this.engineTorque !== null && !Number.isNaN(TORQ) && !(TORQ >= 90 && TORQ <= 105)) this.inputError = "Engine Torque must be between 90% and 105%";
      let itt = null, ng = null;
      if (!this.inputError && this.part1TorqueOut != null) {
        const X = this.part1TorqueOut;
        const ittRaw = this.interpAcrossOATForITT(OAT, X);
        const ngRaw  = this.interpAcrossOATForNg(OAT, X);
        itt = ittRaw != null ? Number(ittRaw.toFixed(1)) : null;
        ng  = ngRaw  != null ? Number(ngRaw.toFixed(1))  : null;
      }
      this.maxAllowableITT = itt;
      this.maxAllowableNg  = ng;
    }
  },
  created(){
    // constants moved here
    this.TORQUE_FORMULAS_BY_PA = new Map([
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
    this.ITT_CUBIC_BY_OAT = new Map([
      [-10, { a: 0.001323553, b: -0.050445972, c: 3.91969438, d: 557.901640559 }],
      [0, { a: 0.0013, b: -0.0465, c: 3.7777, d: 589.05 }],
      [10, { a: 0.0011, b: -0.0387, c: 3.7153, d: 618.3 }],
      [20, { a: 0.0005, b: -0.0036, c: 3.2728, d: 648.12 }],
      [30, { a: 0.0007, b: -0.0143, c: 3.4882, d: 676.22 }],
      [40, { a: 0.0002, b: 0.0101, c: 3.2392, d: 705.06 }],
      [50, { a: 0.0003, b: 0.0034, c: 3.348, d: 733.81 }],
    ]);
    this.NG_CUBIC_BY_OAT = new Map([
      [-10, { a: 0.0000505, b: -0.00074275, c: 0.25797018, d: 86.92329767 }],
      [0, { a: 0.0000834, b: -0.0034274, c: 0.3128293, d: 88.0857619 }],
      [10, { a: 0.0000644, b: -0.0021019, c: 0.2855636, d: 89.5857046 }],
      [20, { a: 0.0000169, b: 0.0007798, c: 0.2375639, d: 91.1007081 }],
      [30, { a: -0.0000181, b: 0.0022507, c: 0.2308412, d: 92.3327287 }],
      [40, { a: 0.0000088, b: 0.0008873, c: 0.2510384, d: 93.5441777 }],
      [50, { a: -0.0000215, b: 0.0020057, c: 0.239933, d: 94.8723597 }],
    ]);
  }
});
app.mount('#app');
