

const reproductor = {
    reproducir: (id) => {
        console.log(`Reproduciendo cancion con id: ${id}`)
    },
    pausar: () => {
        console.log('Pausando...');
    },
    crearPlaylist: (nombre) => {
        console.log(`Creando la playlist: ${nombre}`);
    },
    reproducirPlaylist: (nombre) => {
        console.log(`Reproducir la playlist: ${nombre}`);
    }
}

reproductor.borrarCancion = (id) => {
    console.log(`Eliminando la cancion: ${id}`)
}


reproductor.reproducir(52413);
reproductor.pausar();

reproductor.borrarCancion(32)
reproductor.crearPlaylist('HolaMundo');
reproductor.reproducirPlaylist('HolaMundo');