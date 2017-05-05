/*var nombreOriginal = "jose"
var pseudonimoOriginal = "pepe"
var apellidoOriginal = "blayer"
var nombreUsuario = prompt("Ingrese su nombre: ", nombreOriginal).toLowerCase()
var apellidoUsuario = prompt("Ingrese su apellido: ", apellidoOriginal).toLowerCase()
*/
/*nombreUsuario.toLowerCase()
apellidoUsuario.toLowerCase()*/

/*if(nombreUsuario === nombreOriginal || nombreUsuario == pseudonimoOriginal && apellidoUsuario === apellidoOriginal){
	alert("Sos " + nombreOriginal + " " + apellidoOriginal)
} else {
	alert("No sos " + nombreOriginal + " " + apellidoOriginal + ", sos " + nombreUsuario + " " + apellidoUsuario)
}*/

/*switch(nombreUsuario){
	case nombreOriginal:
	case pseudonimoOriginal:
		
		switch(apellidoUsuario){
			case apellidoOriginal:
				alert("Sos " + nombreOriginal + " " + apellidoOriginal)
				break;
			default:
				alert("Sos " + nombreOriginal + ", peeero no sos " + apellidoOriginal)
				break
		}

		break;
	default:	
		alert("No sos " + nombreOriginal + " " + apellidoOriginal + ", sos " + nombreUsuario + " " + apellidoUsuario)
	break;
}*/	

// Hacer buscador

dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]

for(var i=0;i<7;i++){
	if(dias[i] === "martes")
		alert("Hoy es martes y tenes clases")
}