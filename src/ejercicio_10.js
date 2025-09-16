const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid"
};

const claves = Object.keys(persona);
console.log("Claves:", claves);

const valores = Object.values(persona);
console.log("Valores:", valores);

const entradas = Object.entries(persona);
console.log("Entradas:" , entradas);
console.log("Iterando con forEach:");
entradas.forEach(([clave, valor]) => {
  console.log(`  ${clave}: ${valor}`);
});