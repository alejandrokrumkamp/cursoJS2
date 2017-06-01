var body = document.getElementsByTagName('body')[0];
agregarNodoTexto('h1','Peliculas',body);

function agregarNodoTexto(etiqueta,texto,padre){
	var nuevoNodo = document.createElement(etiqueta);
	nuevoNodoTexto = document.createTextNode(texto);
	nuevoNodo.appendChild(nuevoNodoTexto);
	padre.appendChild(nuevoNodo);
}

function Pelicula(nombre,descripcion,imagen){
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.imagen = imagen;
}

function Imdb(){
	this.peliculas = [killBill,django]; 

	this.mostrarPeliculas = function() {
		for (i in this.peliculas){
			agregarNodoTexto('h2',this.peliculas[i].nombre,body);
			nuevaImagen = document.createElement('img');
			nuevaImagen.setAttribute('src',this.peliculas[i].imagen);
			nuevaImagen.setAttribute('width',200);
			nuevaImagen.setAttribute('height',150);
			body.appendChild(nuevaImagen);
			agregarNodoTexto('p',this.peliculas[i].descripcion,body);
		}
	}
}

var killBill = new Pelicula('Kill Bill','Una peli de tarantino','https://sneakernews.com/wp-content/uploads/2012/10/asics-gel-saga-ii-kill-bill-3.jpg');
var django = new Pelicula('Django','Otra peli de tarantino','https://images-na.ssl-images-amazon.com/images/M/MV5BNzU5NzM4OTQxNV5BMl5BanBnXkFtZTgwOTQ5NjU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg');
var imdb = new Imdb;

setTimeout(function(){imdb.mostrarPeliculas()},1000);