var init = function(){
	var naves = [];
	naves = obtenerNaves(naves);
}

var obtenerNaves= function(resultados,pagina,cantidadNavesRestantes) {
	var direccionUrl;
	if(pagina == undefined){
        direccionUrl = 'http://swapi.co/api/starships/';
        pagina = 2;
	} else{
    	direccionUrl = 'http://swapi.co/api/starships/?page='+pagina;
    	pagina++;
    }
    $.ajax({
        url: direccionUrl,
        type: 'get',
        dataType: 'json',
        success: function(data) {
        	var navesResultantes = data.results;
        	if(cantidadNavesRestantes == undefined){
        		cantidadNavesRestantes = data.count;
        	}

        	for(i in navesResultantes){
        		resultados.push(navesResultantes[i]);
        		cantidadNavesRestantes--;
        	}

        	if(cantidadNavesRestantes > 0){
        		obtenerNaves(resultados,pagina,cantidadNavesRestantes);
        	}
        },
        error: function(data) {
            console.log('no llego la data' + data);
        }
    })

    for(i in resultados){
		console.log(resultados[i].name);
	}
};

