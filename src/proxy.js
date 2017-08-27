let obj = {
    add: function(a, b = 100) {
        console.log(a + b);
    },
    name: 'zhangsan'
}

let pro = new Proxy({
    add: function(a, b = 100) {
        console.log(a + b);
    },
    name: 'lisi',
    age: 19
}, {
    get: function(target, key, property) {
        console.log("进入预处理机制");
        return target[key];
    },
    set: function(target, key, value, receiver) {
        console.log(`seting: ${key} = ${value}`);
        return target[key] = value;
    }
})

console.log(pro.name);
console.log(pro.age);

pro.name = "zhangsan";
console.log(pro.name);

let target = function() {
    return 'wangwu';
};
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}

var app = new Proxy(target, handler);

console.log(app());