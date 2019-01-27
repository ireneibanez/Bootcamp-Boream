const array = ['Todos','los','hombres','deben','morir','Jon','Snow','Pero','primero,','viviremos'];

const palabra = prompt('Palabra a buscar:');

const pos = array.indexOf(palabra);

if (pos === -1) {
    console.log(`No se ha encontrado la palabra ${palabra}`);
} else {
    console.log(`La palabra ${palabra} se ha encontrado en la posicion ${pos}`);
}