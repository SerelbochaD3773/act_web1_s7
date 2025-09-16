const lenguajes = ['JavaScript', 'Python', 'Java', 'C++', 'Go'];
// Extraer los primeros 3 lenguajes
const primerosTres = lenguajes.slice(0, 3);
console.log("Primeros tres lenguajes:", primerosTres);

// Extraer el primero y el último
const [primero, ...rest] = lenguajes;
console.log("Primer lenguaje:", primero);
console.log("Último lenguaje:", lenguajes[lenguajes.length - 1]);

// Intercambiar dos variables usando desestructuración
console.log("Antes de intercambiar:", lenguajes);
[lenguajes[0], lenguajes[1]] = [lenguajes[1], lenguajes[0]];
console.log("Después de intercambiar con desestructuración:", lenguajes);