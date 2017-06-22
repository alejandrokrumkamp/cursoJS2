	function agregarNodo(id,etiqueta,padre,texto,appendType){
		var nuevoNodo = document.createElement(etiqueta);
		
		if(!texto){
			var nuevoNodoTexto = document.createTextNode(id);
		} else {
			var nuevoNodoTexto = document.createTextNode(id + ': ' + texto);
		}
		nuevoNodo.appendChild(nuevoNodoTexto);

		nuevoNodo.setAttribute("id",id);
		if(appendType === "preAppend")
			padre.insertBefore(nuevoNodo,padre.firstChild);
		else
			padre.appendChild(nuevoNodo);

		return nuevoNodo;
	}