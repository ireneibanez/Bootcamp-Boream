
//Ejercicio 1

const cadena = 'supercalifragilisticoespialidoso';

for (let i = 0; i < cadena.length; i++) {
    console.log(cadena[i]);
}

//Ejercicio 2

let texto = prompt('Texto donde buscar:');
let busqueda = prompt('Palabra/s a buscar:');

console.log(texto.indexOf(busqueda));

//Ejercicio 3

let cadena2 = 'JavaScript es un lenguaje de programación que nacio en 1995. JavaScript no tiene que ver en nada con Java';
let posicion = cadena2.indexOf('JavaScript');

while (posicion > -1) {
    
    cadena2 = cadena2.replace('JavaScript', 'JAVASCRIPT');
    posicion = cadena2.indexOf('JavaScript', posicion + 1);
}

console.log(cadena2);

