const mes = prompt('Dame el nombre del mes');

switch(mes) {
    case 'Enero':
        console.log('Tiene 31');
        break;
    case 'Febrero':
        console.log('Tiene 28');
        break;
    case 'Marzo':
        console.log('Tiene 31');
        break;
    case 'Abril':
        console.log('Tiene 30');
        break;
    case 'Mayo':
        console.log('Tiene 31');
        break;
    case 'Junio':
        console.log('Tiene 30');
        break;
    case 'Julio':
        console.log('Tiene 31');
        break;
    case 'Agosto':
        console.log('Tiene 31');
        break;
    case 'Septiembre':
        console.log('Tiene 30');
        break;
    case 'Octubre':
        console.log('Tiene 31');
        break;
    case 'Noviembre':
        console.log('Tiene 30');
        break;
    case 'Diciembre':
        console.log('Tiene 31');
        break;
    default:
        console.log('No existe el mes');
}