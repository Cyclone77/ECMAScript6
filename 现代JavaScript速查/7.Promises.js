//Promises 是一个可以从异步函数 (参考) 同步返回的对象。

//可以使用 Promises 来避免 回调地狱 (callback hell) ，而且它们在现代 JavaScript 项目中越来越频繁地遇到。

const fetchingPosts = new Promise((res, req) => {
    setTimeout(function() {
        res(1)
    })
})

fetchingPosts
    .then(posts => console.log(posts))
    .catch(err => {
        console.log(err);
    })