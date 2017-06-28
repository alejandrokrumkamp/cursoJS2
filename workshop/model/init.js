var body = document.getElementsByTagName('body')[0];
var unNombre = 'toDo';
var unaListaLS = JSON.parse(localStorage.getItem(unNombre)); 
var unaTarea;

function init(){ 
	if(!unaListaLS){
		var toDo = crearLista(unNombre);
		inicializarTarea('tarea1','una descripcion',toDo);
		inicializarTarea('tarea2','otra descripcion',toDo);
	} else {
		var listaPrecargada = crearLista(unaListaLS.nombre);
		for(i in unaListaLS.tareas){
			var tareaPrecargada = unaListaLS.tareas[i];
			console.log(tareaPrecargada);
			console.log(tareaPrecargada.estado);
			inicializarTarea(tareaPrecargada.nombre,tareaPrecargada.descripcion,listaPrecargada,tareaPrecargada.estado);
		}
		console.log("ya existe la lista todo en localstorage");
	}

}