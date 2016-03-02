<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>calculator-小太阳</title>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>


</head>
<style type="text/css">
  
* { padding: 0; margin: 0; }
li { list-style: none; }
body { background:#00779e; }

#counter {width: 500px; height: 420px; margin: 50px auto 0; position: relative; }
#counter h2 { line-height: 42px; padding-left: 15px; font-size: 14px; font-family: arial; color:#FFF; }
#counter a {font-weight: normal; text-decoration: none; color:#FFF; }
#counter a:hover {text-decoration: underline; }
#bg { width: 280px; height: 200px; border: 3px solid #004f69; background: #FFFFFF; filter: alpha(opacity=80); opacity: 0.8; position: absolute; left: 50%; top: 115px; margin-left:-141px;}
#counter_content { width: 250px; position: absolute; top: 130px; left: 130px; z-index: 1; }
#counter_content h3 { margin-bottom: 10px; }
#counter_content h3 input {  width: 223px; height: 30px; line-height: 30px; padding: 0 10px; background: url(images/ico.png) no-repeat; text-align: right; color: #333; font-size: 14px; font-weight: bold; }
#counter_content ul { width: 250px; }
#counter_content li { width: 60px; height: 30px; line-height: 30px; float: left; background: url(images/ico.png) no-repeat -303px 0; text-align: center; color: #fff; cursor: pointer; margin: 0 1px 4px 0; }
#counter_content .active { background: url(images/ico.png) no-repeat -244px 0; }
#counter p { width: 500px; position: absolute; bottom: 20px; left: 0; color: #FFF; text-align: center; font-size: 12px; }


</style>
<body>

<div id="counter">
	
	<div id="counter_content">
		<h3><input id="input1" type="text" value="0" /></h3>
		<ul>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>+</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>-</li>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>×</li>
			<li>0</li>
			<li>C</li>
			<li>=</li>
			<li>÷</li>
		</ul>
	</div>
	<div id="bg"></div>
	<p>power by dingyue </p>
</div>
</body>
</html>
<script type="text/javascript">
// JQ插件  写法
	;(function($){
		$.fn.calculator = function(opt){
			var def = {
				targetLi: '#counter_content ul>li',
				saveNum : "", //保存第一个数字
				touchOpt : "",
				clearFlag : false  //多位数运算
			};
			var opt = $.extend(opt,def);
			//计算函数count	  IN 运算符  
			//闭包里嵌套函数
			//只是计算 得出 结果，并没有事件 
			//计算函数  与 事件无关
			//IN  用来把运算符传进来
			function count(num1,num2,IN){
				var result = 0;
				switch(IN){
					case '+': 
						result = num1 + num2;
						break;
					case '-':
						result = num1 - num2;
						break;
					case '×':
						result = num1 * num2;
						break;
					case '÷':
						result = num1/num2;
						break;
					//没有传入运算符	
					default:
						result = num2;
						break;

				};
				//函数返回值
				return result;
			};

			this.each(function(){
				$(opt.targetLi).each(function(){
					$(this).hover(function(){
						$(this).addClass("active");
					},function(){
						$(this).removeClass("active");
					});

			
					//若count放this.each 里面 ，此console.info被执行了 16 次
				    //console.info(count(777,878,"+"));

					//添加事件 计算器 操作  事件
					$(this).mousedown(function(){
						//$('#input1').val($(this).html());
						//获取输入框的值 
						var input1= document.getElementById("#input1");
						//点击按钮的值
						var btnValue = $(this).html().replace(" ","");
						switch(btnValue){
							case 'C':
								input1.val(0);
								//alert(opt.saveNum+ "  " + IN)
								//把第一个保存的数字，与传递的运算符都 设置成 '';
								opt.saveNum = IN = '';
								break;
							case '+':
							case '-':
							case '×':
							case '÷':
								opt.clearFlag = true;
								//点击运算符的时候 清空 
								//opt.clearFlag = true;
						//当点击 运算符的时候，保存起来在输入 运算符 之前的  输入框的值;bug 只能进行 个位数运算，超过个位数 不行

								opt.saveNum = input1.val();
								console.info(opt.saveNum);
								//再=前，取得运算符，给点击 = 时， 计算函数count使用
								IN = btnValue;
								break;

							case '=':
								opt.clearFlag = true;
								//当有第一个数字的时候，进行计算结果
								if(opt.saveNum.length != 0){
									//不能对小数点的进行计算，故要转换成整型
									input1.val( count(parseInt(opt.saveNum),parseInt(input1.val()),IN) );
								}

								//点击等于的时候要清空 输入框中的 值，并且把结果赋值给 输入框
								console.info("第一个保存的数字opt.saveNum"+opt.saveNum+"第二次输入的值"+ input1.val());
								break;
							default:
								if (opt.clearFlag) {
									input1.value = parseInt(btnValue,10);
									opt.clearFlag = false;
								}else{
									//多位数输入 当前input的值 连接 保存的值 
									//alert("input1.val()"+input1.val()); 
									//$('#input1').val( parseInt(btnValue+opt.saveNum,10) );
									input1.value = parseInt(input1.value+btnValue,10);
								}

								//$('#input1').val($(this).html());  //default里写这行，只能进行 个位数运算
								break;
						}
					});

				});



			});
		};
})(jQuery);

//调用
$('#counter').calculator();

</script>









<script>
//面向过程  写法
	/*$(document).ready(function(){

		var num1 = '';
		var opt = "";
		var clearInput = false; //清楚输入框开关

		



		$("#counter ul li").each(function(){
			//滑过效果
			$(this).hover(function(){
				$(this).addClass("active");
			},function(){
				$(this).removeClass("active");
			});

			//添加事件 
			$(this).mousedown(function(){
				console.info($(this).html())
				$('#input1').val($(this).html());
			});

		});

	});*/

</script>



<!-- 计算器  原生JS 写法  -->
<script type="text/javascript">
	/* xiaotaiyang */

//var sNum1='';
//var sOpr='';

//var bNeedClear=false;	//是否需要清除输入框中已有的内容

/*function calc(iNum1, iNum2, sOpr)
{
	var iResult=0;
	switch(sOpr)
	{
		case '×':
			iResult=iNum1*iNum2;
			break;
		case '+':
			iResult=iNum1+iNum2;
			break;
		case '-':
			iResult=iNum1-iNum2;
			break;
		case '÷':
			iResult=iNum1/iNum2;
			break;
		default:
			iResult=iNum2;
	}
	
	return iResult;
}
*/
/*function doInput()
{
	var oInput=document.getElementById('input1');
	//console.info("1............"+this.innerHTML);
	var sHtml=this.innerHTML.replace(' ','');
	//console.info(this.innerHTML);
	
	switch(sHtml)
	{
		case '=':
			oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			
			sNum1='';
			sOpr='';
			bNeedClear=true;
			break;
		case '+':
		case '-':
		case '×':
		case '÷':
			bNeedClear=true;
			
			if(sNum1.length!=0)
			{
				oInput.value=calc(parseInt(sNum1), parseInt(oInput.value), sOpr);
			}
			
			sOpr=sHtml;
			
			sNum1=oInput.value;
			break;
		case 'C':
			oInput.value='0';
			sNum1='';
			sOpr='';
			break;
		default:	//数字
			if(bNeedClear)
			{
				oInput.value=parseInt(sHtml, 10);
				bNeedClear=false;
			}
			else
			{
				oInput.value=parseInt(oInput.value+sHtml, 10);
			}
			break;
	}
}*/

/*window.onload=function ()
{
	var aLi=document.getElementsByTagName('li');
	var i=0;
	
	for(i=0;i<aLi.length;i++)
	{
		aLi[i].onmousedown=doInput;
		aLi[i].onmouseover=function ()
		{
			this.className='active';
		};
		
		aLi[i].onmouseout=function ()
		{
			this.className='';
		};
	}*/
	/*	(function (){
		var oS=document.createElement('script');
			
	oS.type='text/javascript';
		oS.src='http://www.zhinengshe.com/zpi/zns_demo.php?id=3522';
			
		document.body.appendChild(oS);
	})();*/
//};


</script>
<!-- 计算器  原生JS 写法  -->