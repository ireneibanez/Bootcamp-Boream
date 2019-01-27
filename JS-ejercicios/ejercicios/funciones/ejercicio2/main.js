function min(num1, num2, num3) {
    if (num1 < num2) {
        if (num1 < num3) {
            return num1;
        } else {
            return num3;
        }
    } else if (num2 < num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log('El min de (3, 5, -1): ', min(3, 5, -1));
console.log('El min de (-50, -49, -1): ', min(-50, -49, -1));