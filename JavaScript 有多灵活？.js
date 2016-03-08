//------------javascript 有多灵活 -----------------//

//为number的原型上添加add方法
Number.prototype.add = function(x){
	return this + x;
};
//调用
(9).add(3);
9..add(3);
10['add'](7);
//由于add方法返回的是数值，所以可以进行链式运算
//为Number对象的实例上部署subtract方法
Number.prototype.subtract = function(x){
	return this - x;
};

100..add(100).subtract(200);
100['add'](10)["subtract"](20);
//部署方法
Number.prototype.iterate = function(x){
	var res = [];
	for(var i = 0; i<this; i++){
		res.push(i);
	};
	return res;
};
//将一个数值自动扩展为一个数组
(10).iterate();

//----》调用Number上部署的方法时，可以不用()号
//ES5规定每个对象的属性 都有一个取值方法 叫get,用来自定义该属性的读取操作
Number.prototype = Object.defineProperty(
	Number.prototype,"double",{
		get:function(){
			return (this + this)
		}
	}
); 

Number.prototype = Object.defineProperty(
	Number.prototype,"square",{
		get:function(){
			return (this * this)
		}
	}
);

(7).double.square;
8..double;
7["double"]["square"];

//补充1

//原始类型（字符串、数值、布尔值）的值，本身都是常量，不能修改，只能在原型prototype对象上添加属性。
//var n = 123;
//n.x = 456;
//n.x // undefined

//补充2 
// js 和 ruby 的类都 是开放的，随时添加新属性和方法。
//var str = 'str';
//str.func = function() { console.log('test');};
//str.func() ==> Object str has no method 'func'
//
//这种写法最大的问题在于，基本类型访问其属性或方法时，是对一个临时对象进行操作。
//也就是说这种写法等价于：
//var str = 'str';
//(new String(str)).func = function() { console.log('test');};
//(new String(str)).func() ==> Object str has no method 'func'
//方法声明和方法调用完全不是同一个对象。
//下面这种写法，测试通过：
//var str = new String('str');
//str.func = function() { console.log('test');};
//str.func()
//
var a='abc';
var b=new String('abc');
console.log(typeof a);//string
console.log(typeof b);//object
a.x = 2;
a.x;//undefined
b.x = 2;
b.x //2

//a是字符串基本类型，b是字符串包装类型，字符串基本类型就不能加属性和方法，你的解释是不对的。

//补充2 的总结： 字符串 基本类型 不能添加属性和方法，字符串包装类型可以添加属性和方法。


