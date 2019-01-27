//Ejercicio 1

const array = ['Todos','los','hombres','deben','morir','Jon','Snow','Pero','primero,','viviremos'];
const palabra = prompt('Palabra a buscar:');

const pos = array.indexOf (palabra);

if (pos != -1) {
    console.log (`La palabra ${palabra} se encuentra en la posición ${pos} del array`);
} else {
    console.log (`La palabra ${palabra} no se encuentra en el array`);
}

//Ejercicio 2

const array = [1, '2', 3, '4', 5];
let array_inv = [];

for (let i=0; i<array.length; i++) {
    let elemento = array.pop();
    array_inv.push(elemento);
}

console.log (array_inv);

//Ejercicio 3

let personajes = [{
    clase: 'Sacerdote',
    daño: 100,
    sanacion: 1200    
}, {
    clase: 'Guerrero',
    daño: 900,
    sanacion: 0
}, {
    clase: 'Mago',
    daño: 700,
    sanacion: 100
}, {
    clase: 'Monje',
    daño: 100,
    sanacion: 1000
}, {
    clase: 'Caballero de la muerte',
    daño: 1000,
    sanacion: 10
}];

function sortDesc(a, b) {
if (a.daño > b.daño) {
    return 1;
} 
else if (a.daño < b.daño){
    return -1;
}
else {
    if (a.sanacion > b.sanacion){
        return 1;
    }
    else if (a.sanacion < b.sanacion){
        return -1;
    }
    else {
        return 0;
    }
}

}

personajes.sort(sortDesc);

alert (personajes.clase);