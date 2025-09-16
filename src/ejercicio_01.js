const inventario = [
  { id: 1, nombre: "parlante", categoria: "audio", stock: 10, precio: 500000 },
  { id: 2, nombre: "tv", categoria: "video", stock: 20, precio: 1000000 },
  { id: 3, nombre: "proyector", categoria: "video", stock: 7, precio: 3000000 },
  { id: 4, nombre: "pc", categoria: "computación", stock: 5, precio: 2500000 },
  { id: 5, nombre: "impresora", categoria: "computación", stock: 10, precio: 800000 },
];
console.log("Estos son los productos del inventario:");
inventario.forEach((producto) => {
  console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Categoría: ${producto.categoria}, Stock: ${producto.stock}, Precio: ${producto.precio}`);
});
const totalProductos = inventario.reduce((acumulador, producto) => acumulador + producto.stock, 0);
const valorTotal = inventario.reduce((acumulador, producto) => acumulador + producto.stock * producto.precio, 0);
console.log(`Total de productos en inventario: ${totalProductos}`);
console.log(`Valor total del inventario: ${valorTotal}`);