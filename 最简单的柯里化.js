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