const divs = document.querySelectorAll('div');

console.log('Num divs: ' + divs.length);

const elementsClassAnimated = document.querySelectorAll('.animated');

console.log('Elements with animated class: ' + elementsClassAnimated.length);

const link = document.querySelector('#home'); // se puede usar document.getElementById('home')

console.log('href of home link: ' + link.href);

const sections = document.querySelectorAll('section');
const ps = sections[1].querySelectorAll('p');

console.log('Num p in second section: ' + ps.length);

