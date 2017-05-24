//"use strict";

function juego(){
	var instancia;

	function iniciar(){

		var hulk = new SuperHeroe("Hulk",1000);
		var thor = new SuperHeroe("Thor",1000);
		var jugadores = [hulk,thor];
		var turnoActual = Math.round(Math.random());

		// Metodo jugar() es privado
		function jugar(){
			while(hulk.vida > 0 && thor.vida > 0){
				var jugadorActual = jugadores[turnoActual%2];
				turnoActual++;
				var victimaGolpe = jugadores[(turnoActual%2)];
				
				var numeroRandom = Math.floor(1000*Math.random());
				console.log("Vida de " + victimaGolpe.nombre + " antes del golpe: "+Math.max(victimaGolpe.vida,0));
				console.log(jugadorActual.nombre +" le va a pegar a " + victimaGolpe.nombre + " en "+ numeroRandom + " puntos de fuerza");

				jugadorActual.golpear(victimaGolpe,numeroRandom);
				
				console.log("Vida de " + victimaGolpe.nombre + " despues del golpe: "+Math.max(victimaGolpe.vida,0));
				console.log("---------");
			}
		}
		return jugar();
	}

	return {
		crearInstancia: ()=> {
			if(!instancia) {
				instancia = iniciar();
				return instancia ? instancia: iniciar();
			}
		}
	}
}

crearJuego = ( ()=> {
	juego().crearInstancia();
})();