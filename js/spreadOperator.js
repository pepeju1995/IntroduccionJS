const producto = {
    nombre: 'Monitor 20"',
    precio: 300,
    disponible: true
}

const medida = {
    peso: '1kg',
    medida: '1m'
}

const nuevoProducto = { ...producto, ...medida}

console.log(nuevoProducto)