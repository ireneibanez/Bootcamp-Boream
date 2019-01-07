//Número de divs

const divs = document.getElementsByTagName('div');
console.log(divs);
console.log (divs.length);

//Número de elementos con la clase animated

const animated = document.querySelectorAll('.animated'); 
console.log (animated);
console.log (animated.length);

//Dirección web donde enlaza el enlace con id 'home'

const enlace = document.getElementById('home');
console.log(enlace.href);

//Número de párrafos (p) en la segunda seccion (section)

const section = document.getElementsByTagName('section');
const parrafos = section[1].getElementsByTagName('p');
console.log (parrafos.length);