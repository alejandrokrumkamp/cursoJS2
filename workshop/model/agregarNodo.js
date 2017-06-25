	function agregarNodo(id,etiqueta,padre,texto,appendType){
		var nuevoNodo = document.createElement(etiqueta);
		
		if(!texto){
			var nuevoNodoTexto = document.createTextNode(id);
		} else {
			var nuevoNodoTexto = document.createTextNode(texto);
		}
		nuevoNodo.appendChild(nuevoNodoTexto);

		nuevoNodo.setAttribute("id",id);
		if(appendType === "preAppend")
			padre.insertBefore(nuevoNodo,padre.firstChild);
		else if(appendType === "secondLast")
			padre.insertBefore(nuevoNodo,padre.lastChild);
		else
			padre.appendChild(nuevoNodo);

		return nuevoNodo;
	}