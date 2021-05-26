let Electrodomestico = require("./Electrodomestico");

module.exports = class televisor extends Electrodomestico {
  constructor(consumo, procedencia, pulgadas, tdt) {
    super(consumo, procedencia);
    this.pulgadas = pulgadas;
    this.tdt = tdt;
  }
  obtenerPrecio() {
    super.precioBase();
    this.obtenerPrecioPul();
    this.obtenerPrecioTdt();
  }

  obtenerPrecioPul() {
    let add = this.pulgadas <= 40 ? 0 : 0.3;
    return super.sumarAdicional(this.precio * add);
  }

  obtenerPrecioTdt() {
    if (this.tdt) {
      super.sumarAdicional(250000);
      console.log("TV con TDT");
    }
  }
};
