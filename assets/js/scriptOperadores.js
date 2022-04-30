var dato1;
var dato2;
var resultadoSuma, resultadoResta, resultadoMultiplicacion,
resultadoDivision, resultadoModulo;
alert('Bienvenido al programa que suma dos datos');
dato1 = parseInt(prompt('Por favor ingrese el Primer dato: '));
dato2 = parseInt(prompt('Por favor ingrese el Segundo dato: '));
resultadoSuma = dato1+dato2;
resultadoResta = dato1-dato2;
resultadoMultiplicacion = dato1*dato2;
resultadoDivision = dato1/dato2;
resultadoModulo = dato1+dato2;

document.write('Sus datos ingresados son: ' + dato1 + ' y ' + dato2);
document.write('<br>');
document.write('El resultado de la suma: ' + resultadoSuma);
document.write('<br>');
document.write('El resultado de la resta: ' + resultadoResta);
document.write('<br>');
document.write('El resultado de la multiplicación: ' + resultadoMultiplicacion);
document.write('<br>');
document.write('El resultado de la división: ' + resultadoDivision);
document.write('<br>');
document.write('El resultado del módulo: ' + resultadoModulo);


