/*for(var i=10;i>=2;i--){
	console.log(i)
}*/

/*var i = 10
while(i>=2){
	console.log(i)
	i--;
}*/


/*var color = ""
var intentos = 5
while(color != "verde" && intentos > 0){
	color = prompt("Dame un color (escribe verde para terminar el bucle)","")
	intentos--
}

var color = ""
for(var intentos = 5;color != "verde" && intentos > 0;intentos--){
	color = prompt("Dame un color (escribe verde para terminar el bucle)","")
}*/

var dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
var diaIngresado;
var diaInvalido = false;
var i;
var intentosRestantes = 7;
do{
	diaIngresado = prompt("Ingrese un dia ").toLowerCase()
	i = 0;
	for(i in dias){
		if(dias[i] === diaIngresado)
			break
	}

	if(i<5){
		alert(diaIngresado + " es un dia laboral");
		diaInvalido = false;
	} else {
		if(dias[i] === diaIngresado) {
			alert(diaIngresado + " es un dia es fin de semana ");
			diaInvalido = false;
		} else {
			if(isNaN(diaIngresado)){
				alert(diaIngresado + " no es un dia valido");
				intentosRestantes--;
			} else {
				alert(diaIngresado + " es un numero. Por favor ingrese un dia");
			}
			diaInvalido = true;
		}
	} 
} while(diaInvalido && intentosRestantes > 0)
