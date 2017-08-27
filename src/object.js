let name = "zhangsan";
let age = 19;
let obj = {
    name,
    age
};
console.log(obj);

var key = "skill";
let obj1 = {
    [key]: "web"
}
console.log(obj1);

console.log(Object.assign(obj, obj1));