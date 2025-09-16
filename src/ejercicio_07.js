const numerosDesordenados = [5, 3, 8, 1, 4];
const nombresPersonas = ["Juan", "Ana", "Pedro", "Maria"];
const objetosEdad = [
  { nombre: "Juan", edad: 25 },
  { nombre: "Ana", edad: 30 },
  { nombre: "Pedro", edad: 20 },
  { nombre: "Maria", edad: 28 },
];


numerosDesordenados.sort((a, b) => a - b); // ascendente
console.log("Números ordenados ascendente:");
console.log(numerosDesordenados);
numerosDesordenados.reverse(); // descendente
console.log("Números ordenados descendente:");
console.log(numerosDesordenados);


nombresPersonas.sort();
console.log("Personas ordenadas alfabéticamente:");
console.log(nombresPersonas);


 objetosEdad.sort((a, b) => a.edad - b.edad);
console.log("Objetos ordenados por edad:");
console.log(objetosEdad);

 objetosEdad.reverse();
console.log("Objetos ordenados por edad invertidos:");
console.log(objetosEdad);





