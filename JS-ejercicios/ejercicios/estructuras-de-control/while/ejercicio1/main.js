let numero = parseInt(prompt('Dame un numero entre 1 y 10'));

while (numero < 1 || numero > 10) {
    numero = parseInt(prompt('Dame un numero entre 1 y 10'));;
}
console.log('El numero es:', numero);