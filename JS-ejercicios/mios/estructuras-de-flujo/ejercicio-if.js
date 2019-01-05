//Ejercicio 1

const num1 = parseInt(prompt('Numero 1:'));
const num2 = parseInt(prompt('Numero 2:'));

const result = num1 - num2;

if (result < 0) {

    console.log ('El número obtenido es menor que cero');
}

//Ejercicio 2

let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame el minuto'));

if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto < 60) {
    
    minuto++;

    if (minuto == 60) {
        minuto = 0;
        hora++;
    }

    if (hora == 24) {
        hora = 0;
    }

    console.log (hora + ':' + minuto);
} else {
    console.log ('La hora o los minutos introducidos no son correctos');
}
