const ventasProductos = [
  { producto: "parlante", cantidad: 7, precio: 400, fecha: "1 de enero" },
  { producto: "tv", cantidad: 2, precio: 1000, fecha: "2 de enero" },
  { producto: "proyector", cantidad: 1, precio: 3000, fecha: "3 de enero" },
  { producto: "pc", cantidad: 1, precio: 2500, fecha: "4 de enero" },
  { producto: "impresora", cantidad: 1, precio: 8000, fecha: "5 de enero" },
];

const totalIngresos = ventasProductos.reduce((acumulador, venta) =>  acumulador + venta.cantidad * venta.precio, 0);
const mayorCantidad = ventasProductos.reduce((max, venta) => venta.cantidad > max.cantidad ? venta : max, ventasProductos[0]);
const productoMasVendido = ventasProductos.filter(venta => venta.producto === mayorCantidad.producto);
const promedioPorTransaccion = ventasProductos.map(ventaProducto => (ventaProducto.cantidad * ventaProducto.precio)/ventaProducto.cantidad);
console.log("Total de ingresos:", totalIngresos);
console.log("Producto más vendido por cantidad:", productoMasVendido);
console.log("Promedio de venta por cada transacción:", promedioPorTransaccion);
