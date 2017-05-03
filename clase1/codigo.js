//Pedir nombre mediante prompt y disparar un alert con algun texto mas

var nombre = prompt("Ejercicio 1","Ingrese su nombre por favor")
alert("Su nombre es: " + nombre)

//Pedir un numero y sumarlo a otro que este en una variable
var numero = Number(prompt("Ejercicio 2","Ingrese un numero"))
var otroNumero = 2
alert(numero+otroNumero)

//Pedir un numeor y restarlo a otro que este en una variable
numero = Number(prompt("Ejercicio 3","Ingrese un numero"))
otroNumero = 5
alert(numero-otroNumero)

//Pedir un numero, luego otro y ambos sumarlos
numero = Number(prompt("Ejercicio 4","Ingrese un Numero"))
otroNumero = Number(prompt("Ejercicio 4b", "Ingrese otro Valor"))
alert("La suma de los dos es: " + (numero+otroNumero))