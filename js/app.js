
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

console.log('hols');

function agregar(){
    const inputNombre=document.getElementById("nombre");
    const inputApellido= document.getElementById("apellido");
    const inputEdad=document.getElementById("edad");
    const div= document.getElementById("estudiantes");
    //let ejemplo= document.querySelector("#nombre");//1elemento
    //let ejemplo2 = document.querySelectorAll(".demo");
    //let ejemplo3 = document.querySelector(".nav ul li h1");jquery
    let persona1= new Persona();
    persona1.nombre=inputNombre.value;
    persona1.apellido=inputApellido.value;
    persona1.edad=inputEdad.value;
    console.log(persona1);
    div.innerHTML+="<div class='agregado'>"+persona1.nombre+" " +persona1.apellido+"</div>"
    //Limpiar
    inputNombre.value="";
    inputApellido.value="";
    inputEdad.value="";
}




//REST
function Persona(){//funcion constructora
    //self = this
    this.nombre="";//atributo-campo
    this.apellido="";
    this.edad=0;
    this.direccion="";//[]-> muchas direcciones
    this.saludar= function(){//metodo()
        alert("hola "+ this.nombre);
    }
    this.nombreCompleto=function(){
        return this.nombre + " "+ this.apellido;
    }

}

/*Persona.prototype.saludar=function(){solo para agregar funcionalidades nuevas
    alert("Hola "+ this.apellido);trim string quita los espacios en blanco
}*/
//Persona.prototype.nacionalidad="";
/*let persona1= new Persona();//molde-estructura
persona1.nombre="Jose";
persona1.apellido="Quezada";
persona1.edad=20;
persona1.nacionalidad="chilena";//sin adultera obj Persona
persona1.saludar();
let persona2= new Persona();
console.log(persona1)
console.log(persona2);
/*
for(let i =0; i<numero; i++){
}
let i=0;
while(i<numero){
    i++;
}
*/
