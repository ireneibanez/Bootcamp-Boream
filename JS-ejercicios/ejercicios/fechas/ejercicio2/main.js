function validaFecha(dia, mes, anio) {
    if (anio < 0) {
        return false;
    }
    if (mes < 0 || mes > 11) {
        return false;
    }
    if (dia < 1 || dia > 31) {
        return false;
    }
    //comprobamos si el año no es bisiesto y nos estan pasando el 29 de Febrero
    if (!(anio % 4 === 0 && anio % 100 !== 0) && mes === 1 && dia === 29) {
        return false;
    }

    //comprobamos que no nos pasen dia 31 en meses de 30 o 28
    if ((mes === 1 || mes === 3 || mes === 5 || mes === 8 || mes === 10 ) && dia > 30) {
        return false;
    }

    return new Date(anio, mes, dia);
}

function validaFechaString(fecha) {
    const partes = fecha.split('/');

    return validaFecha(parseInt(partes[0]), parseInt(partes[1]), parseInt(partes[2]));
}

console.log(validaFechaString('31/3/2020') === false);

console.log(validaFechaString('29/1/2100') === false);

console.log(validaFechaString('31/0/2018') !== false);