//倒计时 new merge two rabbitTime
    window.panicCom.rabbitTime=function(djsBoxID,endTime,currentTime,time,options){//djsBoxID倒计时框id,endTime结束时间，currentTime开始时间，time是后台计算好的时间结束-开始时间{end:function(){}}
        options=options || {};
        var timer;
        var timeDjsBox=document.getElementById(djsBoxID);
        if(!timeDjsBox) return;
        //args 
        
        var numargs = arguments.length; 
        if(numargs == 2) {
            arguments[0] = djsBoxID;
        	arguments[1] = endTime;

        	var s=parseInt(endTime/1000);
        }
        if(numargs == 3 ) {
        	arguments[0] = djsBoxID;
        	arguments[1] = endTime;
        	arguments[2] = currentTime;
        	
        	var s=parseInt((endTime-currentTime)/1000);
        }
        
        //end of args 
        timer=setInterval(function(){
            s--;
            if(s<0){
                clearInterval(timer);
                timeDjsBox.innerHTML='<span class="time_djs_iteam">00</span><span>:</span><span class="time_djs_iteam">00</span><span>:</span><span class="time_djs_iteam">00</span>';
                options.end && options.end();
                return;
            };
            //shi
            var h=parseInt(s/3600);

            var a=s%3600;

            //fen
            var m=parseInt(a/60);

            //miao
            var se=a%60;


            timeDjsBox.innerHTML='<span class="time_djs_iteam">'+panicCom.toDubble(h)+'</span><span>:</span><span class="time_djs_iteam">'+panicCom.toDubble(m)+'</span><span>:</span><span class="time_djs_iteam">'+panicCom.toDubble(se)+'</span>';
        }, 1000)
    };
    //倒计时 new merge two rabbitTime    