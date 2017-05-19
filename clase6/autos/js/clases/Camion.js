function Camion(maximoCarga,patente,peso){
	Vehiculo.call(this, patente, peso);
	this.autosCargados = [];
	this.maximoCarga = maximoCarga;
	this.pesoTransportado = function(){
		var pesoTransportado = 0;
		for(i in this.autosCargados){
			pesoTransportado += this.autosCargados[i].peso;
		}
		return pesoTransportado;
	}
}