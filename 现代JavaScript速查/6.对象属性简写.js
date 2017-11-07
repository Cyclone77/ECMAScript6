//将变量分配给一个对象属性时，如果变量名称和属性名称相同，你可以执行以下操作：

const x = 10;
const y = 20;
const myObj = {
    x,
    y
};
console.log(myObj.y) // 20

//计算属性名
const quux = (x = 1) => x;
let obj = {
    foo: "bar",
    ["baz" + quux()]: 42
}

console.log(obj);

//除了属性简写，方法也可以简写。

const o = {
    method() {
        return "Hello!";
    }
};
console.log(o.method());
// 等同于

// const o = {
//     method: function() {
//         return "Hello!";
//     }
// };

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}