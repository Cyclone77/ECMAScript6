// Array.prototype.map() 接受一组数组，在其元素上执行某些操作，并返回具有转换后的元素数组。
// Array.prototype.filter() 接受一组数组，依照元素本身决定是否保留，并返回一个仅包含保留元素的数组。
// Array.prototype.reduce() 接受一组数组，将这些元素合并成单个值（并返回）。

//简单的示例
const numbers = [0, 1, 2, 3, 4, 5, 6];
const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
const sum = numbers
    .reduce((prev, next) => {
        return prev + next
    }, 0); // 21

console.log(sum);

//通过组合 map，filter 和 reduce 来计算 10 分以上的学生成绩总和 sum ：
const students = [
    { name: "Nick", grade: 10 },
    { name: "John", grade: 15 },
    { name: "Julia", grade: 19 },
    { name: "Nathalie", grade: 9 },
];
const aboveTenSum = students
    .map(student => student.grade)
    .filter(grade => grade >= 10)
    .reduce((prev, next) => prev + next, 0);
console.log(aboveTenSum);