module.export = class Electrodomestico {
  constructor(consumo, procedencia) {
    this.precio = 0.0;
    this.consumo = consumo;
    this.procedencia = procedencia;
  }

  aplicarProcedencia() {
    this.precio += this.procedencia === "nacional" ? 250000 : 350000;
  }

  aplicarConsumo() {
    switch (consumo) {
      case "A":
        this.precio = this.precio + 450000;
        break;
      case "B":
        this.precio = this.precio + 350000;
        break;
      case "C":
        this.precio = this.precio + 250000;
        break;
    }
    // calcularPrecioBase(){
    //     return this.precio;
    // }
  }

  sumarAdicional(add) {
    this.precio = this.precio + add;
  }
};

let valor = new Electrodomestico("A", "internacional");
console.log(valor);
