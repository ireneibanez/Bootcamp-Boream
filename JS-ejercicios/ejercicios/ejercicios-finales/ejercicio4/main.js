
const listTasks = [];

function showMenu() {
    console.log(`
Aplication de tareas. Menu:

1. Lista de tareas
2. Añadir nueva tarea
3. Terminar tarea
4. Eliminar tarea
5. Salir
    `);
    let option;
    while (!option) {
        const prompt = window.prompt('Introduzca la opción:');
        const regex = /^[12345]$/;
        if (regex.test(prompt)) {
            option = parseInt(prompt);
        }
    }
    return option;
}

function showListTasks() {
    console.log('Tasks');
    for (let i = 0; i < listTasks.length; i++) {
        console.log(`${i+1} - ${listTasks[i].description} ${listTasks[i].done ? '(Done)' : ''}`);
    }
}

function addNew() {
    console.log('Add task');
    let text;
    while (!text) {
        text = window.prompt('Introduzca la descripción:');
    }
    listTasks.push({
        description: text,
        done: false
    });
}
function markDoneTask() {
    showListTasks();
    let task;
    while (!task) {
        const prompt = window.prompt('Introduzca el número de tarea:');
        const regex = /^\d$/;
        if (regex.test(prompt)) {
            task = parseInt(prompt);
            if (task < 1 || task > listTasks.length) {
                task = null;
            }
        }
    }
    listTasks[task - 1].done = true;
}
function removeTask() {
    showListTasks();
    let task;
    while (!task) {
        const prompt = window.prompt('Introduzca el número de tarea:');
        const regex = /^\d$/;
        if (regex.test(prompt)) {
            task = parseInt(prompt);
            if (task < 1 || task > listTasks.length) {
                task = null;
            }
        }
    }
    listTasks.splice(task - 1 , 1);
}


function executeOption(option) {
    switch(option) {
        case 1: 
            showListTasks();
            break;
        case 2: 
            addNew();
            break;
        case 3:
            markDoneTask();
            break;
        case 4:
            removeTask();
            break;
        case 5:
            // exit
            break;
        default:
            console.log('Opcion no encontrada');
    }
}

let option;
while (option !== 5) {
    option = showMenu();
    executeOption(option);
}