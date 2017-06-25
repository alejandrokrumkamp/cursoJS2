var body = document.getElementsByTagName('body')[0];
var unNombre = 'toDo';
var unaLista = JSON.parse(localStorage.getItem(unNombre)); 
var unaTarea;

function init(){ 
	if(!unaLista){
		var toDo = crearLista(unNombre);
		inicializarTarea('tarea1','una descripcion',toDo);
		inicializarTarea('tarea2','otra descripcion',toDo);
	} else {
		var listaPrecargada = crearLista(unaLista.nombre,unaLista);
		for(i in unaLista.tareas){
			var tareaPrecargada = unaLista.tareas[i];
			inicializarTarea(tareaPrecargada.nombre,tareaPrecargada.descripcion,unaLista,true,tareaPrecargada.estado);
		}
		console.log("ya existe la lista todo en localstorage");
	}

}