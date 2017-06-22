function Lista(unNombre){
	this.tareas = [];
	this.nombre = unNombre;
	
	this.agregarTarea = function(tarea){
		this.tareas.push(tarea);
	}

	this.eliminarTarea = function(tarea){
		var indice = this.tareas.indexOf(tarea);
		if(indice > -1)
			this.tareas.splice(indice,1);
	}

	this.guardar = function(){
		//localstorage.setItem(this.nombre,this);
	}
}