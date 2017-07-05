var err;
var init = function(){
	err = autenticar();
}

var base64 = btoa('3ffc97d75530438787a25da412904ff1'+':'+'a15de3c19e2d4044952e26f5fb9f1bdc');

var autenticar= function() {
    function callback(){
        console.log("hi callback");
    }
    $.ajax({
        type:"POST",
        dataType: "json",
        url: 'https://platzi-music-api.now.sh/search?q=pepe&type=artist',
        success: function(data) {
        	console.log("Autenticado");
        },
        error: function(data) {
            console.log('no llego la data ' + data.status);
            err = data;
        }
    })
    
};

function jsonCallback(json) {
    console.log("ARGG");
}

