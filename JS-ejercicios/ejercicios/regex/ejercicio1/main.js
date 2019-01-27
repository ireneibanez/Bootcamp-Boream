const phoneRegex = /[679]{1}[0-9]{8}$/;

if (phoneRegex.test('654545454')) {
    console.log('Es un teléfono valido');
}