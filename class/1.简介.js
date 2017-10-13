// 1.简介

/*
es5写法
*/
function OldPoint(x, y) {
    this.x = x;
    this.y = y;
}

OldPoint.prototype.toString = function() {
    return '(' + this.x + ', ' + this.y + ')';
}
OldPoint.prototype.add = function() {
    return this.x + this.y;
}

var p = new OldPoint(22, 33);
console.log(p.toString());
//es5内部方法可以被枚举
console.log(Object.keys(OldPoint.prototype));


/* es6 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

var p = new Point(44, 55);
console.log(p.toString());
console.log(Point == Point.prototype.constructor);
//p的构造函数就是实例Point原型的构造函数，就是Point本身
console.log(p.constructor === Point.prototype.constructor);
console.log(p.constructor === Point);
//Point的构造函数是Function
console.log(Point.constructor);

//类的内部所有定义的方法，都是不可枚举的（non-enumerable）。
console.log(Object.keys(Point));
console.log(Object.getOwnPropertyNames(Point.prototype));

//由于类的方法都定义在prototype对象上面，所以类的新方法可以添加在prototype对象上面。Object.assign方法可以很方便地一次向类添加多个方法。
Object.assign(Point.prototype, {
    toValue() {}
});
console.log(Object.getOwnPropertyNames(Point.prototype));

//类的属性名可以使用表达式
let methodName = 'getArea';

class Square {
    constructor(length) {
        // ...
    }

    [methodName]() {
        // ...
    }
}
console.log(Object.getOwnPropertyNames(Square.prototype));