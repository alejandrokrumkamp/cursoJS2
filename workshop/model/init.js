var body = document.getElementsByTagName('body')[0];
var unNombre = 'toDo';
var unaLista = localStorage.getItem(unNombre); 
var unaTarea;

function init(){ 
	//if(!unaLista){
		var toDo = crearLista(unNombre);
		agregarTarea('tarea1','una descripcion',toDo);
		agregarTarea('tarea2','otra descripcion',toDo);
	//} else {
	//	console.log("ya existe la lista todo en localstorage");
	//}

}