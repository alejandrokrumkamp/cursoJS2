var stringOriginal = pedirTextoValido();
var totalVocales = cantidadVocales(stringOriginal).toString();
var totalLetras = stringOriginal.length.toString();
var primerA = primerA(stringOriginal).toString();

function agregarNodo(id,etiqueta,padre,texto){
	var nuevoNodo = document.createElement(etiqueta);
	
	if(texto.length > 0){
		var nuevoNodoTexto = document.createTextNode(id+": "+texto);
		nuevoNodo.appendChild(nuevoNodoTexto);
	}

	nuevoNodo.setAttribute("id",id);
	padre.appendChild(nuevoNodo);

	return nuevoNodo;
}

var body = document.getElementsByTagName('body')[0];
agregarNodo("stringOriginal","h1",body,stringOriginal);

var resultados = agregarNodo("resultados","ul",body,"");
agregarNodo("primerA","li",resultados,primerA);
agregarNodo("totalVocales","li",resultados,totalVocales);
agregarNodo("totalLetras","li",resultados,totalLetras);
