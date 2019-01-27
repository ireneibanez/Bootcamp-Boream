let numero = parseInt(prompt('Dame un numero entre 1 y 10'));

while (numero > 10 || numero < 1) {
    numero = parseInt(prompt('Dame un numero entre 1 y 10'));
    console.log(numero);
}