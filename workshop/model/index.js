var listas = document.getElementsByClassName('lista');
var tareas = document.getElementsByClassName('tarea');


tareas.onclick = function(event) {
	alert('hiciste click sobre una tarea');
	event.preventDefault();
}	

listas.onclick = function(event) {
	alert('hiciste click sobre lista');
	event.preventDefault();
}	