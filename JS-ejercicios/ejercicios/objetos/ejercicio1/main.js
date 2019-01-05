const anibal = {
    nombre: 'Anibal',
    clase: 'Guerrero',
    ataque: 9,
    salud: 22,
    sanacion: 1,
    ataca: function(enemigo) {
        enemigo.salud = enemigo.salud - this.ataque;
    },
    cura: function() {
        this.salud += this.sanacion;
    },
    informacion: function() {
        console.log('Nombre: ' + this.nombre
                    + ' Clase: ' + this.clase
                    + ' Ataque: ' + this.ataque
                    + ' Sanacion: ' + this.sanacion
                    + ' Salud: ' + this.salud);
        if (this.salud <= 0) {
            console.log('Esta muerto!!!!');
        }
    }
};
const merlin = {
    nombre: 'Merlin',
    clase: 'Mago',
    ataque: 5,
    salud: 20,
    sanacion: 5,
    ataca: function(enemigo) {
        enemigo.salud = enemigo.salud - this.ataque;
    },
    cura: function() {
        this.salud += this.sanacion;
    },
    informacion: function() {
        console.log('Nombre: ' + this.nombre
                    + ' Clase: ' + this.clase
                    + ' Ataque: ' + this.ataque
                    + ' Sanacion: ' + this.sanacion
                    + ' Salud: ' + this.salud);
        if (this.salud <= 0) {
            console.log('Esta muerto!!!!');
        }
    }
};


anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);
merlin.ataca(anibal);

anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);
merlin.cura();

anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);

anibal.informacion();
merlin.informacion();