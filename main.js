let Electrodomestico = require("./Electrodomestico");
let televisor = require("./televisor");
let nevera = require("./nevera");

electro1 = new Electrodomestico("C", "internacional");
electro1.precioBase();
console.log(electro1);

electroTv = new televisor("B", "nacional", 40, true);
electroTv.obtenerPrecio();
console.log(electroTv);

electroNev = new nevera("A", "internacional", 150);
electroNev.obtenerPrecioNevera();
console.log(electroNev);
