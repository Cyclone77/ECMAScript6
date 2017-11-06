//ES2015 已经引入了展开操作符 ... ，可以将可迭代多个元素（如数组）展开到适合的位置。

const arr1 = ["a", "b", "c"];
const arr2 = [...arr1, "d", "e", "f"]; // ["a", "b", "c", "d", "e", "f"]

console.log(arr2);

function myFunc(x, y, ...params) {
    console.log(x);
    console.log(y);
    console.log(params)
}

myFunc.apply(null, arr2); //["a", "b", "c", "d", "e", "f"]

// const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }


//函数剩余参数
function createStudent(firstName, lastName, ...grades) {
    // firstName = "Nick"
    // lastName = "Anderson"
    // [10, 12, 6] -- "..." 将传递所有剩余参数，并创建一个包含它们的 "grades" 数组变量

    const avgGrade = grades.reduce((acc, curr) => acc + curr, 0) / grades.length; // 根据 grade 计算平均成绩

    return {
        firstName: firstName,
        lastName: lastName,
        grades: grades,
        avgGrade: avgGrade
    }
}

const student = createStudent("Nick", "Anderson", 10, 12, 6);
console.log(student);

//对象属性展开
// const myObj = { x: 1, y: 2, a: 3, b: 4 };
// const { x, y, ...z } = myObj; // 这里是对象被解构
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }