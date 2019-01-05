let cadena = 'JavaScript es un lenguaje de programación que nacio en 1995. JavaScript no tiene que ver en nada con Java';
const busqueda = 'JavaScript'

let pos = cadena.indexOf(busqueda);

while (pos !== -1) {
    cadena = cadena.replace(busqueda, 'JAVASCRIPT');
    pos = cadena.indexOf(busqueda, pos + 1);
}

console.log('Resultado: ', cadena);