
// <3>
var i = 0; var j = i+++i+++i++;

//---------
var a = 2;
a = a.z = 2;

//a.z //undefined;
















// <1>
//javascript 连等赋值问题
var a = {n:1};  
var b = a; // 持有a，以回查  
a.x = a = {n:2};  
alert(a.x);// --> undefined  
alert(b.x);// --> {n:2}

//  事实上，解析器在接受到 a = a.x = {n:2} 这样的语句后，会这样做：
//  
//  找到 a 和 a.x 的指针。如果已有指针，那么不改变它。如果没有指针，即那个变量还没被申明，那么就创建它，指向 null。
//  a 是有指针的，指向 {n:1}；a.x 是没有指针的，所以创建它，指向 null。
//  然后把上面找到的指针，都指向最右侧赋的那个值，即 {n:2}。

//javascript 连等赋值问题
var x = 1;
x.y  = x = { v : 777 };
console.log(x.y);
//x是有指针的，指向 { v : 777 };  x.y是没有指针的，所以创建它，指向null.


// <2> deferred对象有三种执行状态----未完成，已完成和已失败。
//开发网站的过程中，我们经常遇到某些耗时很长的javascript操作。其中，既有异步的操作（比如ajax读取服务器数据），也有同步的操作（比如遍历一个大型数组），它们都不是立即能得到结果的。
//通常的做法是，为它们指定回调函数（callback）。即事先规定，一旦它们运行结束，应该调用哪些函数。
//但是，在回调函数方面，jQuery的功能非常弱。为了改变这一点，jQuery开发团队就设计了deferred对象。
//简单说，deferred对象就是jQuery的回调函数解决方案。在英语中，defer的意思是"延迟"，所以deferred对象的含义就是"延迟"到未来某个点再执行。
//它解决了如何处理耗时操作的问题，对那些操作提供了更好的控制，以及统一的编程接口。
//$.when($.ajax("test1.html"), $.ajax("test2.html"))
//　　.done(function(){ alert("哈哈，成功了！"); })
//　　.fail(function(){ alert("出错啦！"); });



//　$.ajax("test.html")
//　　.done(function(){ alert("哈哈，成功了！");} )
//　　.fail(function(){ alert("出错啦！"); } )
//　　.done(function(){ alert("第二个回调函数！");} );


