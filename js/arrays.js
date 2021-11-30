// Arrays

const numeros = [10, 20, 30, 40]

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];

console.table(meses)

console.log(meses[1]);

console.log(meses.length)

numeros.forEach( numero => {
    console.log(numero)
})

// Metodos
numeros.push(60, 70, 80); // agrega al final

numeros.unshift(-10, -20, -30); // agrega al inicio

console.table(numeros);

meses.pop(); // elimina el ultimo elemento
meses.shift(); // elimina el primer elemento

meses.splice(0, 1);

console.table(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [ ...meses, 'Mayo', 'Junio' ]

console.log(nuevoArreglo)

