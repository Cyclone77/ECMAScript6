'use strict';

function add(a, b = 1) {
    if (a === 0) {
        throw new Error("a不能等于0");
    }
    return a + b;
}

console.log(add(1));
console.log(add.length); //1

var add1 = (a, b = 1) => {
    return a + b;
}
console.log(add1(3));