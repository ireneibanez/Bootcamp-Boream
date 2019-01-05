function diferencia(date1, date2) {
    const ms1 = date1.getTime();
    const ms2 = date2.getTime();

    const diferencia = ms1 - ms2;

    return diferencia / (60 * 1000);

}


const date1 = new Date(2018, 1, 1, 12, 2);
const date2 = new Date(2018, 1, 1, 10, 2);
const date3 = new Date(2018, 1, 1, 10, 15);

console.log('Fecha 1: ', date1);
console.log('Fecha 2: ', date1);
console.log('Fecha 3: ', date1);
console.log('La diferencia en minutos entre la 1 y la 2 es: ', diferencia(date1, date2));
console.log('La diferencia en minutos entre la 1 y la 3 es: ', diferencia(date1, date3));