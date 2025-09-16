const persona = {
  nombre: "Juan",
  edad: 30,
  direccion: {
    calle: "69b",
    numero: "62d"
  },
  contacto: {
    email: "juan@example.com",
    telefono: "621-456-7890"
  }
};

const { nombre, edad } = persona;
console.log("Desestructuración básica:");
console.log("Nombre:", nombre);
console.log("Edad:", edad);

console.log("Renombrado de variables:");

const { contacto: { email: correoElectronico } } = persona;
const { contacto: { telefono: numeroTelefono } } = persona;
console.log("correo:", correoElectronico);
console.log("telefono:", numeroTelefono);

const { ciudad = "Desconocida" } = persona.direccion;
console.log("Valores por defecto:");
console.log("Ciudad:", ciudad);

const { direccion: { calle, numero }, contacto: { email, telefono } } = persona;
console.log("Desestructuración anidada:");
console.log("Calle:", calle);
console.log("Número:", numero);
console.log("Email:", email);
console.log("Teléfono:", telefono);


const { contacto, ...rest } = persona;
console.log("Rest operator en objetos:");
console.log("Contacto:", contacto);
console.log("Resto del objeto:", rest);