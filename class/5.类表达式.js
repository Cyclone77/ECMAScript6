//5.Class表达式
//与函数一样，类也可以使用表达式的形式定义。

const MyClass = class Me {
    getClassName() {
        return Me.name;
    }
}

let inst = new MyClass();
console.log(inst.getClassName());

//采用 Class 表达式，可以写出立即执行的 Class。

let person = new class {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}('张三');

person.sayName();


new Foo();
class Foo {}