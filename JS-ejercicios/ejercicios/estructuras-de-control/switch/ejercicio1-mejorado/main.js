const mes = prompt('Dame el nombre del mes');

switch(mes) {
    case 'Enero':
    case 'Marzo':
    case 'Mayo':
    case 'Julio':
    case 'Agosto':
    case 'Octubre':
    case 'Diciembre':
        console.log('Tiene 31');
        break;
    case 'Febrero':
        console.log('Tiene 28');
        break;
    case 'Abril':
    case 'Junio':
    case 'Septiembre':
    case 'Noviembre':
        console.log('Tiene 30');
        break;
    default:
        console.log('No existe el mes');
}