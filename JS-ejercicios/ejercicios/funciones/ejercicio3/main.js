function area(radio) {
    return Math.PI * Math.pow(radio, 2);
}

function perimetro(radio) {
    return 2 * Math.PI * radio;
}

const radio = parseFloat(prompt('Introduce el radio:'));

console.log('El perimetro es:', perimetro(radio));
console.log('El area es:', area(radio));