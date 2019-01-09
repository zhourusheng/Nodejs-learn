

// 阻塞式代码
// var fs = require("fs");
// var data = fs.readFileSync('test.txt');
// console.log(data.toString());
// console.log("Program Ended");

// 非阻塞式代码
// var fs = require("fs");
// fs.readFile('test.txt', function (err, data) {
//   if (err) return console.error(err);
//   console.log(data.toString());
// });
// console.log("Program Ended");

/*
** 在Node 应用，任何异步函数接受回调作为最后的参数，并回调函数接受错误作为第一个参数。我们再看一下前面的例子。
**  
*/ 
var fs = require("fs");
fs.readFile('test.txt', function (err, data) {
    if (err){
	   console.log(err.stack);
	   return;
	}
    console.log(data.toString());
});
console.log("Program Ended");


/*
** Nodejs 事件发射器
*	addListener(event, listener)
*	on(event, listener) 
*	once(event, listener)
*	removeListener(event, listener)
*	removeAllListeners([event])
*	setMaxListeners(n)
*	listeners(event)
*	emit(event, [arg1], [arg2], [...])
*/ 


/*
** Node.js - 缓冲模块
*	addListener(event, listener)
*	on(event, listener) 
*	once(event, listener)
*	removeListener(event, listener)
*	removeAllListeners([event])
*	setMaxListeners(n)
*	listeners(event)
*	emit(event, [arg1], [arg2], [...])
*/ 