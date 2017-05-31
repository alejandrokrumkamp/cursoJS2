"use strict";
//sexo edad nombre correr velocidadcorrer apellido nacionalidad altura hablar saludar idioma

var otraPersona = {
	amigos : [],
	sexo : "M",
	edad : 21,
	nombre : "Alejandro",
	apellido : "Krumkamp",
	nacionalidad : "Argentina",
	idioma : ["Español","Inglés"],
	correr : function() {
		console.log("Corriendo...");
	},
	saludar : function() {
		console.log("Saludar...");
	},
	esProfesor : true
};

var persona = {
	amigos : [otraPersona],
	sexo : "M",
	edad : 21,
	nombre : "Alejandro",
	apellido : "Krumkamp",
	nacionalidad : "Argentina",
	idioma : ["Español","Inglés"],
	correr : function() {
		console.log("Corriendo...");
	},
	saludar : function() {
		console.log("Saludar...");
	},
	esProfesor : false
};

function ConstructorPersonas(amigos,sexo,edad,nombre,apellido,nacionalidad,idioma){

	this.amigos = amigos;
	this.sexo = sexo;
	this.edad = edad;
	this.nombre = nombre;
	this.apellido = apellido;
	this.nacionalidad = nacionalidad;
	this.idioma = idioma;

	correr = function(){
		console.log("Corriendo...")
	}

	saludar = function(amigo){
		console.log("Saluda a " + amigo.nombre)
	}
}
