var dato1;
var resultadoKelvin, resultadoFahrenheit;
alert('Bienvenido al programa que suma dos datos');
dato1 = parseInt(prompt('Por favor ingrese los grados celsius a convertir: '));

resultadoKelvin = parseFloat(dato1 + 273.15);
resultadoFahrenheit = parseFloat(dato1 * 9/5)+32;


document.write('El dato ingresado es: ' + dato1);
document.write('<br>');
document.write('La temperatura en Kelvin es: ' + resultadoKelvin + ' K');
document.write('<br>');
document.write('La temperatura en Fahrenheit es: ' + resultadoFahrenheit + ' F');
document.write('<br>');