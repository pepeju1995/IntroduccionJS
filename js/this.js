// This

const reserva = {
    nombre: 'Jose Juan',
    apellido: 'Perez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y tiene que pagar ${this.total}`);
    }
}

reserva.informacion();