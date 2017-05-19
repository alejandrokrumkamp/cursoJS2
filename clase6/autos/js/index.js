function numeroRandomHasta(maximo){
	return Math.round(Math.random()*maximo);
}


function cargarAuto(unAuto,unCamion){
	if(unAuto.peso < unCamion.maximoCarga)
		unCamion.autosCargados.push(unAuto);
	else
		console.log("No se pudo cargar el auto " + unAuto.patente + " al camion" + unCamion.patente);
}

var unAuto = new Auto("AAA999",numeroRandomHasta(900),2017);
var otroAuto = new Auto("AAA997",numeroRandomHasta(900),2017);
var unCamion = new Camion(900,"AAA998",1200);

cargarAuto(unAuto,unCamion);
cargarAuto(otroAuto,unCamion);