function Tarea(unaDescripcion,unNombre,unaLista){
	this.descripcion = unaDescripcion;
	this.estado = 'incompleta';
	this.lista = unaLista;
	this.nombre = unNombre;
	this.nodo = agregarNodo(this.nombre,'li',this.lista,unNombre);

	this.completar = function(){
		this.estado = 'completada';
	}

	this.deshacer = function(){
		this.estado = 'incompleta';
	}

	this.actualizarDatos = function(unaDescripcion,unNombre){
		this.descripcion = unaDescripcion;
		this.nombre = unNombre;
	}
}