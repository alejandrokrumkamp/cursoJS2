function crearLista(unNombre){
	var unaLista = new Lista(unNombre);
	agregarNodo(unNombre,'ul',body);
	var ulLista = document.getElementById(unaLista.nombre);
	agregarNodo('eliminar '+unNombre,'button',ulLista).addEventListener("click",()=>{alert("Eliminar "+ unNombre);});

	//Guardar Localstorage
	return unaLista;
}

function agregarTarea(unNombre,unaDescripcion,unaLista){
	var listaPadre = document.getElementById(unaLista.nombre);
	var unaTarea = new Tarea(unNombre,unaDescripcion);
	agregarNodo(unaTarea.nombre,'li',listaPadre,unaDescripcion);
	var nuevaTarea = document.getElementById(unaTarea.nombre);
	agregarNodo('eliminar '+unaTarea.nombre,'button',nuevaTarea).addEventListener("click", ()=>{alert("Eliminar " +unaTarea.nombre);});
	var checkbox = agregarNodo('eliminar '+unaTarea.nombre,'input',nuevaTarea,"","preAppend")
	checkbox.setAttribute("type","checkbox");
	return unaTarea;
}