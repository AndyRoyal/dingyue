//获取对象的长度
//  ---------------------------------------------------------------------------
$.extend({
    //  获取对象的长度，需要指定上下文 this
    Object:     {
        count: function( p ) {
            p = p || false;
         
            return $.map( this, function(o) {
                if( !p ) return o;
                 
                return true;
            } ).length;
        }
    }
});
 
 
//  示例
//  ---------------------------------------------------------------------------
var obj = {
    a:      null,
    b:      undefined,
    c:      1,
    d:      2,
    e:      'test'
};
 
//  不过滤空值
console.log( $.Object.count.call( obj ) );
 
//  过滤空值
console.log( $.Object.count.call( obj, true ) );


//  ---------------------------------------------------------------------------

// 如何把多个AJAX放到一个 [] 里去执行

/*function ajaxPlay(){
    var rec = [];

};*/





//模拟三个AJAX请求 ，执行顺序为随机！


	function AjaxDemo(namz,age) {
        this.namz = namz;
        this.age = age;

        //第一种调用方式
		//this.ajax1();
        //this.ajax2();
        //this.ajax3();

        //第二种调用方式
        //this.rec = [this.ajax1,this.ajax2,this.ajax3];
        //for(var i = 0; i<3; i++){
        //    //console.info("this.rec[i] ： "+this.rec[i]);
        //    this.rec[i]();
        //}
        
        //第三种调用方式  调用
        this.ArrayList = [this.ajax1,this.ajax2,this.ajax3];
        map(this.ArrayList)("123need not")("123neednot2");

        this.ObjectList = {a:this.ajax1,t:this.ajax2,c:this.ajax3};
       // map(this.ObjectList)()();
	};

    //第三种调用方式  扩展
    function map(arr,fn){
        return function(neednot){
            return function(neednot2){
            if(Object.prototype.toString.call(arr) === '[object Array]'){
                for(var i=0; i<arr.length;i++){
                    arr[i]();
                    console.info("neednot:"+neednot[i]);
                    console.info("neednot2:"+neednot2[i]);
                }
            }else if(Object.prototype.toString.call(arr) === '[object Object]'){
                for (var i = 0, l = arr.length; i<l;i++) {
                    alert(11);
                    arr[i]();
                    console.log(i)
                };
            }
            }
       }
    };

    // BUG 第三种调用方式 辅助函数  auxiliary([1,2,3])  //--> 1 
    //function auxiliary(arr){
    //    for(var i=0; i< arr.length; i++){
    //        return arr[i];
    //    }
    //};

	AjaxDemo.prototype = {
		ajax1 : function(){
                $.ajax({
                  type: 'get',
                  url:"json.json",//json必须叫这名
                  success: function (data) {
                       console.info("ajax 1 success");
                    if(data.success==true){
                        var data=data.result[0];
                      
                        var o =data.serviceTag;
                       $.each(o,function(i,item){
                                var strs = '<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                                            '<span namz = '+item+' age="18" class="rushbgiprd" style="width:26px; height:26px;"></span><span class="c5e ml5">'+item+'</span>'+
                                         '</div>';
                                        //console.info("item:"+item);
                                        console.log(strs);
                                        
                        });

                        //alert($('span[namz=正品保障]').width()+"px");
                        //console.log("data.suningPrice : "+data.suningPrice);
                    }

                  },
                  error:function(){
                    alert("error");
                  }
                });
		},
        ajax2 : function(){
            $.ajax({
                type : "get",
                url : "json.json",
                success : function(data){
                    console.info("ajax 2 success");
                         var data=data.result[0];
                          // console.log("data.date : "+data.date);

                },
                error : function(){
                    alert("error");
                }
            });
        },
        ajax3 : function(){
            $.ajax({
                type : "get",
                url : "json.json",
                success : function(data){
                    console.info("ajax 3 success");
                         var data=data.result[0];
                           //console.log("data.jingdongPrice : "+data.jingdongPrice);

                },
                error : function(){
                    alert("error");
                }
            });
        },
	};	

    var newajax = new AjaxDemo();	













//------------------------------------------------
/*    if(data.serviceTags.warranty_30){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:-40px -122px;"></span><span class="c5e ml5">data.serviceTags.warranty_30</span>'+
                    '</div>');
                }else if(data.serviceTags.warranty_180){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:-40px -122px;"></span><span class="c5e ml5">data.serviceTags.warranty_180</span>'+
                    '</div>');
                }else if(data.serviceTags.change){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:-76px -122px;"></span><span class="c5e ml5">data.serviceTags.change</span>'+
                    '</div>');
                }else if(data.serviceTags.genuine){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:0 -151px;"></span><span class="c5e ml5">data.serviceTags.genuine </span>'+
                    '</div>');
                }else if(data.serviceTags.back){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:-112px -154px;"></span><span class="c5e ml5">data.serviceTags.back</span>'+
                    '</div>');
                }else if(data.serviceTags.back_no){
                    arr.push('<div class="oh" style=" margin:8px 0; line-height:26px; height:26px;">'+
                        '<span class="rushbgiprd" style="width:26px; height:26px;background-position:-74px -154px;"></span><span class="c5e ml5">data.serviceTags.back_no</span>'+
                     '</div>');
                }*/