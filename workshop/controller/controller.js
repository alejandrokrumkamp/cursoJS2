function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	var nodoUlLista = document.getElementById(unaLista.nombre);
	var botonEliminarLista = agregarNodo('eliminar-'+unNombre,'button',nodoUlLista);
	botonEliminarLista.addEventListener("click",()=>{eliminarLista(nodoUlLista,unaLista);});
	
	var formularioNuevaTarea = agregarNodo('Cargar nueva tarea','form',nodoUlLista,);
	var inputNombreTarea = agregarNodo('nombreTarea','input',formularioNuevaTarea);
	inputNombreTarea.setAttribute("placeholder","Nombre de la tarea");
	var inputDescripcionTarea =agregarNodo('descripcionTarea','input',formularioNuevaTarea);
	inputDescripcionTarea.setAttribute("placeholder","Descripcion de la tarea");
	var botonEnviarNuevaTarea = agregarNodo('enviar','button',formularioNuevaTarea);
	botonEnviarNuevaTarea.setAttribute("type","submit");
	return unaLista;
}

function inicializarTarea(unNombre,unaDescripcion,listaPadre){
	var nuevaTarea = new Tarea(unNombre,unaDescripcion);
	listaPadre.agregarTarea(nuevaTarea);

	var nodoListaPadre = document.getElementById(listaPadre.nombre);
	agregarNodo(nuevaTarea.nombre,'li',nodoListaPadre,unaDescripcion);
	var nodoNuevaTarea = document.getElementById(nuevaTarea.nombre);
	var botonEliminarTarea = agregarNodo('eliminar','button',nodoNuevaTarea);
	var checkbox = agregarNodo('checkbox','input',nodoNuevaTarea,"","preAppend")
	checkbox.setAttribute("type","checkbox");

	botonEliminarTarea.addEventListener("click", function(){eliminarTarea(nodoListaPadre,listaPadre,nodoNuevaTarea,nuevaTarea);});
	checkbox.addEventListener("click", function(){nuevaTarea.toggle();});

	return nuevaTarea;
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