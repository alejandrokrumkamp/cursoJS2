function Lista(unNombre){
	this.elementos = [];
	this.nombre = unNombre;
	
	this.agregarTarea = function(tarea){
		this.elementos.add(tarea);
	}

	this.eliminarTarea = function(tarea){
		var indice = this.elementos.indexOf(tarea);
		if(indice > -1)
			this.elementos.splice(indice,1);
	}

	this.guardar = function(){
		localstorage.setItem(this.nombre,this);
	}
}