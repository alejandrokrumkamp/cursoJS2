function numeroRandomHasta(maximo){
	return Math.round(Math.random()*maximo);
}

var unAuto = new Auto("AAA999",numeroRandomHasta(900),2017);
var otroAuto = new Auto("AAA997",numeroRandomHasta(900),2017);
var unCamion = new Camion(900,"AAA998",1200);

unCamion.cargarAuto(unAuto);
unCamion.cargarAuto(otroAuto);