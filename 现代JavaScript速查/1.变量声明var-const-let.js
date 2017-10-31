// 1.var

//var 变量声明提升（var hoisting)。
console.log(myVar) // undefined -- 不会报错
var myVar = 2;

var myVar;
console.log(myVar) // undefined -- 不会报错
myVar = 2;

//2. let 

//注意： 从技术上讲，let 和 const 变量声明时也存在提升，但并不代表它们的赋值也会被提升。但由于它被设计成了赋值之前无法使用，所以我们直观感觉上它没有被提升，但其实是存在提升的。

//console.log(myLet, "myLet") // 抛出一个引用错误 ReferenceError !
let myLet = 4;

//3 const

//const 变量并不是不可变，具体来说，如果 const 声明的变量是 object 和 array 类型的值，那它是 可变的 。

//对于对象
const person = {
    name: 'Nick'
};
person.name = 'John' // 这是有效的！person 变量并非完全重新分配，只是值被改变
console.log(person.name); // "John"
//person = "Sandra" // 抛出一个错误， 因为用 const 声明的变量不能被重新分配

//对于数组
const arr = [];
arr.push('John'); // 这是有效的！person 变量并非完全重新分配，只是值被改变
console.log(arr[0]); // "John"
//person = ["Nick"] // 抛出一个错误， 因为用 const 声明的变量不能被重新分配