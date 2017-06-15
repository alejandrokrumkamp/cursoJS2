function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	var ulLista = document.getElementById(unaLista.nombre);
	agregarNodo('eliminar '+unNombre,'button',ulLista).addEventListener("click", function(){alert("Eliminar lista");});

	//Guardar Localstorage
	return unaLista;
}

function agregarTarea(unNombre,unaDescripcion,unaLista){
	var listaPadre = document.getElementById(unaLista.nombre);
	var unaTarea = new Tarea(unNombre,unaDescripcion);
	agregarNodo(unaTarea.nombre,'li',listaPadre,unaDescripcion);
	agregarNodo('eliminar '+unaTarea.nombre,'button',listaPadre).addEventListener("click", function(){alert("Eliminar tarea");});
	return unaTarea;
}