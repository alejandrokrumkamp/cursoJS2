var body = document.getElementsByTagName('body')[0];
var unNombre = 'toDo';
var unaLista = localStorage.getItem(unNombre); 
var unaTarea;

function init(){ 
	//if(!unaLista){
		var todo = crearLista('todo');
		agregarTarea('tarea1','una descripcion',todo);
		agregarTarea('tarea2','otra descripcion',todo);
	//} else {
	//	console.log("ya existe la lista todo en localstorage");
	//}

}