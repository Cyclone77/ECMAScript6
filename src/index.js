let a = 1;

var b = 123; {
    let b = 234;
}
console.log(a);
console.log(b);

for (let i = 0; i < 5; i++) {
    console.log("循环体内：" + i);
}

const c = "bb";
// bb = "cc";

let [x, y, z] = [1, 2, 4];

let [foo = false] = [true];
console.log(foo);

let xx;
({ xx } = { xx: "sbsc" });

function load(...arg) {
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
}
load(1, 2);

let arr1 = ["aa", "bb", "cc"];
let arr2 = [...arr1];
console.log(arr2);
arr2.push("dd");
console.log(arr2);
console.log(arr1);

function init(first, ...arg) {
    console.log(first);
    for (let v of arg) {
        console.log(v);
    }
}
init(0, 1, 2, 3);