//var nombreCompletoUsuario = prompt("Ingrese su nombre").replace(/ /g,'')

var longitudNombre = function(unNombreCompleto){
	var resultado = unNombreCompleto.length;
	return resultado
}

//alert(longitudNombre(nombreCompletoUsuario));

var form1 = document.querySelector("input");
var texto = form1.textContent;
//form1.addEventListener("click",longitudNombre(texto));