const carrito = [
    { nombre: 'Monitor 20"', precio: 500},
    { nombre: 'Television 50"', precio: 700},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 150},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Bocina', precio: 20},
    { nombre: 'Movil', precio: 300},
    { nombre: 'Portatil', precio: 1500},
];

// ForEach

carrito.forEach(producto => {
    console.log(producto.nombre)
})

// Map

console.log('MAP')
carrito.map(producto => {
    console.log(producto.nombre)
})