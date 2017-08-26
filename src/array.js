//array.from 类似的迭代的对象。转化成数组

let json = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

let arr = Array.from(json);
console.log(arr);

let arr1 = Array.of(1, 2, 3);
console.log(arr1);

let arr2 = ["1", "2", "3", "4"];
arr2.fill("22", 1, 3);
for (let v of arr2.entries()) {
    console.log(v);
}
console.log(arr2);

let list = arr2.entries();
console.log(list);