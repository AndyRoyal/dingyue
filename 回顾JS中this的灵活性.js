//--------------------------回顾this的灵活性---------------------------//
//this是javascript的一个关键字，
//它代表函数运行时，自动生成的一个内部对象，只能在函数内部使用。比如，

//1>纯粹的函数调用
var x = 1;
function test(){
	this.x = 2;
};
test();
alert(x);//2
//2>函数还可以作为某个对象的方法调用，这时this就指这个上级对象。
function test(){
	alert(this.x);
};
var o = {};
o.x = 1;
o.m =test;
o.m();//1
//3>情况三 作为构造函数调用new
//所谓构造函数，就是通过这个 函数 生成一个 新的对象（object），这时this就指这个新对象

var x = 100; //为表明下面的this不是全局对象
function test(){
	this.x = 1;
};
var o = new test();
alert(o.x);//1
alert(x); //为表明下面的this不是全局对象 //全局变量x的值没有改变

//4> 情况四 apply调用
//apply 是函数对象的一个方法，它的作用是改变函数的调用对象，
//apply 的第一个参数是改变后调用这个函数的对象，因此，this指的就是第一个参数

var x = 100;
function test(){
	alert(this.x);
};
var o = {};
//var o=new Object()
o.x = 2;
o.m = test;
o.m.apply();//100; apply参数为空时，默认调用全局对象，this 指的是全局对象

o.m.apply(o);//2  证明了这时this代表的是对象o。

o.m();//2  this指向o  方法调用this 指向 这个方法的对象


//通过call来改变this
(function(){ alert(this); }).call("hello world");