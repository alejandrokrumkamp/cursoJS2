	function agregarNodo(id,etiqueta,padre,texto){
		var nuevoNodo = document.createElement(etiqueta);
		
		if(!texto){
			var nuevoNodoTexto = document.createTextNode(id);
		} else {
			var nuevoNodoTexto = document.createTextNode(id + ': ' + texto);
		}
		nuevoNodo.appendChild(nuevoNodoTexto);

		nuevoNodo.setAttribute("id",id);
		padre.appendChild(nuevoNodo);

		return nuevoNodo;
	}