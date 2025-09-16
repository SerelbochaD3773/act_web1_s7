const inventario = [
  { id: 1, nombre: "parlante", categoria: "Electronicos", stock: 10, precio: 400 },
  { id: 2, nombre: "tv", categoria: "Electronicos", stock: 20, precio: 1000 },
  { id: 3, nombre: "proyector", categoria: "Electronicos", stock: 7, precio: 3000 },
  { id: 4, nombre: "pc", categoria: "Electronicos", stock: 5, precio: 2500 },
  { id: 5, nombre: "impresora", categoria: "Electronicos", stock: 10, precio: 8000 },
];
const productosElectronicos = inventario.filter(producto => producto.categoria === "Electronicos");
const productosMenor10Stock = inventario.filter(producto => producto.stock < 10);
const productosMayores500 = inventario.filter(producto => producto.precio > 500);

console.log("Productos de la categoría 'Electrónicos':", productosElectronicos);
console.log("Productos con stock menor a 10:", productosMenor10Stock);
console.log("Productos con precio mayor a $500:", productosMayores500);