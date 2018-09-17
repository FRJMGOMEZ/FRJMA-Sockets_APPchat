

let searchParams = new URLSearchParams(window.location.search);
let sala = searchParams.get('sala');
let nombre = searchParams.get('sala');

let divUsuarios = $('#divUsuarios');
let formEnviar =  $('#formEnviar');
let txtMensaje = $('#txtMensaje');

let divChatbox = $('#divChatbox');

const renderizarUsuarios = (personas)=>{

let html = ''
html+= '<li>'
html+= `<a href="javascript:void(0)" class="active"> Chat de <span> ${sala}</span></a>`
html+= '</li>'


for(let i=0 ; i<personas.length;i++){

  html+= '<li>';
  html+= `<a data-id="${personas[i].id}" href="javascript:void(0)"><img src="assets/images/users/5.jpg" alt="user-img" class="img-circle"> <span> ${personas[i].nombre}<small class="text-success">online</small></span></a>`;
  html+= '</li>';}

divUsuarios.html(html);}


const renderizarMensaje = (mensaje,yo) => {

let html= '';

var fecha = new Date(mensaje.fecha);

var hora = `${fecha.getHours()},${fecha.getMinutes()},${fecha.getSeconds()}`;

if(yo){

html+=`<li class="reverse">`;
html+=`<div class="chat-content">`;
html+=`<h5>${mensaje.nombre}</h5>`;
html+=`<div class="box bg-light-inverse">${mensaje.mensaje}</div>`;
html+=`</div>`;
html+=`<div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /></div>`;
html+=`<div class="chat-time">${hora}</div>`;
html+=`</li>`;

}

else{

html+=    '<li>'
html+=        '<div class="chat-img"><img src="assets/images/users/1.jpg" alt="user" /></div>'
html+=        '<div class="chat-content">'
html+=            `<h5>${mensaje.nombre}</h5>`
html+=           `<div class="box bg-light-info">${mensaje.mensaje}</div>`
html+=       '</div>'
html+=        `<div class="chat-time">${hora}</div>`
html+=    '</li>'
}

divChatbox.append(html)}


divUsuarios.on('click','a',function(){


  let id = $(this).data('id');

  if(id){

  console.log(id)};})


formEnviar.on('submit',function(e){

  e.preventDefault();

  if(txtMensaje.val().trim().length === 0){return};

    socket.emit('mensaje',{mensaje:txtMensaje.val()},(respuesta)=>{txtMensaje.val('').focus();renderizarMensaje(respuesta,'yo')})

})
