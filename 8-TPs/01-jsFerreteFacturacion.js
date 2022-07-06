/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //declaro las variables
	let producto1;
    let producto2;
    let producto3;
    let resultado;

    //tomo los valores por id
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    //parseo y calculo
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = producto1+producto2+producto3;


    //muestro el resultado
    alert("La suma de los productos es: " + resultado);
    
}
function Promedio () 
{
    //declaro las variables
	let producto1;
    let producto2;
    let producto3;
    let resultado;

    //tomo los valores por id
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    //parseo y calculo
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = (producto1+producto2+producto3) / 3;


    //muestro el resultado
    alert("El promedio de los productos es de: " + resultado);
	
}
function PrecioFinal () 
{
    //declaro las variables
	let producto1;
    let producto2;
    let producto3;
    let IVA;
    let resultado;
    let resultadoConIva;

    //tomo los valores por id
    producto1 = document.getElementById("txtIdPrecioUno").value;
    producto2 = document.getElementById("txtIdPrecioDos").value;
    producto3 = document.getElementById("txtIdPrecioTres").value;

    //parseo y calculo
    producto1 = parseInt(producto1);
    producto2 = parseInt(producto2);
    producto3 = parseInt(producto3);

    resultado = producto1+producto2+producto3;
    IVA = (resultado*21)/100;

    resultadoConIva= resultado+IVA;
    

    //muestro el resultado
    alert("El precio de los productos mas iva es de: " + resultadoConIva);
}