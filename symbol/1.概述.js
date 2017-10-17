//1.概念

//Symbol 表示独一无二的值

let s1 = Symbol("foo");
let s2 = Symbol("baz");

console.log(s1 == s2);
console.log(s1.toString());
console.log(Symbol() == Symbol());

const obj = {
    toString() {
        return "abc";
    }
}

//如果 Symbol 的参数是一个对象，就会调用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值。
const sym = Symbol(obj);
console.log(sym.toString());

//Symbol 值不能与其他类型的值进行运算，会报错。

//"your symbol is " + sym;

//Symbol 值也可以转为布尔值，但是不能转为数值。
console.log(Boolean(Symbol()));