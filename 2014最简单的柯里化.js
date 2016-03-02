//代码段  最简单的柯里化（高阶函数）
  function curry(a){
		return function(b){
			return function(c){
				return a+b+c;
			}
		}
	};

	curry(2)(3)(5);
	//(curry(2)(3))(5);





	//柯里化 demo 
function curry1(fn){
  var args = Array.prototype.slice.call(arguments,1);
	return function(){
		var innerArgs = Array.prototype.slice.call(arguments);
		var finalArgs = args.concat(innerArgs);
		console.log(finalArgs);

		return fn.apply(this,finalArgs);
	}
};
function add(num1,num2,num3){
	return num1 + num2 + num3;
}
//var t = curry1(add,17)(10,2);
var t = curry1(add,17,12,1,1,1)(10,2);
console.info("t:"+t);

//柯里化 demo 