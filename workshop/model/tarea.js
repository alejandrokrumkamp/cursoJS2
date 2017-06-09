function Tarea(unNombre,unaDescripcion){
	this.descripcion = unaDescripcion;
	this.estado = 'incompleta';
	this.nombre = unNombre;
	
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