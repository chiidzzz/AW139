
const app = Vue.createApp({
  data(){ return {
    inHg: 29.92,
    hPa: 1013.25,
    standardInHg: 29.92,
    standardHpa: 1013.25,
    _updating: false
  }},
  methods:{
    fmt(n){ return (n===null || n===undefined || Number.isNaN(Number(n))) ? '—' : Number(n).toFixed(2); },
    fromInHg(){
      if(this._updating) return;
      this._updating = true;
      const val = Number(this.inHg);
      if(!Number.isNaN(val)){
        this.hPa = Number((val * 33.8638866667).toFixed(2));
      } else {
        this.hPa = null;
      }
      this._updating = false;
    },
    fromHpa(){
      if(this._updating) return;
      this._updating = true;
      const val = Number(this.hPa);
      if(!Number.isNaN(val)){
        this.inHg = Number((val / 33.8638866667).toFixed(2));
      } else {
        this.inHg = null;
      }
      this._updating = false;
    }
  }
});
app.mount('#app');
