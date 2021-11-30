// POO

// Object Literal
const producto = {
    nombre: 'Tablet',
    precio: 500
}

//Object constructor

function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

const producto2 = new Producto('Monitor Curvo 49"', 800);
const producto3 = new Producto('Portatil', 550);

console.log(producto2)

console.log(producto3);
