//Ejercicio 1

function par(num) {
    if (num % 2 == 0){
        return true;
    }
    else {
        return false;
    }
}

let num = 8;
console.log(par(num)); //true por ser par

let resultado = par(5);
console.log(resultado); //false por no ser par


//Ejercicio 2

function trio(num1, num2, num3) {
    if (num1 < num2 && num1 < num3) {
        console.log (num1);
        return num1;
    }
    else if (num2 < num1 && num2 < num3){
        console.log (num2);
        return num2;  
    }
    else {
        console.log (num3);
        return num3;  
    }

}

console.log (trio(3,5,8)); //return 3


//Ejercicio 3

const radio = parseFloat(prompt('Introduce el radio:'));

function perimetro(radio) {
    let result = (2*(Math.PI)*radio);
    console.log (result);
    return result;
}


function area(radio) {
    let result = Math.PI * Math.pow(radio,2);
    console.log (result);
    return result;
}

console.log (perimetro(radio));
console.log (area(radio));