let texto = prompt('Texto donde buscar:');
let busqueda = prompt('Palabra/s a buscar:');

let pos = texto.indexOf(busqueda);

while (pos !== -1) {
    console.log('Encontrada en: ', pos);
    pos = texto.indexOf(busqueda, pos + 1);
}