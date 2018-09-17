const socket = io();

let params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre y sala son necesarios');
}

let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};


socket.on('mensaje',(mensaje)=>{renderizarMensaje(mensaje)})


socket.on('connect', () =>{
    console.log('Conectado al servidor');

    socket.emit('nuevoUsuario', usuario, (usuarios)=>{

    let usuariosConectados = usuarios.filter(usuarios => usuarios.nombre != usuario.nombre);

       renderizarUsuarios(usuariosConectados)});});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');

});


socket.on('listaDePersonas', (personas)=>{

    let usuariosConectados = personas.filter(usuarios => usuarios.nombre != usuario.nombre);

    renderizarUsuarios(usuariosConectados);
});


// Mensajes privados
socket.on('mensajePrivado', (mensaje)=>{

    console.log('Mensaje Privado:', mensaje);

});
