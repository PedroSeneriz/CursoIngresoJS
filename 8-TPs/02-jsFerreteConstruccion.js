/*2.	Para el departamento de Construcción:
A.	mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno 
    rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno 
    circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
    debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let resultado;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    perimetro = (largo*2) + (ancho*2);
    resultado = perimetro*3;


    alert("Se necesitan " + resultado + " metros de alambre");

}
function Circulo () 
{
    let radio;
    let perimetro;
    let cantidadAlambre;

    radio = document.getElementById("txtIdRadio").value;
    radio = parseInt(radio);

    perimetro = 2* Math.PI * radio;
    cantidadAlambre = perimetro * 3;

    alert("Se necesitan " + cantidadAlambre + " metros de alambre");

}
function Materiales () 
{
    let largo;
    let ancho;
    let superficie;
    let bolsasDeCal;
    let bolsasDeCemento;

    largo = document.getElementById("txtIdLargo").value;
    ancho = document.getElementById("txtIdAncho").value;

    largo = parseInt(largo);
    ancho = parseInt(ancho);

    superficie = largo*ancho;

    bolsasDeCemento = superficie*2;
    bolsasDeCal = superficie*3;

    alert("Se necesitan " + bolsasDeCal + " bolsas de cal, y " + bolsasDeCemento + " bolsas de cemento");

}