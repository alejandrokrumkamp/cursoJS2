function Camion(maximoCarga,patente,peso){
	Vehiculo.call(this, patente, peso);
	this.autosCargados = [];
	this.maximoCarga = maximoCarga;

	this.pesoTransportado = ()=> {
		var pesoTransportado = 0;
		for(i in this.autosCargados){
			pesoTransportado += this.autosCargados[i].peso;
		}
		return pesoTransportado;
	}
	this.cargarAuto = (unAuto) => {
		if(unAuto.peso < this.maximoCarga)
			this.autosCargados.push(unAuto);
		else
			console.log("No se pudo cargar el auto " + unAuto.patente + " al camion" + this.patente);
	}
	
}