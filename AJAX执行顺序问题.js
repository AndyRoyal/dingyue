//HTML文件
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>simulateAjaxThree</title>
    <!--<script src="http://js.gomein.net.cn/??/gmlib/jq/1.7.1/jquery.js,/js/n/package/template.js"></script>-->
    <script src="http://js.gomein.net.cn/??/gmlib/jq/1.7.1/jquery.js"></script>
    <script src="js/simulateAjaxThree.js"></script>
</head>
<body>

</body>
</html>
//js文件
  function AjaxDemo(namz,age) {
        this.namz = namz;
        this.age = age;

		this.ajax1();
        this.ajax2();
        this.ajax3();
	};
	AjaxDemo.prototype = {
		ajax1 : function(){
                $.ajax({
                  type: 'get',
                  url:"json.json",//json必须叫这名
                  success: function (data) {
                       console.info("ajax 1 success");
                    if(data.success==true){
                        var data=data.result[0];
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

//JSON文件
{"result":[{"suningPrice":"1","date":"2","jingdongPrice":"3","suningLower":"1.00","smartbuy":true,"jingdongLower":"1.00"},{"suningPrice":"1599.00","date":"2016-01-08 13:38:47","jingdongPrice":"1599.00","suningLower":"1.00","smartbuy":true,"jingdongLower":"1.00"}],"success":true}


