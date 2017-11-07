//除 promises 之外，还有一种新的语法可能会遇到，那就是异步的 async / await。

async function getGithubUser(username) { // async 关键字允许在函数中使用 await ，意味着函数返回一个 promise 
    const response = await fetch(`https://api.github.com/users/${username}`); // 执行在这里暂停，直到fetch返回的 Promise 被 resolved 
    return response.json();
}

getGithubUser('mbeaudru')
    .then(user => console.log(user)) // 记录用户响应 - 不能使用 await 语法，因为此代码不在 async 函数中 
    .catch(err => console.log(err)); // 如果在我们的异步函数中抛出一个错误，我们将在这里捕获它