//解构 (destructuring) 是通过从存储在对象或数组中的数据中提取一些值来创建新变量的简便方法。

const person = {
    firstName: "Nick",
    lastName: "Anderson",
    age: 35,
    sex: "M"
}

// //传统获取值
// const first = person.firstName;
// const age = person.age;
// const city = person.city || "Paris";

//解构
let { firstName: first, age, city = "Paris" } = person; // 就是这么简单！

console.log(age) // 35 -- 一个新变量 age 被创建，并且其值等同于 person.age
console.log(first) // "Nick" -- 一个新变量 first 被创建，并且其值等同于 person.firstName A new variable first is created and is equal to person.firstName
    //console.log(firstName) // Undefined -- person.firstName 虽然存在，但是新变量名为 first
console.log(city) // "Paris" -- 一个新变量 city 被创建，并且因为 person.city 为 undefined(未定义) ，所以 city 将等同于默认值也就是 "Paris"。

//传统使用对象属性 不使用解构
function joinFirstLastName(person) {
    const firstName = person.firstName;
    const lastName = person.lastName;
    return firstName + '-' + lastName;
}

console.log(joinFirstLastName(person)); // "Nick-Anderson"

//在解构对象参数 person 这个参数时，我们可以得到一个更简洁的函数：

var joinFirstLastNameNew = ({ firstName, lastName }) => {
    return firstName + '-' + lastName;
}

console.log(joinFirstLastNameNew(person)); // "Nick-Anderson"

//数组的解构

const myArray = ["a", "b", "c"];

// //不适用解构
// const x = myArray[0];
// const y = myArray[1];

//使用解构
const [x, y] = myArray;

console.log(x) // "a"
console.log(y) // "b"