const myArray = [true, 'Curso', 65, 4, 'javaScript', false];

// 1. De los dos strings que hay, determinar cual es el mayor.
const mayorCurso = myArray[1] > myArray[4];
console.log('Es mayor "Curso" que javaScript: ', mayorCurso );

// 2. Realizar sobre los dos elementos numericos las 6 operaciones matemáticas
const num1 = myArray[2];
const num2 = myArray[3];

console.log('Suma: ', num1 + num2);
console.log('Resta: ', num1 - num2);
console.log('Multiplicacion: ', num1 * num2);
console.log('Division: ', num1 / num2);
console.log('Potencia: ', num1 ** num2);
console.log('Modulo: ', num1 % num2);

// 3. Usando los dos elementos booleanos, encontrar que operador boolean devolveria true al aplicarlo a esos dos valores y cual false.
const boolean1 = myArray[0];
const boolean2 = myArray[5];

console.log('Devuelve true: ', boolean1 || boolean2);
console.log('Devuelve false: ', boolean1 && boolean2);