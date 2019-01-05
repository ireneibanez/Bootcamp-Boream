const anibal = {
    nombre: 'Anibal', 
    clase: 'guerrero', 
    ataque: 9, 
    sanacion: 1, 
    salud: 22,
};

const merlin = {
    nombre: 'Merlin',
    clase: Mago, 
    ataque: 5, 
    sanacion: 5, 
    salud: 20,
};

anibal.informacion = function() {
    console.log('Nombre: ' + this.nombre
                + 'Clase: ' + this.clase
                + 'Ataque: ' + this.ataque
                + 'Sanación: ' + this.sanacion
                + 'Salud: ' +  this.salud);
}


merlin.informacion = function() {
    console.log('Nombre: ' + this.nombre
                + 'Clase: ' + this.clase
                + 'Ataque: ' + this.ataque
                + 'Sanación: ' + this.sanacion
                + 'Salud: ' +  this.salud);
}

anibal.ataca(merlin) = function(merlin) {
    merlin.salud = merlin.salud - this.ataque;
  };
  
merlin.ataca(anibal) = function(anibal) {
    anibal.salud = anibal.salud - this.ataque;
};

merlin.cura = function (){
    this.salud = this.salud + this.sanacion;
};

anibal.cura = function (){
    this.salud= this.salud + this.sanacion;
};

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
