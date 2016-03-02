//设计模式之迭代器模式  （迭代器相当于一个发动机，数据相当于任何链条）
<script>
var arr = ["1","2","3"];
var diedai = (function(){
  var length = arr.length;
	index = 0;
	return {
		hasNext : function(){
			return index < length;
		},
		next : function(){
			var data = arr[index];
			index = index + 1;
			return data;
		},
		reset : function(){
			index = 0;
		}
	};
})();

while(diedai.hasNext()){
	console.log(diedai.next());
}

</script>
//设计模式之迭代器模式  （迭代器相当于一个发动机，数据相当于任何链条）