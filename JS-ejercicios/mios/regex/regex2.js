//Ejercicio 2 regex

const regex = /h1/ig;
const text = '<html><body><h1>Soy un titulo</h1><h1 class="test">Y yo otro</h1><p> Yo un parrafo</p></body></html>';

console.log(text.replace(regex, 'h2'));