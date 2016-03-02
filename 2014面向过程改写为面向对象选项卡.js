<!DOCTYPE>
<html >
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>面向过程改写为面向对象oop</title>
</head>
<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
<!-- <script type="text/javascript" src="http://js.aili.com/jquery-1.4.2.min.js"></script> -->
<link href="http://css.aili.com/reset_v4.css" type="text/css" rel="stylesheet" media="all"/>
<style type="text/css">
.re{position:relative;}.ab{position:absolute;}.mTea{background-image:url(http://images.aili.com/digi_index_v4/mTea.gif);background-repeat:no-repeat;}
.mRdTj_Te{width:278px;height:293px;border-left:1px dotted #ddd;border-right:1px dotted #ddd;border-bottom:1px dotted #ddd; margin:0 auto;}
.mRdTj_Te li{width:230px;height:260px;display:block;overflow:hidden;float:left;}.mRdTj_k{width:230px;height:260px;}.mRdTj_wk{width:230px;height:260px;top:21px;left:24px;}
.mRdTj_wk ul{
    /* width:230px; */
  height:260px;
	display:block;
	overflow:hidden;
	position:absolute;
	top:0;
	left:0;
	}
	.mRdTj_Img{width:230px;height:150px;}.mRdTj_Text{width:230px;height:120px;color:#999;}.mRdTj_Text h1{font-size:12px;font-weight:normal;display:block;overflow:hidden;width:230px;height:22px;line-height:22px;padding-top:5px;font-family:"Î¢ÈíÑÅºÚ";}.mRdTj_Btn{width:18px;height:40px;position:absolute;top:80px;cursor:pointer;}.tLxhdL{background-position:-765px -325px;left:0;}.tLxhdR{background-position:-788px -325px;right:0;}.mRdTj_Dbtn{width:260px;height:5px;font-size:0;line-height:0;position:absolute;top:273px;left:10px;}.mRdTj_Dbtn li{width:60px;height:5px;background:#666;display:block;float:left;margin-right:3px;cursor:pointer;}li.mRdTj_Dbtn_hov{background:#4eb3fe;}.mOfh{overflow:hidden;}
</style>
<!-- oop -->
<script type="text/javascript">
window.onload = function(){
  var OopSlider2 = function(options){
	//alert(Object.prototype.toString.call(this));
	this.options = {
		targetId: ".mRdTj_Te", //目标包裹层
		mFocus_ul: ".mRdTj_wk ul", 
		mFocus_li: ".mRdTj_wk li",
		myIndex: 0,
		addClass: "",
		tLxhdL : ".tLxhdL",//上一页
		tLxhdR : ".tLxhdR",//下一页
		mRdTj_Dbtn : ".mRdTj_Dbtn ul li",//底部按钮
		mRdTj_Dbtn_hov : "mRdTj_Dbtn_hov", //底部按钮hover过样式

		mFocus_repeat:"",
		mFocus_li_wid: 230,//$(mFocus_li).width();
		mFocus_len : 4,//mFocus_li.length, 
		mFocus_len_max: 5,//mFocus_len+1
		mFocus_wid :230*5
	}
	this.options = $.extend(this.options , options);
	this.setup();
  };
  //alert("2"+this.options.myIndex);
  OopSlider2.prototype = {
	setup:function(){
		if(!this.options.targetId) return false;
		//无限滚动
		var mFocus_Copy = $(".mRdTj_wk ul li:first").clone();
		$(this.options.mFocus_ul).append(mFocus_Copy);
		this.init();
	},
	init:function(){
		this.move();
	},	
    moveImg:function(a){
			$(this.options.mFocus_ul).stop(true,false).animate({"left":-a*this.options.mFocus_li_wid});
			if(a>=this.options.mFocus_len){
				a= 0;
			}
			$(this.options.mRdTj_Dbtn).removeClass(this.options.mRdTj_Dbtn_hov);
			$(this.options.mRdTj_Dbtn).eq(a).addClass(this.options.mRdTj_Dbtn_hov);
	},
	move:function(){//底部按钮事件	
		var _tt = this.options;	
		var _this = this;
		$(_tt.mFocus_ul).css({"width":_tt.mFocus_wid+"px"});//无缝滚动
    	$(this.options.mRdTj_Dbtn).each(function(i){
    		$(this).hover(function(){
				_tt.myIndex = i;
				var mFocus_has = $(_tt.mRdTj_Dbtn).eq(0).hasClass(_tt.mRdTj_Dbtn_hov);
				if(_tt.myIndex==0 && mFocus_has){
					return false;
				}else{
					_this.moveImg(_tt.myIndex); //moveImg(3);
				}
			})
		});
		this.all();
	},
	all:function(){//细化all抽象all
		var _tt = this.options;	
		var _this = this;
		$(_tt.tLxhdL).click(function(e){
			e.preventDefault();
			_tt.myIndex--;
			console.log("_tt this.options.myIndex"+_tt.myIndex);
			if(_tt.myIndex < 0){
				_tt.myIndex = _tt.mFocus_len-1;
				$(_tt.mFocus_ul).css({"left":-(_tt.myIndex+1)*_tt.mFocus_li_wid});
				$(_tt.mFocus_ul).stop(true,false).animate({"left":-_tt.myIndex*_tt.mFocus_li_wid});
			}
			_this.moveImg(_tt.myIndex);
		});

		$(this.options.tLxhdR).click(function(e){	
			e.preventDefault();
			_tt.myIndex ++;
			if(_tt.myIndex >= _tt.mFocus_len_max){
				_tt.myIndex = 1;
				$(_tt.mFocus_ul).css({"left":0});
				$(_tt.mFocus_ul).stop(true,false).animate({"left":-(_tt.mFocus_len_max)*_tt.mFocus_li_wid});
			}
			_this.moveImg(_tt.myIndex);

			console.log("mFocus_li.length,"+_tt.mFocus_li.length);//12!!
		});
		$(_tt.targetId).hover(function(){
			clearInterval(_tt.mFocus_repeat);
		},function(){
			_tt.mFocus_repeat = setInterval(function(){
				_tt.myIndex++;
				if(_tt.myIndex >= _tt.mFocus_len_max){
					_tt.myIndex = 1;
					$(_tt.mFocus_ul).css({"left":0});
					$(_tt.mFocus_ul).stop(true,false).animate({"left":-(_tt.mFocus_len_max)*_tt.mFocus_li_wid});
				}
				_this.moveImg(_tt.myIndex);
			},4000)
		}).trigger("mouseleave");
	}
  };
    //call
	var oopslider2 = new OopSlider2({ });
    };
</script>
<body>
<div class="mRdTj_Te re">
 <div class="mRdTj_wk ab mOfh">
  <ul>
   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://www.baidu.com" target="_blank"><img width="230" height="150" alt="" src="http://img7.aili.com/201405/09/1399628919_43055500.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://www.baidu.com" target="_blank"></a></h1>1...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://www.baidu.com" target="_blank"><img width="230" height="150" alt="" src="http://img1.aili.com/201405/09/1399629165_76872900.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://www.baidu.com" target="_blank"></a></h1>2...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://www.baidu.com" target="_blank"><img width="230" height="150" alt="" src="http://img2.aili.com/201404/10/1397116007_12303400.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://www.baidu.com" target="_blank"></a></h1>3...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://www.baidu.com" target="_blank"><img width="230" height="150"  src="http://img7.aili.com/201403/14/1394788048_09703900.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://www.baidu.com" target="_blank"></h1>4...</div></div></li>

  </ul>
 </div>
 <div class="mRdTj_Btn mTea tLxhdL"></div>
 <div class="mRdTj_Btn mTea tLxhdR"></div>
 <div class="mRdTj_Dbtn m_Ul ab">
  <ul>
   <li class="mRdTj_Dbtn_hov" id="a0"></li>
   <li id="a1"></li>
   <li id="a2"></li>
   <li id="a3"></li>
  </ul>
 </div>
</div>

</body>
</html>