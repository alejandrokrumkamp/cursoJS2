var body = document.getElementsByTagName('body')[0];
var unNombre = 'toDo';
var unaLista = localStorage.getItem(unNombre); 
var unaTarea;

function init(){ 
	//if(!unaLista){
		unaLista = new Lista(unNombre);
		nodoLista = agregarNodo(unNombre,'ul',body,unNombre);

		unaTarea = new Tarea('desc','nomb',nodoLista);
		nodoTarea = agregarNodo(unNombre,'li',unaLista,unNombre);
	//} else {
	//	console.log("ya existe la lista todo en localstorage");
	//}

}