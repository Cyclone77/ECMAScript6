//2.作为属性名的 Symbol

let mySymbol = Symbol();

//第一个写法
let a = {};
a[mySymbol] = "hello";
console.log(a[mySymbol]);

//第二种写法
let b = {
    [mySymbol]: "hello"
};
console.log(b[mySymbol]);
//第三种写法
let c = {};

Object.defineProperty(c, mySymbol, {
    value: "hello"
});

console.log(c[mySymbol]);

//注意，Symbol 值作为对象属性名时，不能用点运算符。
const d = {};

d.mySymbol = "Hello!";
d[mySymbol]; // undefined 因为mySymbol是Symbol类型，并非字符串
d["mySymbol"]; // "Hello!"

//同理，在对象的内部，使用 Symbol 值定义属性时，Symbol 值必须放在方括号之中。
let s = Symbol();

let obj = {
    [s](arg) {
        console.log(arg);
    }
};

obj[s](123);

//Symbol 类型还可以用于定义一组常量，保证这组常量的值都是不相等的。
var log = {};
log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

const COLOR_RED = Symbol();
const COLOR_GREEN = Symbol();

function getComplement(color) {
    switch (color) {
        case COLOR_RED:
            return COLOR_GREEN;
        case COLOR_GREEN:
            return COLOR_RED;
        default:
            throw new Error('Undefined color');
    }
}

console.log(getComplement(COLOR_RED));