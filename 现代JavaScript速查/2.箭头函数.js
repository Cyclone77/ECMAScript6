//1.简洁性和隐式返回

// function double(x) { return x * 2; } // 传统的方法
// console.log(double(2)) // 4

const double = x => x * 2;
console.log(double(2));

//this的引用
//在箭头函数中， this 意味着封闭执行上下文的 this 值。基本上，使用箭头函数，在函数中调用函数之前，您不需要执行 "that = this" 这样的的技巧。
function myFun() {
    this.myVar = 0;
    setTimeout(() => {
        this.myVar++;
        console.log(this.myVar) // 1
    }, 0);
}

//2.隐式 VS 显式返回
const double2 = (x) => {
    return x * 2; // 这里是显式返回
}

const double3 = (x) => x * 2;
console.log(double3(4));

//隐式返回对象
//如果你想隐式地返回一个 对象(object)，你必须用括号包裹，否则它将与块大括号冲突：
const getPerson = () => ({ name: "jone", age: 33 });
console.log(getPerson());

//函数一个参数 可以省略括号
const func1 = x => x + 1;
console.log(func1(2));

//函数没有参数 必须加上括号
var func2 = () => 2;
console.log(func2());

//this 引用

//一个箭头函数并不会创造一个新的 this，而是从它的外围作用域中抓取的。

function mySettime() {
    this.myvar = 0;
    setTimeout(() => {
        this.myvar++;
        console.log(this.myvar, "this在外层");
    }, 0)
}
mySettime();