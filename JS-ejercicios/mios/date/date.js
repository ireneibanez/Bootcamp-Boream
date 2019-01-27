
//Ejercicio 1

function validDate (day, month, year) {
    if (month < 0 || month > 11) {
        console.log (false);
        return false;
    }
    if (month == 1 && (day < 1 || day > 29)){
        console.log (false);
        return false;
    }
    if ((month == 3 || month == 5 || month == 8 || month == 10) && (day < 1 || day > 30)){
        console.log (false);
        return false;
    }
    if ((month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) && (day < 1|| day > 31)){
        console.log (false);
        return false;
    }
    else {
        let date = new Date ();
        date.setDate(day);
        date.setMonth(month);
        date.setFullYear(year);
        
        console.log (date);
        return date;
    }
}

console.log(validDate(4,12, 2018));
console.log(validDate(50,12, 2018));

//Ejercicio 2

function validDateFromString(dateString) {
 //separar dd/MM/yyyy => d m y
    let parts = dateString.split('/');
    let day = parseInt(parts[0]);
    let month = parseInt (parts[1]);
    let year = parseInt (parts[2]);

    return validDate (day, month, year);
}

//Ejercicio 3

function diferenciaMinutos (date1, date2){
    
    let date1UTC = Date.UTC(date1)/60000;
    let date2UTC = Date.UTC(date2)/60000;    

    console.log (date1UTC-date2UTC);
    
    return date1UTC-date2UTC;
}
const date1 = new Date(2018, 1, 1, 12, 2);
const date2 = new Date(2018, 1, 1, 10, 2);
const date3 = new Date(2018, 1, 1, 10, 15);

console.log('Fecha 1: ', date1);
console.log('Fecha 2: ', date1);
console.log('Fecha 3: ', date1);
console.log('La diferencia en minutos entre la 1 y la 2 es: ', diferenciaMinutos(date1, date2));
console.log('La diferencia en minutos entre la 1 y la 3 es: ', diferenciaMinutos(date1, date3));



