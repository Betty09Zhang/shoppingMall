// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) {
    	fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
   
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) 
        	fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

const orderInfo =(orderGoods,orderTotal,status)=>{

  var order={};
  //生成随机编号
    var start=Math.floor(Math.random()*10);
    var end=Math.floor(Math.random()*10);
    var mid=new Date().Format("yyyyMMddhhmmss");
    var orderId=start+mid+end;
    console.log('orderId: '+orderId);

    var createdTime=new Date().Format('yyyy-MM-dd hh:mm:ss');

    order.orderId=orderId;
    order.orderGoods=orderGoods;
    order.addressDetail=addressDetail;
    order.createdTime=createdTime;
    order.orderStatus=status;  // '1' 为支付完成状态。
    order.orderTotal=orderTotal;

}

module.exports={
    orderInfo,
    Date
}
