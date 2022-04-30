alert('Bienvenido al programa que muestra años, meses y días');
let dias = 0;
let anos;
let moduloAno;
let semana;
let moduloSemana;

dias = parseInt(prompt('Ingrese la cantidad de días:'));

anos = Math.floor(dias / 365);
moduloAno = Math.floor(dias % 365);
semana = Math.floor(moduloAno / 7);
moduloSemana = Math.floor(moduloAno % 7);

alert('Días ingresados:' + dias);
alert('Años:' + anos);
alert('Semanas:' + semana);
alert('Días:' + moduloSemana);

