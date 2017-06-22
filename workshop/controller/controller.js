function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	var ulLista = document.getElementById(unaLista.nombre);
	var nodoUlLista = agregarNodo('eliminar-'+unNombre,'button',ulLista);
	nodoUlLista.addEventListener("click",()=>{alert("Eliminar "+ unNombre);});
	return unaLista;
}

function agregarTarea(unNombre,unaDescripcion,listaPadre){
	var nuevaTarea = new Tarea(unNombre,unaDescripcion);
	listaPadre.agregarTarea(nuevaTarea);

	var nodoListaPadre = document.getElementById(listaPadre.nombre);
	agregarNodo(nuevaTarea.nombre,'li',nodoListaPadre,unaDescripcion);
	var nodoNuevaTarea = document.getElementById(nuevaTarea.nombre);
	var botonEliminarTarea = agregarNodo('eliminar','button',nodoNuevaTarea);
	var checkbox = agregarNodo('checkbox','input',nodoNuevaTarea,"","preAppend")
	checkbox.setAttribute("type","checkbox");

	botonEliminarTarea.addEventListener("click", function(){eliminarTarea(nodoListaPadre,listaPadre,nodoNuevaTarea,nuevaTarea);});
	checkbox.addEventListener("click", function(){toggleTarea(nodoListaPadre,listaPadre,nodoNuevaTarea);});

	return nuevaTarea;
}

function eliminarTarea(nodoListaPadre,listaPadre,nodoUnaTarea,unaTarea){
	listaPadre.eliminarTarea(unaTarea)
	nodoListaPadre.removeChild(nodoUnaTarea);
}