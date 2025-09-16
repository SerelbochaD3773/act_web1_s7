const usuarios = [
  { id: 1, nombre: "Juan", email: "juan@example.com", activo: true },
  { id: 2, nombre: "Ana", email: "ana@example.com", activo: false },
  { id: 3, nombre: "Pedro", email: "pedro@example.com", activo: true },
  { id: 4, nombre: "Maria", email: "maria@example.com", activo: true },
];
const buscarPorEmail = (email) => usuarios.find((usuario) => usuario.email === email);
const posicionPorId = (id) => usuarios.findIndex((usuario) => usuario.id === id);
const hayInactivos = () => usuarios.some((usuario) => !usuario.activo);
const todosTienenEmailValido = () => usuarios.every((usuario) => usuario.email.includes("@"));
console.log("Buscar por email 'juan@example.com':", buscarPorEmail("juan@example.com"));
console.log("Posición por ID 2:", posicionPorId(2));
console.log("¿Hay usuarios inactivos?", hayInactivos());
console.log("¿Todos tienen email válido?", todosTienenEmailValido());
