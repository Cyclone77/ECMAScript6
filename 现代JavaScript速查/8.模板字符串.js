//模板字符串是一种单行和多行字符串的 表达式插值 (expression interpolation)。

//换句话说，它是一种新的字符串语法，你可以更方便地在 JavaScript 表达式中使用 (例如变量)。

const name = "Nick";
let a = 1,
    b = 2;
console.log(`Hello ${name}, the following expression is equal to four : ${a+b}`);

// Hello Nick, the following expression is equal to four: 4


//标签模版
//“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。
console.log `123`;
// 等同于
console.log(123);