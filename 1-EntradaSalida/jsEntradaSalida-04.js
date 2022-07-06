/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let nombre;
	nombre = prompt("Ingrese su nombre ");

	document.getElementById("txtIdNombre").value = nombre;

}


/*
Acceder al valor de una caja de texto
document.getElementById("txtIdNombre").value;

Pedirle un dato al usuario
prompt("Ingrese su nombre");

Mostrarle un dato al usuario
alert("Esto funiona de maravilla" );

*/

