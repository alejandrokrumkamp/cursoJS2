var body = document.getElementsByTagName('body')[0];
agregarNodoTexto('h1','Peliculas',body);

function agregarNodoTexto(etiqueta,texto,padre){
	var nuevoNodo = document.createElement(etiqueta);
	nuevoNodoTexto = document.createTextNode(texto);
	nuevoNodo.appendChild(nuevoNodoTexto);
	padre.appendChild(nuevoNodo);
}

function Pelicula(id,nombre,descripcion,imagen,director){
	this.id = id;
	this.nombre = nombre;
	this.descripcion = descripcion;
	this.imagen = imagen;
	this.actores = [];
	this.director = director

	this.agregarActor = function(nuevoActor) {
		this.actores.push(nuevoActor);
	}
}

function Imdb(){
	this.peliculas = [killBill,django]; 

	this.mostrarPeliculas = function() {
		for (i in this.peliculas){
			agregarNodoTexto('h2',this.peliculas[i].nombre,body);
			agregarNodoTexto('p',"Descripcion: "+this.peliculas[i].descripcion,body);
			nuevaImagen = document.createElement('img');
			nuevaImagen.setAttribute('src',this.peliculas[i].imagen);
			nuevaImagen.setAttribute('width',200);
			nuevaImagen.setAttribute('height',150);
			body.appendChild(nuevaImagen);
			agregarNodoTexto('p',"Director: "+this.peliculas[i].director,body);
			agregarNodoTexto('p',"Actores: "+this.peliculas[i].actores,body);
		}
	}
}

var killBill = new Pelicula(1,'Kill Bill','Una peli de tarantino','https://sneakernews.com/wp-content/uploads/2012/10/asics-gel-saga-ii-kill-bill-3.jpg','Tarantino');
killBill.agregarActor("Uma Thurman");

var django = new Pelicula(2,'Django','Otra peli de tarantino','https://images-na.ssl-images-amazon.com/images/M/MV5BNzU5NzM4OTQxNV5BMl5BanBnXkFtZTgwOTQ5NjU0NzE@._V1_CR0,60,640,360_AL_UX477_CR0,0,477,268_AL_.jpg','Tarantino');
django.agregarActor("Samuel Jackson");
var imdb = new Imdb;

imdb.mostrarPeliculas();