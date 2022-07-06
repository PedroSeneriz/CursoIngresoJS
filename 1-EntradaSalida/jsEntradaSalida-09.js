/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//declaro variables
	let sueldo;
	let aumento;
	let sueldoAumentado;

	//Tomo los valores
	sueldo = document.getElementById("txtIdSueldo").value;

	sueldo = parseInt(sueldo);

	//Calcular el 10% del sueldo
	aumento = (10/100) * sueldo;
	sueldoAumentado = sueldo + aumento;


	//Devolvemos la informacion
	//document.getElementById("txtIdResultado").value = sueldoAumentado;
	alert("Su sueldo es " + sueldo + ". Su aumento es de " + aumento + " Y su sueldo aumentado " + sueldoAumentado);

}
