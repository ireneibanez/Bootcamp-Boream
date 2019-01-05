
const concepts = [];

function getDescription() {
    let description = '';
    while (!description) {
        description = window.prompt('Introduce descripción:');
    }
    return description;
}

function getBase() {
    let base = '';
    const regex = /^\d+(\.\d+)?$/;
    while (!base) {
        base = window.prompt('Introduce base:');
        // check if it's a number
        if (!regex.test(base)) {
            // invalid number
            base = null;
            continue;
        } 
        base = parseFloat(base);
    }
    return base;
}

function addMore() {
    return window.confirm('¿Quieres introducir más conceptos?');
}

function showData() {
    let totalBase = 0;

    console.log('Bill:');
    console.log(`
Concepts: 
#######################################
    `)
    for (let i = 0; i < concepts.length; i++) {
        totalBase += concepts[i].base;
        console.log(`${concepts[i].description} --- ${concepts[i].base}`);
    }
    console.log(`
#######################################
    `)
    console.log(`
Total: 
    Base: ${totalBase}
    IVA (21%): ${totalBase * 0.21}
    Total: ${totalBase * 1.21}
    `);
    
}

let more = true;

while (more) {
    const concept = {};
    concept.description = getDescription();
    concept.base = getBase();
    concepts.push(concept);
    more = addMore();

}


showData();