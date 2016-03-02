<!-- JS的动态作用域  -->

<script type="text/javascript">
  //underscore 提供了 _.bind函数，锁定this不被修改	
	//_.bindAll 锁定 this 引用到对应的命名函数
	//锁定this引用的值
	function globalThis(){
		return this;
	}
	//传入的第一个参数，就是被引用的对象
	//globalThis();
	//globalThis.call('apple');
	//globalThis.apply("orange",[]);

	var nopeThis = _.bind(globalThis,'nope');
	nopeThis.call('wat');


	var target = { 
		name : "right value",
		aux :  function(){return this.name;},
		act :  function(){return this.aux();}
	}

	_.bindAll(target,'aux','act');
	target.act.call('wat');

	//target.act.call('wat'); // typeError 

</script>

<!-- JS的动态作用域  -->


<!-- JS的函数作用域  -->

<!-- JS的函数作用域  -->


<!--               高阶函数                     -->


<!-- 关于传递函数的更多思考，重复，反复，和条件迭代 start -->

<script type="text/javascript">
// 0> 关于传递函数的思考 max(提供了比较任意对象的方法，不只是数字) [此函数仍是受限制的，不是真正的函数式，对_.max而言，比较总是需要大于运算符来完成 ]
// !!! finder, best 比较任意值，找到不同类型的最佳值...  

_.max([1,2,3,4,5,5.75]);  //_.max接收一个可选的第二参数(从被比较对象中获得一个数值的函数)

var people = [{name:'fred',age:85},{name:"lily",95},{name:"lucy",age:105}];
_.max(people,function(p){ return p.age });


// 1> 使用函数而不是值  使用静态值的函数
	function repeat(times, VALUE){
		return _.map(_.range(times),function(){ return VALUE });
	}
	repeat(4,"major");
// 2> 将repeat实现隔离出来， 将值——》运算   重复多次
	function repeatedly(times,fun) {
		return _.map(_.range(times),fun);
	}
	
	repeatedly(3,function(){
		return Math.floor((Math.random()*10)+1);
	});

// 2.1> 生成已知数量的DOM节点

	repeatedly(10,function(n){
		var id = 'id' + n;
		var body;
		//body.append('<b>box</b>').attr('id',id);
		return id;
	});

// 3> repeat 与 repeatedly 的进化 升级 使用函数而不是值  接收函数的函数
function iterateUntil(fun,check,init){
	var ret = [];
	var result = fun(init);

	while (check(result)) {
		ret.push(result);
		result = fun(result);
	}

	return ret;
}

iterateUntil( function(n) {return n + n },
			  function(n) {return n <= 1024 },
1)

//-> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
// 3.1> 老办法取大于2小于1024的2的倍数

repeatedly(10,function(exp) { return Math.pow(2,exp+1) });

//-> [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
</script>
<!-- 关于传递函数的更多思考，重复，反复，和条件迭代 end -->



<script>