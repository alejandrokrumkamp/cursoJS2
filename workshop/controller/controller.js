function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	var nodoUlLista = document.getElementById(unaLista.nombre);
	var botonEliminarLista = agregarNodo('eliminar-'+unNombre,'button',nodoUlLista);
	botonEliminarLista.addEventListener("click", function(){eliminarLista(nodoUlLista,unaLista);});
	
	var formularioNuevaTarea = agregarNodo('Cargar nueva tarea en ' + unaLista.nombre,'form',nodoUlLista,);
	var inputNombreTarea = agregarNodo('nombreTarea-'+unaLista.nombre,'input',formularioNuevaTarea);
	inputNombreTarea.setAttribute("placeholder","Nombre de la tarea");
	var inputDescripcionTarea =agregarNodo('descripcionTarea-'+unaLista.nombre,'input',formularioNuevaTarea);
	inputDescripcionTarea.setAttribute("placeholder","Descripcion de la tarea");
	var botonEnviarNuevaTarea = agregarNodo('enviar','button',formularioNuevaTarea);
	botonEnviarNuevaTarea.setAttribute("type","submit");

	formularioNuevaTarea.addEventListener("submit",function(event){
		event.preventDefault();
		var valorNombreNuevaLista = document.getElementById('nombreTarea-'+unaLista.nombre).value;
		var valorDescripcionNuevaLista = document.getElementById('descripcionTarea-'+unaLista.nombre).value;
		inicializarTarea(valorNombreNuevaLista,valorDescripcionNuevaLista,unaLista);
	});
	return unaLista;
}

function inicializarTarea(unNombre,unaDescripcion,listaPadre){
	var nuevaTarea = new Tarea(unNombre,unaDescripcion);
	listaPadre.agregarTarea(nuevaTarea);

	var nodoListaPadre = document.getElementById(listaPadre.nombre);
	agregarNodo(nuevaTarea.nombre,'li',nodoListaPadre);
	var nodoNuevaTarea = document.getElementById(nuevaTarea.nombre);
	var nodoDescripcionTarea = agregarNodo(nuevaTarea.nombre+'-descripcion','p',nodoNuevaTarea,unaDescripcion);
	var botonEliminarTarea = agregarNodo('eliminar','button',nodoNuevaTarea);
	var checkbox = agregarNodo('checkbox','input',nodoNuevaTarea,"","preAppend")
	checkbox.setAttribute("type","checkbox");

	botonEliminarTarea.addEventListener("click", function(){eliminarTarea(nodoListaPadre,listaPadre,nodoNuevaTarea,nuevaTarea);});
	checkbox.addEventListener("click", function(){nuevaTarea.toggle();});

	nodoDescripcionTarea.addEventListener("click",function(){editarDescripcion(nodoDescripcionTarea,nuevaTarea,nodoNuevaTarea)});

	return nuevaTarea;
}

function editarDescripcion(nodoUnaDescripcion,unaTarea,nodoUnaTarea){
	var descripcionTarea = document.getElementById(unaTarea.nombre+'-descripcion');
	var valorDescripcionTarea = descripcionTarea.value;
	nodoUnaTarea.removeChild(descripcionTarea);
	var formularioEditarTarea = agregarNodo('formEditar-' + unaTarea.nombre,'form',nodoUnaTarea,"","secondLast");
	var inputEditarTarea = agregarNodo('inputEditar-'+unaTarea.nombre,'input',formularioEditarTarea);
	var botonEnviarNuevaTarea = agregarNodo('editar','button',formularioEditarTarea);
	botonEnviarNuevaTarea.setAttribute("type","submit");

}

function eliminarTarea(nodoListaPadre,listaPadre,nodoUnaTarea,unaTarea){
	listaPadre.eliminarTarea(unaTarea)
	nodoListaPadre.removeChild(nodoUnaTarea);
	delete unaTarea.regex;
}

function eliminarLista(nodoUnaLista,unaLista){
	body.removeChild(nodoUnaLista);
	delete unaLista.regex;
}