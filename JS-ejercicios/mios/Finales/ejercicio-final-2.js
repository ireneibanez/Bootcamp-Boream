//Ejercicio FInal 2

function calculaIVA(iva, base) {
    const resultado = base * iva / 100;
    return resultado;
}

let conceptos = [];
let sumBase = 0;
let numElementos = window.prompt('Introduzca número de conceptos para la factura');

for(let i = 0; i < numElementos; i++)
{
    let concepto = {};

    concepto.desc = window.prompt('Introduzca la descripción del concepto');
    concepto.base = window.prompt('Introduzca la base imponible del concepto');
    sumBase = sumBase + concepto.base;
    conceptos.push(concepto);

}

let iva = calculaIVA(21, sumBase);

console.log('Conceptos');

for(let i = 0; i < conceptos.length; i++) {
    console.log(`${conceptos[i].desc}: ${conceptos[i].base}`);
}

console.log(`Base imponible total: ${sumBase} - IVA: ${iva}`);
