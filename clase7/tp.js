//"use strict";
var texto =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam.phasellus et scelerisque sapien.donec finibus ac odio ac consectetur.integer ligula eros, posuere ac mauris non, pretium euismod elit.fusce porttitor sem quis neque varius ultricies.sed elementum blandit faucibus.donec nisi est, tempor eu neque eget, tempus dignissim libero.ut porttitor sapien eget placerat tristique.ut lacus sem, pulvinar et accumsan vitae, tristique quis sem.lorem ipsum dolor sit amet, consectetur adipiscing elit.nulla facilisi.suspendisse feugiat tempus lectus, ut venenatis lacus.sed et urna purus.morbi tincidunt volutpat consectetur.praesent vel diam efficitur, rhoncus lacus sit amet, feugiat mi.praesent egestas dignissim bibendum.ut congue porta est non maximus.vivamus quis imperdiet risus.cras vitae feugiat leo.fusce bibendum leo eu nisl cursus, quis tempor mi pulvinar.cras vel semper ante.aliquam tristique mauris sit amet viverra hendrerit.";

function cantidadCaracteres(unString){
	return unString.length;
}

function cantidadParrafos(unString){
	return unString.split(".").length-1;
}

function agregarFormatoOracion(unString) {
	var formato = /(\.)([a-zA-Z])/g;
	return unString.replace(formato,function(a,b){return a[0]+" "+a[1].toUpperCase();})
	//return unString.replace(formato, function(punto, letra){return punto+" "+letra.toUpperCase() } )
}

console.log(cantidadCaracteres(texto));

console.log(cantidadParrafos(texto));

console.log(agregarFormatoOracion(texto));