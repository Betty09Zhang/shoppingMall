require('./date.js');
//订单对象
 const orderInfo =(orderGoods,orderTotal,status,addressDetail)=>{

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
    return order;

}
module.exports=orderInfo;