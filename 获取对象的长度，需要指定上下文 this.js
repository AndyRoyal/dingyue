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