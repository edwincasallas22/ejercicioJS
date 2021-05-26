module.exports = class Electrodomestico {
  constructor(consumo, procedencia) {
    this.precio = 0.0;
    this.consumo = consumo;
    this.procedencia = procedencia;
  }

  precioBase() {
    this.aplicarProcedencia();
    this.aplicarConsumo();
  }
  aplicarProcedencia() {
    if (this.procedencia == "nacional") {
      this.precio = this.precio + 250000;
    } else if (this.procedencia == "internacional") {
      this.precio = this.precio + 350000;
    }
  }

  aplicarConsumo() {
    if (this.consumo == "A") {
      this.precio = this.precio + 450000;
    } else if (this.consumo == "B") {
      this.precio = this.precio + 350000;
    } else if (this.consumo == "C") {
      this.precio = this.precio + 250000;
    }
  }

  sumarAdicional(adicional) {
    this.precio = this.precio + adicional;
  }
};
