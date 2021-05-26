let Electrodomestico = require("./Electrodomestico");
module.exports = class nevera extends Electrodomestico {
  constructor(consumo, procedencia, capacidad) {
    super(consumo, procedencia);
    this.capacidad = capacidad;
  }

  obtenerPrecioNevera() {
    super.precioBase();

    return this.adicionalCapacidad();
  }

  adicionalCapacidad() {
    if (this.capacidad > 120) {
      super.sumarAdicional(this.calcularAdicional());
    } else {
      super.sumarAdicional(0);
    }
  }
  calcularAdicional() {
    let valorExtra = Math.floor((this.capacidad - 120) / 10) * 0.05;

    return this.precio * valorExtra;
  }
};
