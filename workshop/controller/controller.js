function crearLista(unNombre){
	var unaLista = new Lista(unNombre);

	agregarNodo(unNombre,'ul',body);
	var nodoUlLista = document.getElementById(unaLista.nombre);
	/*var botonEliminarLista = agregarNodo('eliminar-'+unNombre,'button',nodoUlLista);
	botonEliminarLista.addEventListener("click", function(){eliminarLista(nodoUlLista,unaLista);});*/
	
	var formularioNuevaTarea = agregarNodo('nuevaTarea','form',nodoUlLista,'Cargar nueva tarea en '+ unaLista.nombre);
	var inputNombreTarea = agregarNodo('nombreTarea-'+unaLista.nombre,'input',formularioNuevaTarea);
	inputNombreTarea.setAttribute("placeholder","Nombre de la tarea");
	inputNombreTarea.setAttribute("type","text");
	var inputDescripcionTarea =agregarNodo('descripcionTarea-'+unaLista.nombre,'input',formularioNuevaTarea);
	inputDescripcionTarea.setAttribute("placeholder","Descripcion de la tarea");
	inputDescripcionTarea.setAttribute("type","text");
	var botonEnviarNuevaTarea = agregarNodo('enviar','button',formularioNuevaTarea,"Agregar nueva tarea");
	botonEnviarNuevaTarea.setAttribute("type","submit");

	formularioNuevaTarea.addEventListener("submit",function(event){
		event.preventDefault();
		var valorNombreNuevaLista = document.getElementById('nombreTarea-'+unaLista.nombre).value;
		var valorDescripcionNuevaLista = document.getElementById('descripcionTarea-'+unaLista.nombre).value;
		inicializarTarea(valorNombreNuevaLista,valorDescripcionNuevaLista,unaLista);
	});

	return unaLista;
}

function inicializarTarea(unNombre,unaDescripcion,listaPadre,estado){
	var nuevaTarea;

	nuevaTarea = new Tarea(unNombre,unaDescripcion);
	listaPadre.agregarTarea(nuevaTarea);
	if(estado != undefined)
		nuevaTarea.estado = estado;

	var nodoListaPadre = document.getElementById(listaPadre.nombre);
	agregarNodo(nuevaTarea.nombre,'li',nodoListaPadre);
	var nodoNuevaTarea = document.getElementById(nuevaTarea.nombre);
	var nodoDescripcionTarea = agregarNodo(nuevaTarea.nombre+'-descripcion','p',nodoNuevaTarea,unaDescripcion);
	var botonEliminarTarea = agregarNodo('eliminar','button',nodoNuevaTarea);
	var checkbox = agregarNodo('checkbox','input',nodoNuevaTarea,"","preAppend")
	checkbox.setAttribute("type","checkbox");

	if(nuevaTarea.estado == "completada")
		checkbox.setAttribute("checked","checked");
	else
		checkbox.removeAttribute("checked");

	botonEliminarTarea.addEventListener("click", function(){
		eliminarTarea(nodoListaPadre,listaPadre,nodoNuevaTarea,nuevaTarea);
		localStorage.clear();
		localStorage.setItem(listaPadre.nombre, JSON.stringify(listaPadre));
	});
	
	checkbox.addEventListener("click", function(){
		nuevaTarea.toggle();
		localStorage.clear();
		localStorage.setItem(listaPadre.nombre, JSON.stringify(listaPadre));
	});

	nodoDescripcionTarea.addEventListener("click",function(){
		activarEdicionDescripcion(nodoDescripcionTarea,nuevaTarea,nodoNuevaTarea,listaPadre);
		localStorage.clear();
		localStorage.setItem(listaPadre.nombre, JSON.stringify(listaPadre));
	});

	localStorage.clear();
	localStorage.setItem(listaPadre.nombre, JSON.stringify(listaPadre));
	
	return nuevaTarea;
}

function activarEdicionDescripcion(nodoUnaDescripcion,unaTarea,nodoUnaTarea,listaPadre){
	var descripcionTarea = document.getElementById(unaTarea.nombre+'-descripcion');
	var valorDescripcionTarea = descripcionTarea.innerText;
	nodoUnaTarea.removeChild(descripcionTarea);
	var formularioEditarTarea = agregarNodo('formEditar-' + unaTarea.nombre,'form',nodoUnaTarea,"","secondLast");
	var inputEditarTarea = agregarNodo('inputEditar-'+unaTarea.nombre,'input',formularioEditarTarea);
	inputEditarTarea.setAttribute("type","text");
	inputEditarTarea.value = valorDescripcionTarea;
	var botonEnviarNuevaTarea = agregarNodo('editar','button',formularioEditarTarea);
	botonEnviarNuevaTarea.setAttribute("type","submit");

	formularioEditarTarea.addEventListener("submit",function(event){
		event.preventDefault();
		valorDescripcionTarea = inputEditarTarea.value;
		var nodoDescripcionTarea = agregarNodo(unaTarea.nombre+'-descripcion','p',nodoUnaTarea,valorDescripcionTarea,"secondLast");
		nodoDescripcionTarea.addEventListener("click",function(){activarEdicionDescripcion(nodoDescripcionTarea,unaTarea,nodoUnaTarea)});
		nodoUnaTarea.removeChild(formularioEditarTarea);

		for(i in listaPadre.tareas){
			var tareaCargada = listaPadre.tareas[i];
			if(tareaCargada.nombre == unaTarea.nombre)
				tareaCargada.descripcion = valorDescripcionTarea;
		}

		console.log("Lista Padre:");
		console.log(listaPadre.tareas[0]);
		localStorage.clear();
		localStorage.setItem(listaPadre.nombre, JSON.stringify(listaPadre));
	});

}

function eliminarTarea(nodoListaPadre,listaPadre,nodoUnaTarea,unaTarea){
	listaPadre.eliminarTarea(unaTarea)
	nodoListaPadre.removeChild(nodoUnaTarea);
	
}

function eliminarLista(nodoUnaLista,unaLista){
	body.removeChild(nodoUnaLista);
}