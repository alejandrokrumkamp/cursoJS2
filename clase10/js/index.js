var stringOriginal = "";

		$('#formularioPedirTexto').submit(function(event) {
			stringOriginal = pedirTextoValido();
				if(stringOriginal !== ""){
					var totalVocales = cantidadVocales(stringOriginal).toString();
					var totalLetras = stringOriginal.length.toString();
					var primerAs = primerA(stringOriginal).toString();
					$('#resultados').css('display','inline');
					$('#stringOriginal').text("StringOriginal: "+stringOriginal);
					$('#primeraA').text("primerA: "+primerAs);
					$('#totalVocales').text("totalVocales: "+totalVocales);
					$('#totalLetras').text("totalLetas: "+totalLetras);

					//localStorage.setElement();
				}
				event.preventDefault();
		});
