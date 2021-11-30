const sumar2 = (n1, n2) => console.log(n1 + n2);

sumar2(5, 10);

const aprendiendo = (tecnologia) => {
    console.log(`Aprendiendo ${tecnologia}`)
}

aprendiendo('JavaScript');

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

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

// forEach

meses.forEach(mes => {
    if(mes == 'Marzo'){
        console.log('Marzo existe')
    }
})

// Includes

let resultado = meses.includes('Marzo');
console.log(resultado)

// Some ideal para array de objetos
resultado = carrito.some(producto => producto.nombre === 'Movil');

// Reduce
resultado = carrito.reduce((total, producto) => {
    return total + producto.precio
}, 0);

console.log(resultado);

// Filter
resultado = carrito.filter(producto => producto.precio > 400)


resultado = carrito.filter(producto => {
    return producto.nombre === 'Movil'
})

console.log(resultado)
