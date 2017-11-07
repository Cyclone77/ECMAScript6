//ES6 之前，原型語法:

// var Person = function(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.stringSentence = function() {
//     return "Hello, my name is " + this.name + " and I'm " + this.age;
// }

// console.log(new Person("张三", 50).stringSentence());

//使用 ES6 类(class)* 语法:

class Person {
    constructor({ name, age }) {
        this.name = name;
        this.age = age;
    }

    stringSentence() {
        return "Hello, my name is " + this.name + " and I'm " + this.age;
    }
}

const myPerson = new Person({ name: "Manu", age: 23 });
console.log(myPerson.age) // 23
console.log(myPerson.stringSentence()) // "Hello, my name is Manu and I'm 23

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    getHelloPhrase() {
        return `Hi, I am a ${this.name}`;
    }
}
class Square extends Polygon {
    constructor(length) {
        // 这里，它调用父类的构造函数的 length, 
        // 提供给 Polygon 的 width 和 height。
        super(length, length);
        // 注意: 在派生的类中, 在你可以使用 'this' 之前, 必须先调用 super() 。
        // 忽略这个, 这将导致引用错误。
        this.name = 'Square';
        this.length = length;
    }

    getCustomHelloPhrase() {
        const polygonPhrase = super.getHelloPhrase(); // 通过 super.X() 语法访问父级方法
        return `${polygonPhrase} with a length of ${this.length}`;
    }

    get area() {
        return this.height * this.width;
    }
}

const mySquare = new Square(10);
console.log(mySquare.area) // 100
console.log(mySquare.getHelloPhrase()) // 'Hi, I am a Square' -- Square 继承自 Polygon 并可以访问其方法
console.log(mySquare.getCustomHelloPhrase()) // 'Hi, I am a Square with a length of 10