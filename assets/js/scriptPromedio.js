alert("Bienvenido al programa Promediator")
/* Creo variable veces para alojar la cantidad de números que tendrá miArray
ingresada por el usuario y por la cual se dividirá el total acumulado*/
var veces = prompt("Cuantas cifras quiere promediar?: ");
// Declaro la variable miArray como un array vacía.
var miArray = [];
// Creo la iteración para que el usuario ingrese el número de veces 
// que indíca la variable veces.
for (i = 0; i < veces; i++) {
    // Con push ingreso los números parseados a Int al array miAraay.
    miArray.push(parseInt(prompt('Ingrese el número ' + (i+1))));
    
}
/* En el alert utilicé el método reduce el cual acumula los 
datos de un array y devuelve la suma del total acumulado y luego
divido el total entre la variable veces.*/

alert(
    "El promedio es de su lista es: " + 
    miArray.reduce((acumulador, curr) => acumulador + curr)/veces);


