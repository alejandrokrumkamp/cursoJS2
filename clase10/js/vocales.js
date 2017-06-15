function cantidadVocales(unString){
	var cantidadVocales = 0;
	for(i in unString){
		if(esVocal(unString[i]))
			cantidadVocales++;
	}
	return cantidadVocales;
}

function esNumero(unString){
	var numero = Number(unString);
	return !isNaN(numero);
}

function esVocal(unCaracter){
	var vocales = ['a','e','i','o','u'];
	for(i in vocales){
		if(vocales[i] == unCaracter)
			return true
	}
	return false
}

function pedirTextoValido() {
	var stringUsuario = $('#campoTexto').val();
		stringUsuario = stringUsuario.toLowerCase();
		stringUsuario = stringUsuario.replace(/ /g, '');
		if(stringUsuario.length <5)
			alert("La longitud del texto debe ser superior a 5 caracteres");
		else if(esNumero(stringUsuario))
			alert("No se pueden ingresar numeros");

	if(stringUsuario.length < 5 || esNumero(stringUsuario))
		return "";	
	else
		return stringUsuario;

}

function primerA(unString){
	return unString.indexOf('a');
}