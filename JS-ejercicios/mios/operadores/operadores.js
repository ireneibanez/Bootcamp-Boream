const myArray = [true, 'Curso', 65, 4, 'javaScript', false];

//1. De los dos strings, determinar cual es mayor

let result = myArray[1] > myArray[4];
console.log (result); //Si devuelve true, 'Curso'será mayor que 'javaScript', si devuelve false, 'javaScript' será mayor que 'Curso'


//2. Realizar sobre los dos elementos numericos las 6 operaciones matemáticas.

let suma = myArray[2] + myArray[3];
console.log (suma);

let resta = myArray[2] - myArray[3];
console.log (resta);

let multiplicacion = myArray[2] * myArray[3];
console.log (multiplicacion);

let division= myArray[2] / myArray[3];
console.log (division);

let potencia = myArray[2] ** myArray[3];
console.log (potencia);

let modulo = myArray[2] % myArray[3];
console.log (modulo);

//3. Usando los dos elementos booleanos, encontrar que operador boolean devolveria true al aplicarlo a esos dos valores y cual false.

const bool1 = myArray[0];
const bool2 = myArray[5];
console.log (bool1 && bool2); //Devuelve false
console.log (bool1 || bool2); //Devuelve true