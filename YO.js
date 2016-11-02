
//辅助函数和数据处理，类型处理函数

//1> hasOwnProperty
function _has(prop,obj){
	return Object.prototype.hasOwnProperty.call(obj,prop);
};

//2> propEq 属性相等比较方法返回boolean    比较属性，
//String → a → Object → Boolean
//R.propEq('hair', 'brown')({a:1,"hair":"brown"}); //true
var cars={
	rollsroyce:"8add",
	bmw : 1,
	benz :2,
	maserati :3,
	lincoln:4,
	jaguar:5,
	landrover:6,
	porsche:7,
	rollsroyce:"8add",
	rollsroyce:"8add"
};

function propEq(key,val,obj){
  //obj[key] == val ? {key,val} : {}
	for(i in obj){
		if(obj.hasOwnProperty(i)){//过滤
			if(i == key && cars[i] == val){
				var newObj = {};
				newObj[i] = cars[i]
				return newObj;
				//console.info(i+"---"+cars[i]);
			}
			//console.log(i,":",cars[i]);
		}
	}
};
propEq("rollsroyce","8add",cars);//只匹配出来一个相等的值对


// 增加属性，String → a → {k: v} → {k: v}   
//3> 
function assoc(key,val,obj){
	var objnew = {};
	objnew.key == val;
	var o = $.extend(obj,objnew);
	return o;
};
assoc("dfas","7777",cars);










































/**高阶函数封装   特殊参数边界待处理**/
//原则1：保证每次输出的不变性(函数的不变性) 原生slice的可变性使用时注意
//原则2：
//ifn 条件函数 (fn,fn1,fn2)->fn==true->fn1 fn==false -> fn2; ifn([{fn,fn1},{fn,fn1},{fn,fn1}]);  ifn({[fn,fn1],[fn,fn1]})
function ifn(fn,fn1,fn2){

};
//Y set function 
//1> isEmpty
function isEmpty(a){
	if(a == null) return false;
	if(a.length == 0 ) return true;
	if(a == "") return true;
	return false;
};
var a=[];
isEmpty(a);
isEmpty("");
//2> 判断是否是string
function isString(x){
	return Object.prototype.toString.call(x) == '[object String]';
};
//isString("212afaf");//true
//isString("");//true
//isString(" ");//true
//3>  取字符串 或者 数组的 某个位置｛字符串或者数组的下标｝的值
//charAt() 方法可返回指定位置的字符character
function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;debugger;
  return isString(list) ? list.charAt(idx) : list[idx];
};
//nth(-6,[1,2,3,4,5,6]);//1
//nth(2,[1,2,3,4,"dfd5",6,7]);
//nth(-1,[1,2,3])
//nth(-7,[1,2,3,4,5,6]);//undefined
//nth(2,"abcdef");
//nth(7,"abcdef");//""
//4.1> 返回除了第一个的剩余的集合 tail [1,2,3] -> [2,3]   "abc" -> "bc" 
//init 相反  返回除了最后一个的剩余的集合   [1,2,3] -> [1,2]   "abc" -> "ab" 
function tail(list){
	return list.slice(1,list.length);	
};
tail([1,2,3]);
tail("abcdef");
function init(list){
	return list.slice(0,list.length-1);
};
init("abcdef");//"abcde"
init([1,2,3]);//[1, 2]
//4> 获取数组/字符串 第一个，最后一个的值 head and last

function head(list){
	return nth(0,list);
};
//head 无需辅助函数写法
function head(list){
	return list.slice(0,1);
};
//head("abc");
//head(["aa","bb","ccc"]);

function last(list){
	return nth(-1,list);
};
//last 无需辅助函数写法
function last(list){
	//return list.slice(list.length-1,list.length);//js原生slice的第二个参数是可选的，默认是切分从start到数组或者字符串结束的所有元素
	return list.slice(list.length-1);
};
last("hello");//"o"
last(["aa","bb","ccc"]);//["ccc"]
//[a] =>a ||  str =>first chart
function head(arr){//直接通过下标取比较方便
	return arr==null?null:arr[0];
}
//head("a1b2c3");
//head("");//undefined
//head(['1aa',2,3]);
function last(arr){//直接通过下标取比较方便
	return arr == null ? null : arr[arr.length-1];
};
last("hello");//"o"
last(["aa","bb","ccc"]);//["ccc"]
//5> 排序比较逻辑
//第一个和第二个比，和第三个比，
//或者第一个和第二个比，小的放前面，重点是每一个之间都的比较
//[2,1,5]
//6.1  判断是不是数组
function isArray(x){
	return Object.prototype.toString.call(x) == '[object Array]';
};
//6.2  判断是不是对象
function isObj(x){
	return Object.prototype.toString.call(x) == '[object Object]';
};
//6.3 数据类型判断  (constructor,val) -> boolean
function is(Ctor,val){
   return val != null && val.constructor === Ctor && val instanceof Ctor;
};
//6.4>数字转字符串
function numToStr(x){
	return isNum(x)?(x+""):x;
};
sumToStr(111);//"111"
//6> 判断是否是数字
function isNum(x){
	return Object.prototype.toString.call(x) == '[object Number]';
};
isNum(111);
//字符串反转 "abc" -> "cba"  数组反转 [a,b,c] -> [c,b,a]
function reverse(list){
	var r=[];
	var lens = list.length;
	for(var i=lens-1;i>=0;i--){
        r.push(list[i]);
    }
    return r=isString(list)?r.join(""):r;
};
reverse("abcdef");//fedcba
reverse([1,2,3]);//[3,2,1]

//7> 截取字符串 (2,"abc") -> "ab"  截取数组 (3,[1,2,3,4,5]) -> [1,2,3]   数字截取 (1,123) -> 1
function take(cut,list){
	var list=numToStr(list);
	var newList = list.slice(0,cut);
	return newList;
};
take(3,"abcdef");//"abc"
take(1,[1,2,3]);//[1]
take(3,123456);//123

//8> 字符串转数组 'abc' -> ["a","b","c"]  数组转字符串  ["a","b","c"] -> 'abc'  实现ats join 和 sta split的功能
function staats(list){
	var lens = list.length;
	var r=[];
	var s=[];
	for(var i=0;i<lens;i++){
		r.push(list[i]);
		s = s+list[i];
	}
	return isArray(list)?s:r;
};
staats([1,2,3]);//"123"
staats("abcdef");//["a", "b", "c", "d", "e", "f"]

//9> 对象转数组 {a:1,b:2,c:3} -> [1,2,3]，数组转对象  [1,2,3] -> {a:1,b:2,c:3} 
function otaato(list){
	var lens = list.length;
	var args = arguments.length;

};




//1>   []+[] => [] 数组连接
function push(array, var_args){//把第二个参数的值 放到第一个参数数组里面
    for (var i = 1; i < arguments.length; ++i){
        array[array.length] = arguments[i];
    }
};
function concat(array1, array2){
    var result = [];
    for (var i = 0; i < array1.length; ++i){
        push(result, array1[i]);
    }
   /* for (var i = 0; i < array2.length; ++i){
        push(result, array2[i]);
    }*/
    return result;
};
concat([1,2,3]);/*
concat([1,2,3],[4,5]);
 */
//2>  实现concat 字符串连接
function ss(str1,str2){
	for(var i=0;i<str.length;i++){
		return str;
	}
}















//Y1》Y岳系列函数  (()()())
//辅助函数
function a(){
	console.log("a");
};
function b(){
	console.log("b");
};   
function c(){
	console.log("c");
};   
//主函数   
function pipeY(){
	var args = arguments;
	return function(){
		for(var i=0;i<args.length;i++){
			//if(typeof args[i] == "function"){
				args[i]();
			/*}else{
				throw new TypeError("The arguments must be function");
			}	*/
		}
	}
};
pipeY(a,b,c);

//Y2》Y岳系列函数 [1,2,3] ==> 实现数组累加  一个for循环搞定

//主函数   
function sumList(){ //[]==>num
	var r=0;//必须赋值为数字
	return function(list){
		for(var i=0;i<list.length;i++){
			//r +=list[i];
			r=r+list[i];
		}
		return r;
	}
}

sumList()([1,2,3]);

//这个是错误的  Y3》Y岳系列函数 [1,2,3] ==> 实现 俩个 数组累加===>for循环嵌套有问题  结果不对
function sumTwoList(list1){  // []+[]==>num
	var r1=0;//必须赋值为数字
	var r2=0;//必须赋值为数字
	return function(list2){
		for(var i=0;i<list1.length;i++){
			for(var j=0;j<list2.length;j++){
				r1 +=list1[i];
				r2 +=list2[j];
			}
		}
		console.info(r1);
		console.info(r2);
		return r1+r2;
	}
}

sumTwoList([2,2,0])([1,2,3]);

//字符串 数组 累加 与 连接 优化修复后
//1> list str num 累加 [1,2]+[3,4] ->10 && "12"+"35" ->47  && 12+37 ->49
function addList(list1,list2){
	var r1=Number(""),r2=Number([]);
	if(isString(list1) || isString(list2)){//处理字符串参数情况 (true||true)->true (false||true)->true  (true||false)->true 
		return Number(list1)+Number(list2);
	}
	if(isNum(list1) || isNum(list2)){//处理数字参数情况
		return list1+list2;
	}
	for(var i=0;i<list1.length;i++){
		r1 += list1[i];
	}
	for(var i=0;i<list2.length;i++){
		r2 += list2[i];
	}
	return r1+r2;
}
addList([1,2,100],[1,2,7]);//113 
addList("12","10");//22
addList(12,10);//22

//2> 
//3> 不限定参数个数的累加与连接 ？？如何实现，不限定参数个数，又可以处理所有传入的不限制个数的参数 ？？
function alwaysAdd(list){

}





//下面是数组累加优化修复前
//Y4》Y岳系列函数 [1,2,3] ==> 实现 俩个 数组累加+=，  俩个for循环搞定   []+[]==>num
function sumTwoList(list1){
	var r1=0;
	var r2=0;
	for(var j=0;j<list1.length;j++){
		r1 +=list1[j];
    }
	return function(list2){
		for(var i=0;i<list2.length;i++){
			r2 +=list2[i];
		}
		return r1+r2;
	}
}

sumTwoList([2,2,0,100,200])([1,2,3]);//310
sumTwoList("121")("456");//"01210456"

//Y5》Y岳系列函数 [1,2,3] ==> 实现 俩个 或者多个 数组累加  []+[]+[]==>num    改写成reduce???
function sumTreeList(list1,list2,list3){
	var r1=0;
	var r2=0;
	var r3=0;
	for(var j=0;j<list1.length;j++){
		r1 +=list1[j];
    }
	for(var i=0;i<list2.length;i++){
		r2 +=list2[i];
	}
	for(var i=0;i<list3.length;i++){
		r3 +=list3[i];
	}
	
	return r1+r2+r3;
}

sumTwoList([2,2,0,100,200],[1,2,3],[1,2]);
//Y6 {}+{}=num  求俩个对象的和  
//俩个for in搞定 for是不行的
function sumTwoObj(list1,list2){
	var r1=0;
	var r2=0;
	for( ele in list1){
		r1 +=list1[ele];
	}
	for( ele in list2){
		r2 +=list2[ele];
	}
	return r1+r2;
}
sumTwoObj({a:2,b:2},{c:1,d:2,e:3});
//Y7 用es5的 reduce来处理 []+[]=num
function(){

}; 
//Y8 (num,num)=[num...num]  ---ramda range
function numToArr(num1,num2){//先处理传入的参数，容错并转为数字
	var arr=[];
	return function(){
		for(var i=num1;i<num2;i++){
			num1++;
			if(num1==num2){
				arr.push(num1++);
			}
		}
	}
	return arr;
};
numToArr(1,5)();
//Y9 num==>[] 数字区间转成一个数组  (1,3)=>[1,2,3]
function range(from,to){
	if(!(isNum(from) && isNum(to))){ 
		throw new TypeError("the arguments to arr must be number");
	}
	var r=[];
	while(from < to){
		r.push(from);
		r=r+1;
	}
	return r;
};
range(1,3);
// 辅助函数 判断是否是数字
function isNum(x){
	return Object.prototype.toString.call(x) === '[object Number]';
};
//7》这个是未完成的 求俩个数组的和 []+[]=>num
function addArr(fn,list1,list2){
    var r;
    
		for(var i=0;i<list1.length;i++){
			return (function(i){
				for(var j=0;j<list2.length;j++){
					return (function(j){
						r=list1[i]+list2[j];
					})(j)
				}
    		})(i)
		}
	return r;
};
function add(){return a+b};

addArr(add,[2,1],[3,4])



//6》简易reduce
//主要看第一个传入的函数实现什么功能呢
//辅助函数
function plus(a,b){return a+b};
function _reduce(fn,list){
	var r;
	for(var i=0;i<list.length;i++){
		r=fn(list[i]);
	}
	return r;
};

//5》简易pipe
function pipe(){
	var args=arguments;
	return function(){
		var newargs=toArray(arguments);
		return reduce(function(a){
			return a.apply(null,newargs);
		},args);
	}
}


//4》??第3个，让每一个函数调用的时候，对应到自己的参数
function f(_call){ //_call  []
	return function(_param){//param []
		return function(_num){
			for (var i =0; i<_num; i++) {
			    _call(_param);
			};
		}
	} 
}

//3》第一个参数是被调用的函数，第二个参数是被调用函数的参数
function f(_call){
		return function(param){
			return _call(param);
		}
};

//2》only call once 
var foo = (function() {
    var init = false;
    return function(_call) {
        return function(e) {
            if (!init) {
                _call(e);
                init = true;
            }
        };
    };
})();
//foo(function(){console.log("aaa")})(console.log(22))
//1》封一函数，参数是Num 是当前函数的调用次数
function f(num){
  return function(_call){
    for(var i=0;i<num;i++){
       _call();
      }
  }
};

f(3)(function(){console.log(11)});




// min  expression 
//1>
var a=3,b=2,c=1,d=5,e=7
e==d?"e":d==a?"d":a==b?"a":b<c?"c":"last"
"last"
//2>数据类型判断 issues

var type = (function () {

    var r = {},
        types = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error', 'Null', 'Array','Object'];
    for (var i = 0, t; t = types[i++];) {
        ! function (t) {
            r['is' + t] = function (obj) {
                return Object.prototype.toString.call(obj) === '[object ' + t + ']';
            }
        }(t)
    }
    return r;
})();

//----------
function type(obj){
	var r = {};
	var types = ['Arguments','Function','String','Number','Date','RegExp','Error','Null','Array','Object'];
	for(var i=0,t;t = types[i++]){
		!function(t){
			r['is'+t] = function(obj){
				return Object.prototype.toString.call(obj) === '[object'+t+']';
			}
		}(t)
	}
};



//3> {} -> boolean 
function isEmpty(obj){
		for(var key in obj)return false;
		return true;
};