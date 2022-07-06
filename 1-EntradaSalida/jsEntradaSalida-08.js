/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaro las variables
	let dividendo;
	let divisor;
	let resultado;
	let resto;

	//Tomo los valores por ID
	dividendo = document.getElementById("txtIdNumeroDividendo").value;
	divisor = document.getElementById("txtIdNumeroDivisor").value;


	//Proceso
	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);

	resultado =  dividendo / divisor;
	resultado = parseInt(resultado);

	resto =  dividendo % divisor;


	//Devuelvo la informacion
	alert("El resultado es " + resultado + " Y el resto es " + resto);
}
