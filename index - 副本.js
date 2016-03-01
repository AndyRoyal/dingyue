;$(function(){
	var gomeFloor = function() {
		
		this.init();
	}
	gomeFloor.prototype = {
		init:function(){
			this.ratio();
		},
		//比价接口
		ratio:function(){
                $.ajax({
                  type: 'get',
                //url: "http://ss" + cookieDomain + "/item/v1/smart/info/"+prdInfo.prdId+"/"+prdInfo.sku+"/"+g.cityCode(2)+"/"+$.trim((data.price == "敬请期待" ? -1: data.price))+"/flag/item/smartbuy",
                //dataType: 'jsonp',
                //jsonpName: "smartbuy",
                 url:"./json.json",
              /*  error: function(xhr,status,error)
                { console.log(xhr); },*/

                success: function (data) {
                    console.info(data);
         /*           console.log(  $(this));*/
                    if(data.success==true){
                        var data=data.result[0];
                        alert(data.jingdongLower)
                        if (data.smartbuy == true) {

                            var _tpl = '<span class="sm-btn">比价<em class="triangle"></em></span>\
    		                            <span class="sm-con">\
    		                                <%if (jingdongLower) {%>\
    		                                    <p class="strong">比京东低<em><%=jingdongLower%></em>元<a href="http://help.gome.com.cn/question/71.html" class="help-link" target="_blank">?</a></p>\
    		                                    <p>京东价：¥<%=jingdongPrice%></p>\
    		                                <% } %>\
    		                                <%if (suningLower) {%>\
    		                                    <p class="strong">\
    		                                        比苏宁低<em><%=suningLower%></em>元<a href=\'http://help.gome.com.cn/question/71.html\' class=\'help-link\' target=\'_blank\'>?</a>\
    		                                    </p>\
    		                                    <p>苏宁价：¥<%=suningPrice%></p>\
    		                                <% } %>\
    		                                <p>比价时间：<%=date%></p>\
    		                            </span>';

                            var _ren = template.compile(_tpl);
                            var _html = _ren(data);
                            var t;
                            $("#J-smart-buy").html(_html).hover(function (obj,tim) {
                                $(this).addClass("smart-buy-hover");
                                window.clearTimeout(t);
                            }, function () {
                                var _this =  $(this);
                                t = window.setTimeout(function(){
                                    _this.removeClass("smart-buy-hover");
                                },300);

                            }).show();

                            //以下两个属性 在一键分享中 使用
                            data.jingdongLower ? $("#J-smart-buy").attr('jdprice', '比京东低' + data.jingdongLower + '元') : $("#J-smart-buy").removeAttr('jdprice');
                            data.suningLower ? $("#J-smart-buy").attr('suningLower', '比苏宁低' + data.suningLower + '元') : $("#J-smart-buy").removeAttr('suningLower');
                        }
                    }

                }
            });
		}
	}


	$(".floor_prd_smart").each(function(){
        alert(1)
		new gomeFloor(this);
	})
	
		
})