function numeroRandomHasta(maximo){
	return Math.round(Math.random()*maximo);
}


function agregarNodo(id,etiqueta,padre,texto){
	var nuevoNodo = document.createElement(etiqueta);
	
	if(texto.length > 0){
		var nuevoNodoTexto = document.createTextNode(id+": "+texto);
		nuevoNodo.appendChild(nuevoNodoTexto);
	}

	nuevoNodo.setAttribute("id",id);
	padre.appendChild(nuevoNodo);

	return nuevoNodo;
}

var unAuto = new Auto("AAA999",numeroRandomHasta(900),2017);
var otroAuto = new Auto("AAA997",numeroRandomHasta(900),2017);
var unCamion = new Camion(900,"AAA998",1200);

unCamion.cargarAuto(unAuto);
unCamion.cargarAuto(otroAuto);

var body = document.getElementsByTagName('body')[0];
//agregarNodo();
