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

<body>
<div class="mRdTj_Te re">
 <div class="mRdTj_wk ab mOfh">
  <ul>
   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://feature.aili.com/1870/838693.html" target="_blank"><img width="230" height="150" alt="" src="http://img7.aili.com/201405/09/1399628919_43055500.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://feature.aili.com/1870/838693.html" target="_blank"></a></h1>1...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://feature.aili.com/1870/838696.html" target="_blank"><img width="230" height="150" alt="" src="http://img1.aili.com/201405/09/1399629165_76872900.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://feature.aili.com/1870/838696.html" target="_blank"></a></h1>2...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://feature.aili.com/1870/834149.html" target="_blank"><img width="230" height="150" alt="" src="http://img2.aili.com/201404/10/1397116007_12303400.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://feature.aili.com/1870/834149.html" target="_blank"></a></h1>3...</div></div></li>

   <li><div class="mRdTj_k"><div class="mRdTj_Img"><a title="" href="http://feature.aili.com/1870/828924.html" target="_blank"><img width="230" height="150"  src="http://img7.aili.com/201403/14/1394788048_09703900.jpg"></a></div><div class="mRdTj_Text"><h1 class="wa_2"><a title="" href="http://feature.aili.com/1870/828924.html" target="_blank">4...</div></div></li>

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
<!-- 面向过程 -->
<script type="text/javascript">
$(document).ready(function() {
    //document.execCommand("BackgroundImageCache", false, true);
	var mFocus_ul = $(".mRdTj_wk ul");
	var mFocus_li = $(".mRdTj_wk li");
	var mFocus_btn = $(".mRdTj_Dbtn li");
	var mFocus_len = mFocus_li.length;
	var mFocus_len_max = mFocus_len+1;		console.log("var mFocus_len_max = mFocus_len+1;:::"+mFocus_len_max); //5
	var mFocus_Copy = $(".mRdTj_wk ul li:first").clone();
	console.log("var mFocus_Copy = $.mRdTj_wk ul li:first.clone();"+mFocus_Copy); //[object Object]
	mFocus_ul.append(mFocus_Copy);
	var mFocus_repeat;
	var mFocus_index = 0;
	var mFocus_wid = mFocus_li.width()*(mFocus_len_max);
	console.info("mFocus_wid =mFocus_li.width()*(mFocus_len_max); "+ mFocus_wid); //1150    { 230*5 }
	var mFocus_li_wid = mFocus_li.width();
	console.log("var mFocus_li_wid = mFocus_li.width();"+mFocus_li_wid); //230
	mFocus_ul.css({"width":mFocus_wid+"px"});
	mFocus_btn.hover(function(){
		mFocus_index = mFocus_btn.index(this);
		var mFocus_has = mFocus_btn.eq(0).hasClass("mRdTj_Dbtn_hov");
		if(mFocus_index==0 && mFocus_has){
			return false;
		}else{
			moveImg(mFocus_index);
		}
	});
	$(".tLxhdL").click(function(e){
		e.preventDefault();
		mFocus_index--;
		if(mFocus_index < 0){
			mFocus_index = mFocus_len-1;
			mFocus_ul.css({"left":-(mFocus_index+1)*mFocus_li_wid});
			mFocus_ul.stop(true,false).animate({"left":-mFocus_index*mFocus_li_wid});
		}
		moveImg(mFocus_index);
	});
	$(".tLxhdR").click(function(e){
		e.preventDefault();
		mFocus_index++;
		if(mFocus_index >= mFocus_len_max){
			mFocus_index = 1;
			mFocus_ul.css({"left":0});
			mFocus_ul.stop(true,false).animate({"left":-(mFocus_len_max)*mFocus_li_wid});
		}
		moveImg(mFocus_index);
	});
	$(".mRdTj_Te").hover(function(e){
		e.preventDefault();
		clearInterval(mFocus_repeat);
	},function(){
		mFocus_repeat = setInterval(function(){
			mFocus_index++;
			if(mFocus_index >= mFocus_len_max){
				mFocus_index = 1;
				mFocus_ul.css({"left":0});
				mFocus_ul.stop(true,false).animate({"left":-(mFocus_len_max)*mFocus_li_wid});
			}
			moveImg(mFocus_index);
		},4000)
	}).trigger("mouseleave");

	function moveImg(mFocus_index){
		mFocus_ul.stop(true,false).animate({"left":-mFocus_index*mFocus_li_wid});
		if(mFocus_index>=mFocus_len){
			mFocus_index = 0;
		}
		mFocus_btn.removeClass("mRdTj_Dbtn_hov");
		mFocus_btn.eq(mFocus_index).addClass("mRdTj_Dbtn_hov");
	}
});
</script>