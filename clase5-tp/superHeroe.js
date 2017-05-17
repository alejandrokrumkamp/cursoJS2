function SuperHeroe(nombre,vida) {
	this.nombre = nombre;
	this.vida = vida;
	this.golpear = function(superHeroe,fuerza){
		superHeroe.serGolpeado(fuerza);
	}
	// es accion del juego
	this.serGolpeado = function(fuerza){
		this.vida -= fuerza
	}
}