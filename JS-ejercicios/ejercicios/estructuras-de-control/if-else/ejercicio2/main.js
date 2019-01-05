let hora = parseInt(prompt('Dame la hora'));
let minuto = parseInt(prompt('Dame la hora'));


if (hora >= 0 && hora <= 23 && minuto >= 0 && minuto < 60) {
    //incrementamos el minuto
    minuto = minuto + 1;

    let incrementarHora = false;
    if (minuto > 59) {
        minuto = 0;
        // al incrementar el minuto hemos pasado de hora
        incrementarHora = true;
    }
    if (incrementarHora) {
        hora = hora + 1;
        hora = hora % 24;
    }
    console.log(hora + ':' + minuto);
} else {
    console.log('Hora o minuto no valido');
}