//"use strict";

/*var suma = function(unNumero,otroNumero){
	var resultado = unNumero + otroNumero
	return resultado
}

var resta = function(unNumero,otroNumero){
	var resultado = unNumero - otroNumero
	return resultado
}

var multiplicacion = function(unNumero,otroNumero){
	var resultado = unNumero * otroNumero
	return resultado
}

var division = function(unNumero,otroNumero){
	var resultado = unNumero / otroNumero
	return resultado
}*/

var esOperador = function(operador) {
	if (operador == "+") {
		return true;
	}
	if (operador == "-") {
		return true;
	}
	if (operador == "*") {
		return true;
	}
	if (operador == "/") {
		return true;
	}	

	return false;
}

	var numeroUnoUsuario = Number(prompt("Ingrese un numero"))
	var operador = prompt("Ingrese un operador")
	var numeroDosUsuario = Number(prompt("Ingrese otro numero"))

do{	
	if(isNaN(numeroUnoUsuario)){
		numeroUnoUsuario = Number(prompt("Ingrese un numero"))
	}
	if(isNaN(numeroDosUsuario)){
		numeroDosUsuario = Number(prompt("Ingrese otro numero"))
	} 
	if(!esOperador(operador)){
		operador = prompt("Ingrese un operador")
	}

}while(isNaN(numeroUnoUsuario) || isNaN(numeroDosUsuario) || !esOperador(operador))




function calculadora(unNumero,otroNumero,operador){
	var resultado = 0;
	if (operador == "+") {
		resultado = unNumero + otroNumero ;
	}
	if (operador == "-") {
		resultado = unNumero - otroNumero ;
	}
	if (operador == "*") {
		resultado = unNumero * otroNumero ;
	}
	if (operador == "/") {
		resultado = unNumero / otroNumero ;
	}	
	console.log(resultado)
	return resultado
}



/*console.log("Suma:",suma(numeroUnoUsuario,numeroDosUsuario))
console.log("Resta:",resta(numeroUnoUsuario,numeroDosUsuario))
console.log("Multiplicacion",multiplicacion(numeroUnoUsuario,numeroDosUsuario))
console.log("Division",division(numeroUnoUsuario,numeroDosUsuario))*/
alert("Calculadora:"+calculadora(numeroUnoUsuario,numeroDosUsuario,operador))