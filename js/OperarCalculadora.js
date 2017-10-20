/*
	Nombre del fichero: OperarCalculadora.js
	Autor:Juan Carlos Pastor Regueras
	Fecha de creacion: 20/10/2017
	Fecha de modificacion:20/10/2017
	
	Funciones creadas:
	mostrarVisor(valor): Escribe el numero del boton pulsado en el campo del visor
*/

	var valorVisor = '';
	function mostrarVisor(valor){
		
		valorVisor += valor;
		document.getElementById("visor").value = valorVisor;
	}

	function borrarVisor(){
		document.getElementById("visor").value = "0";
		valorVisor="";
	}


