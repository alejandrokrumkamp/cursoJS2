	var body = document.getElementsByTagName('body')[0];
	var formulario = document.getElementsByTagName('form')[0];
	var stringOriginal = "";

		formulario.onsubmit = function(event) {
			stringOriginal = pedirTextoValido();
				if(stringOriginal !== ""){
					var resultados = agregarNodo("resultados","ul",body,"");
					var totalVocales = cantidadVocales(stringOriginal).toString();
					var totalLetras = stringOriginal.length.toString();
					var primerAs = primerA(stringOriginal).toString();
					
					agregarNodo("stringOriginal","h1",body,stringOriginal);
					agregarNodo("primerA","li",resultados,primerAs);
					agregarNodo("totalVocales","li",resultados,totalVocales);
					agregarNodo("totalLetras","li",resultados,totalLetras);

					localStorage.setElement();
				}
				event.preventDefault();
		}


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
