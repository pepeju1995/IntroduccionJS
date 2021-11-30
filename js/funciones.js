// Declaracion de funcion

function sumar(numero1 = 0, numero2 = 0) { // parametros
    console.log(numero1 + numero2);
}

sumar(10, 10); // argumentos

// Expresion de la funcion
const sumar2 = (numero1, numero2) => {
    return numero1 + numero2;
}

let suma = sumar2(3, 5);
console.log(suma);

// IIFE

(function() {
    console.log('Esto es una funcion');
})();

