 class Usuarios{

   constructor(){

     this.personas = []}


   agregarPersona(id,nombre,sala){

     let persona = {nombre,
                    id,
                    sala};

     this.personas.push(persona);

     return this.getPersonasPorSala(sala)}


   getPersona(id){

    let persona = this.personas.filter(persona=>persona.id === id)[0];

    console.log(persona)

    return persona}


   borrarPersona(id){

    let personaBorrada = this.getPersona(id);

    this.personas = this.personas.filter(personas=>personas.id != id);

    return personaBorrada;}


  getPersonas(){

    return this.personas}



  getPersonasPorSala(sala){

  let personasEnSala = this.personas.filter(personas=>personas.sala === sala);

  return personasEnSala;}

}


 module.exports = {Usuarios};
