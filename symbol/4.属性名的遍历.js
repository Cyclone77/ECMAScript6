//Symbol 作为属性名，该属性不会出现在for...in、for...of循环中，也不会被Object.keys()、Object.getOwnPropertyNames()、JSON.stringify()返回。但是，它也不是私有属性，有一个Object.getOwnPropertySymbols方法，可以获取指定对象的所有 Symbol 属性名。

var obj = {};
let a = Symbol('a');
let b = Symbol('b');

obj[a] = 'hello';
obj[b] = 'world';

const objectSymbolKey = Object.getOwnPropertySymbols(obj);
console.log(objectSymbolKey);


// for in  Object.getOwnPropertyNames 对比
var obj = {};

let foo = Symbol("foo");

Object.defineProperty(obj, foo, {
    value: "foobar",
});

for (let i in obj) {
    console.log(i); // 无输出
}

Object.getOwnPropertyNames(obj)
    // []

Object.getOwnPropertySymbols(obj)
    // [Symbol(foo)]
console.log(obj[foo]);