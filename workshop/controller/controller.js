function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	//Guardar Localstorage
	return unaLista;
}

function agregarTarea(unNombre,unaDescripcion,unaLista){
	var listaPadre = document.getElementById(unaLista.nombre);
	var unaTarea = new Tarea(unNombre,unaDescripcion);
	agregarNodo(unaTarea.nombre,'li',listaPadre,unaDescripcion);
	return unaTarea;
}