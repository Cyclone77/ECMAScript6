//7.私有方法
//ES6不提供私有方法

class Widget {
    //共有方法
    foo(baz) {
        this._bar(baz);
    }

    //（命名化）私有方法
    _bar(baz) {
        return this.snaf = baz;
    }
}