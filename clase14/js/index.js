var init = function(){
	var naves = [];
	obtenerNaves(naves);
}

var obtenerNaves= function(resultados,pagina,cantidadNavesRestantes) {
	var direccionUrl;
	if(pagina == undefined){
        direccionUrl = 'http://swapi.co/api/starships/';
        pagina = 2;
	} else{
    	direccionUrl = 'http://swapi.co/api/starships/'+pagina+'/';
    	pagina++;
    }
    $.ajax({
        url: direccionUrl,
        type: 'get',
        dataType: 'json',
        success: function(data) {
        	var navesResultantes = data.results;
        	var cantidadNavesTotales = data.count;
        	var cantidadNavesRestantes = navesResultantes.length;

        	for(i in navesResultantes){
        		resultados.push(navesResultantes[i]);
        		cantidadNavesRestantes--;
        	}

        	if(cantidadNavesRestantes > 0){
        		obtenerNaves= function(resultados,pagina,cantidadNavesRestantes)
        	}
        },
        error: function(data) {
            console.log('no llego la data' + data);
        }
    })
};

