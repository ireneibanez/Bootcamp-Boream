const personajes = [{
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

function ordenarPersonajes(a, b) {
    if (a.daño > b.daño) {
        return -1;
    } else if (a.daño < b.daño) {
        return 1;
    } else {
        if (a.sanacion > b.sanacion) {
            return -1;
        } else if (a.sanacion === b.sanacion) {
            return 0;
        } else {
            return 1;
        }
    }
}

personajes.sort(ordenarPersonajes);

for (let i = 0; i < personajes.length; i++) {
    console.log(`${i +1 } - ${personajes[i].clase}`);
}