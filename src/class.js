class Coder {
    name(val) {
        console.log(val);
        return val;
    }
    sikll(val) {
        console.log(this.name(val));
    }
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add() {
        return this.a + this.b;
    }
}

let zs = new Coder();
zs.name('张三');
zs.sikll('李四');

let num = new Coder(1, 2);
console.log(num.add());

class htmler extends Coder {}
let ww = new htmler(2, 3);
ww.name("王五");
console.log(ww.add());