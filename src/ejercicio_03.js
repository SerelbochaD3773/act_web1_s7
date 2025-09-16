const estudiantes = [
  { nombre: "Ana", edad: 20, notas: [85, 90, 78] },
  { nombre: "Luis", edad: 22, notas: [60, 65, 70] },
  { nombre: "Marta", edad: 19, notas: [95, 100, 92] },
];
const nombres = estudiantes.map(estudiante => estudiante.nombre);
const promedios = estudiantes.map(estudiante => {
  const suma = estudiante.notas.reduce((a, b) => a + b, 0);
  const promedio = (suma / estudiante.notas.length).toFixed(1);
  return { nombre: estudiante.nombre, promedio, estado: promedio >= 70 ? 'Aprobado' : 'Reprobado' };
});
console.log("Nombres de los estudiantes:", nombres);
console.log("Promedios y estados de los estudiantes:", promedios);