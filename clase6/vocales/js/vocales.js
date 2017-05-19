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
	return !isNaN(numero)
}

function esVocal(unCaracter){
	var vocales = ['a','e','i','o','u'];
	for(i in vocales){
		if(vocales[i] == unCaracter)
			return true
	}
	return false
}

function pedirStringValido() {
	var stringUsuario = "";
	do{

		stringUsuario = prompt("Por favor ingrese un string").toLowerCase();
		stringUsuario = stringUsuario.replace(/ /g, '');

	}while(stringUsuario.length < 5 || esNumero(stringUsuario));

	return stringUsuario;
}

function primerA(unString){
	return unString.indexOf('a');
}