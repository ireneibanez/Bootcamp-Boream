//Ejercicio final 3

const stack = {
    array: [],
    push: function(el) {
        this.array.push(el);
    },
    pop: function() {

        if (this.empty() == true) {
            return null;
        }

        return this.array.pop();
    },
    size: function() {
        return this.array.length;
    },
    empty: function() {
        if (this.size() == 0){
            return true;
        }
        
        return false;
    }
}

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.size() === 3);
console.log(stack.pop() === 3);

stack.push(4);

console.log(stack.empty() === false);
console.log(stack.pop() === 4);
console.log(stack.pop() === 2);
console.log(stack.pop() === 1);
console.log(stack.pop() === null);
console.log(stack.size() === 0);
console.log(stack.empty() === true);