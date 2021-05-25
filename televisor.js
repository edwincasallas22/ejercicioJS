module.exports = Electrodomestico = require("./Electrodomestico");

class Televisor extends Electrodomestico {
  constructor(consumo, procedencia, precio, pulgadas, tdt) {
    super.precio = 0.0;
    super.consumo = consumo;
    super.procedencia = procedencia;
    this.pulgadas = pulgadas;
    this.tdt = tdt;
  }
  obtenerPrecioPul() {
    add = this.pulgadas <= 40 ? 0 : 0.3;
    super.sumarAdicional(this.precio * add);
  }

  //   obtenerPrecioTdt(){
  //       if ()

  //   }
}
