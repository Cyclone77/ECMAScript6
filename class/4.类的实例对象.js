//4.类的实例对象

//用new来调用class
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

// 报错
// var point = Point(2, 3);

// 正确
var point = new Point(2, 3);

console.log(point.hasOwnProperty('x'));
console.log(point.hasOwnProperty('toString'));

console.log(point.__proto__.hasOwnProperty('toString'));

var p1 = new Point(2, 3);
var p2 = new Point(3, 2);
//p1和p2都是Point的实例，它们的原型都是Point.prototype，所以__proto__属性是相等的。
console.log('---------------');
console.log(p1.__proto__ === p2.__proto__);
console.log(p1.constructor === p1.constructor);
console.log(p1.constructor === Point);

//可以通过实例的__proto__属性为“类”添加方法。
//使用实例的__proto__属性改写原型，必须相当谨慎，不推荐使用，因为这会改变“类”的原始定义，影响到所有实例。
p1.__proto__.printName = function() { return 'Oops' };

console.log(p1.printName()); // "Oops"
console.log(p2.printName()); // "Oops"

var p3 = new Point(4, 2);
console.log(p3.printName()); // "Oops"