const producto = {
    nombreProducto: 'Monitor 20"',
    precio: 300,
    disponible: true
}

//Forma Antigua
const precioProducto = producto.precio;
const nombre = producto.nombreProducto;

// Destructurin de Objetos
const {precio, nombreProducto} = producto;


console.log(precio, nombreProducto)