//惰性函数  (直接在函数内部改变函数给函数重新赋值)
function createXHR(){
  var xhr = null;
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		handleErr(e);
		//internet explorer
		try{
			xhr = new ActiveXObjcet("Msxml2.XMLHTTP");
		}catch(e){
			try{
				xhr = new ActiveXObjcet("Microsoft.XMLHTTP");
			}catch(e){
				xhr = null;
			}
		}
	}
	return xhr;
}


function handleErr(err){
	var errXHR = err;
}

//把上的createXHR改写为惰性函数
function createXHR(){
	var xhr = null;
	if(typeof XMLHttpRequest != 'undefined'){
		xhr = new XMLHttpRequest();
		createXHR = function(){
			return new XMLHttpRequest();
		}
	}else{
		try{
			xhr = new ActiveXObjcet("Msxml2.XMLHTTP");
			createXHR = function(){
				return new ActiveXObjcet("Msxml2.XMLHTTP");
			}
		}catch(e){
			try{
				xhr = new ActiveXObjcet("Msxml2.XMLHTTP");
				createXHR = function(){
					return new ActiveXObjcet("Msxml2.XMLHTTP");
				}
			}catch(e){
				createXHR = function(){
					return null;
				}
			}
		}
	}
	return xhr;
}

createXHR();
//惰性函数  (直接在函数内部改变函数给函数重新赋值)