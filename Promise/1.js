var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve("成功");
    }, 2000);
})

console.log("开始执行!");
var p1 = p.then(function(result) {
    console.log(result);
})


var p2 = p.then(function(result) {
    console.log(result);
})
console.log("再次执行成功!");

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, ["done", "agrums"], "测试");
    })
}
timeout(1000).then((result, dd) => {
    console.log(result);
})