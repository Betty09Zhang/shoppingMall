var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users=require('../model/users');
var Goods= require('../model/goods');
require('../.././utils/date.js');
var orderInfo =require('../.././utils/orderInfo.js');


/*连接数据库*/
mongoose.connect('mongodb://localhost:27017/mall',{config:{autoIndex: false}});

mongoose.connection.once("open",function(){
	console.log("connected success  users")
});

mongoose.connection.on("error",function(error){
	console.log("connected fail")
});

/* GET users listing. */
router.post('/login', function(req, resp, next) {

	var name=req.body.username;
	console.log("name"+name);
	var psw=req.body.userPwd;
	console.log("psw"+psw);
	Users.findOne({'name':name,'psw':psw},function(err,doc){
		if(err){

			console.log('error');
			resp.json({
				status: '0',
				msg: err.message
			})
		}
		else{

			if(doc){
				//console.log(doc);
				resp.cookie("userId",doc.userId,{
				path:'/',
				maxAge:1000*60*30
				});
				
				resp.json({
					status:'1',
					msg: '',
					result:{
						user:doc
					}
				})
				}
				else{
				resp.json({
				status: '0',
				msg: '找不到用户'
			})
			}
			
			}
		
	})
	// const user = await Users.findOne({'name':name,'psw':psw}).exec();
	// if(user){
	// 	resp.json({
	// 				status:'1',
	// 				msg: '',
	// 				result:{
	// 					user:doc
	// 				}
	// 			})
	// }
	// else{
	// 	resp.json({
	// 			status: '0',
	// 			msg: '找不到用户'
	// 		})
	// }
})

router.get('/logout',function(req,resp,next){
	resp.cookie("userId","",{
		path: '/',
		maxAge: -1
	})
	resp.json({
		status:'1',
		msg: '',
		result:''
	})
})

router.get('/checkLogin',function(req,resp,next){
	if(req.headers.cookie){
		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					
 					resp.json({
		 				status:'1',
		 				msg:'',
		 				result: doc.name
	 				});
	 				
 				}else{
 					resp.json({
					status: '00',
					msg: '无此用户'
					})
 				}
 			}
 			
 		})
		
	}
	else{
		resp.json({
			status: '0',
			msg: '用户未登录'
				})

	}
})

 
 router.get('/cart',function(req,resp,next){
 	console.log("cookie  cart: "+ req.headers.cookie);
 	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					console.log('购物车货物：'+doc.cartList);
 					var count=0;
 					doc.cartList.forEach(function(item){
 						if(item.productNum>0){
 							count=count+item.productNum;
 						}
 					});
 				
 					console.log('cart  cartList:'+doc.cartList);
 					console.log('cart  count:'+count);
 					resp.json({
		 				status:'1',
		 				msg:'',
		 				cartCount:count,
		 				result:{
		 					cartList: doc.cartList
		 				}
	 				});
	 				
 				}else{
 					resp.json({
					status: '0',
					msg: '用户未登录'
					})
 				}
 			}
 			
 		})
 	}

 	
 }) 



 //更新商品数量是否选中等属性
 router.post('/edit',function(req,resp,next){
 	var productId=req.body.productId;
 	var checked=req.body.check;
 	var productNum=req.body.productNum;
 	console.log('productNum:'+productNum);
 	console.log('checked:'+checked);
 	console.log('productId:'+productId);
 	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		
 		Users.update({'userId':userId,'cartList.productId':productId},{'cartList.$.productNum':productNum,'cartList.$.check':checked},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				

				resp.json({
					status:'1',
					msg:'',
					result:'success'
					});
	 				
 				
 			}
 			
 		})
 	}
 	else{

		resp.json({
		status: '0',
		msg: '用户未登录'
			})
	}
 	
 })


 //选中所有

 router.post('/editCheckAll',function(req,resp,next) {
 	/*optional stuff to do after success */
 	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 	

 		var check=req.body.check;
 		console.log('check'+check);

 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					doc.cartList.forEach(function(item){
 						item.check=check;
 					})
 				doc.save(function(err){

 					if(err){
 						resp.json({
							status: '0',
							msg: err.message
						})
 					}
 					else{
 						resp.json({
		 				status:'1',
		 				msg:'',
		 				result:{
		 					cartList: doc.cartList
		 					}
	 					});
 					}
 				})
 					
	 				
 				}
 				else{
 					resp.json({
					status: '0',
					msg: '用户未登录'
				})

 				}
 			}
 			
 		})
 		
 	}
 });

//清除购物车中的某商品
 router.get('/deleteItem',function(req,resp,next){
	var productId=req.query.productId;
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);

 		
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					var cartList=doc.cartList;
 					console.log('购物车货物：'+cartList);
 					var deleteCount=0;
 					for (var i = 0; i < cartList.length; i++) {
 						if(cartList[i].productId==productId){
 							deleteCount=cartList[i].productNum;
 							cartList.splice(i,1);
 						}
 					}

 					console.log('删除后的  cartList'+cartList);
 					doc.cartList=cartList;
 					doc.save(function(err){
 						if(err){
 							resp.json({
				 				status:'0',
				 				msg:err.message
				 				
			 					});
 						}
 						else{
	 							resp.json({
				 				status:'1',
				 				msg:'',
				 				deleteCount:deleteCount,
				 				result:{
				 					cartList: doc.cartList
				 					}
			 					});
		 					}
 					})
 					
	 				
 				}
 			}
 			
 		})
 	}
	
})


router.get('/address', function(req, resp, next) {
	/*optional stuff to do after success */
	console.log('address');
	
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					var addressList=doc.addressList;
 					console.log('收货人地址：'+addressList);
					resp.json({
		 				status:'1',
		 				msg:'',
		 				result:{
		 					addressList: doc.addressList
		 					}
							});
		 					
 					}		
 				
 			}
 			
 		})
 	}
	

});

//更改默认属性：
router.post('/toggleDefaultAddr',function(req,resp,next){

	var addressId=req.body.addressId;
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);

 		
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					var addressList=doc.addressList;
 					console.log('收货人地址：'+addressList);
 					addressList.forEach(function(item){
 						if(item.addressId==addressId){
 							item.isDefault=true;
 						}
 						else{
 							item.isDefault=false;
 						}
 					})
 				}

 				doc.save(function(err){
 					if(err){
 							resp.json({
				 				status:'0',
				 				msg:err.message
				 				
			 					});
 						}
 					else{
 						resp.json({
		 				status:'1',
		 				msg:'',
		 				result:{
		 					addressList: doc.addressList
		 					}
							});
 					}
 				})
	
 			}
 			
 		})
 	}
	
})

router.post('/addressDel',function(req,resp,next){
	var addressId=req.body.addressId;
	console.log('待删除地址的Id:'+addressId);
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		
 		Users.update({'userId':userId},{$pull: {"addressList":{'addressId':addressId}}},function(err){
 			if(err){
 				resp.json({
	 				status:'0',
	 				msg:err.message
	 				
						});
 			}
 			else{
 				console.log('成功删除addressId 地址：'+addressId);
 				resp.json({
	 				status:'1',
	 				msg:'',
	 				result:'成功删除地址'
						});
 			}
 		})
 	}
})

//2.立即购买订单。
router.post('/purchaseNow',function(req,resp,next){
	var addressId=req.body.addressId;
	var orderTotal=req.body.orderTotal;
	var productId=req.body.productId;
	var productNum=req.body.productNum;
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);

 	}

 
 	//var user =await Users.finOne({'userId': userId});
	// Users.findOne({'userId':userId},function(err,doc){
 			
 // 			if(err){
 // 				resp.json({
	// 				status: '0',
	// 				msg: err.message
	// 			})
 // 			}
 // 			else{
 // 				if(doc){


 // 				}
 // 			}
 // 		})
 			var orderGoods=[];
 			var item={};
 		 Goods.finOne({'productId': productId}).then((good) =>{
 		 	var item=good;
 		 	item.productNum= productNum;
 		 	item.check ='1';
 		 	orderGoods.push(item);
 		 	return Users.findOne({'userId': userId});
 		}).then( (user) =>{
 			var order =orderInfo(orderGoods,orderTotal,'-1');
 			user.orderList.push(order);
 			return user.save();
 		}).then((doc) =>{
 			resp.json({
		 				status:'1',
		 				msg:'',
		 				result:{

		 					orderId: orderId,
		 					orderTotal:orderTotal,
		 					orderList: doc.orderList,
		 					
		 						}
							});
 		})

})

//产生订单列表  1.购物车订单，
router.post('/orderItem',function(req,resp,next){
	var addressId=req.body.addressId;
	//var orderTotal=req.body.orderTotal;
	//var orderStatus=req.body.orderStatus;
	//var addressId='4';
	var orderTotal=0;
	console.log('post  addressId: '+addressId);
	
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 	
 		Users.findOne({'userId':userId},function(err,doc){
 			
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					var orderGoods=[];
					var addressDetail='';
					// var order={

					// };
 					var cartList=doc.cartList;
 					cartList.forEach(function(item){
 						if(item.check=='1'){
 							orderTotal +=item.salePrice*item.productNum;
 							orderGoods.push(item);
 						}	
 					});

 					var  addressList=doc.addressList;
 					addressList.forEach(function(item){
 						if(item.addressId==addressId){
 							console.log('addressId: '+addressId);
 							addressDetail=item;
 						}	
 					});
 					console.log('addressDetail: '+addressDetail);
 					console.log('orderGoods :'+orderGoods);
 					//生成随机编号
 					// var start=Math.floor(Math.random()*10);
 					// var end=Math.floor(Math.random()*10);
 					// var mid=new Date().Format("yyyyMMddhhmmss");
 					// var orderId=start+mid+end;
 					// console.log('orderId: '+orderId);

 					// var createdTime=new Date().Format('yyyy-MM-dd hh:mm:ss');

 					// order.orderId=orderId;
 					// order.orderGoods=orderGoods;
 					// order.addressDetail=addressDetail;
 					// order.createdTime=createdTime;
 					// order.orderStatus='1';  // '1' 为支付完成状态。
 					// order.orderTotal=orderTotal;
 					var order =orderInfo(orderGoods,orderTotal,'-1',addressDetail);

 					doc.orderList.push(order);
 					
 					doc.save(function(err,doc){
 					if(err){
 							resp.json({
				 				status:'2',
				 				msg:err.message
				 				
			 					});

 							console.log('保存doc 失败'+err);
 						}
 					else{
 						resp.json({
		 				status:'1',
		 				msg:'',
		 				result:{

		 					orderId: order.orderId,
		 					orderTotal:orderTotal,
		 					//orderList: doc.orderList,
		 					
		 						}
							});


 						}
 				});







 				}

 			}

 		})

 	}



})

// 更新订单状态。
router.post('/updateOrder',function(req,resp,next){

	var orderId = req.body.orderId;
	var orderTotal = req.body.orderTotal;
	var flag = req.body.flag;
	console.log('请求的 orderiD: '+orderId);
	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		Users.updateOne({'userId':userId,'orderList.orderId':orderId},{'orderList.$.orderTotal':orderTotal,'orderList.$.orderStatus':'1'},function(err,doc){
	 			if(err){
	 				resp.json({
						status: '0',
						msg: err.message
					})
	 			}
	 			else{
	 				

					resp.json({
						status:'1',
						msg:'',
						result:'success'
						});
		 						
	 			}
 			
 			});
 		
 		if(!flag) // false 购物车购买
 			
 			//const user=await Users.updateOne({'userId':userId,'orderList.orderId':orderId},{'orderList.$.orderTotal':orderTotal,'orderList.$.orderStatus':'1'});
 		
 		{


 			Users.findOne({'userId':userId}).then((user) =>{
 				if(user){
 					var cartList=user.cartList;
 					if(cartList){
 						cartList=cartList.filter(function(item) {
 							return item.check!='1';
 						});
 					}
 					
 					user.cartList =cartList;
 					return user;

 				}
 			}).then((user) =>{
 				return user.save();
 			}).then((re) =>{
 				console.log('更新后的购物车：'+re.cartList);
				resp.json({
					status:'1',
					msg:'',
					result:{
						orderList: re.orderList,
						cartList: re.cartList
					}
					});
 			}).catch((err) =>{
 				console.log("err"+err);
 			})
 		}
 		
 	}
 	else{

		resp.json({
		status: '0',
		msg: '用户未登录'
			})
	}
})

// 得到  预订单
router.post('/orders',function(req,resp,next){
 	console.log("cookie  cart: "+ req.headers.cookie);
 	var id = req.body.orderId;
 
 	var orderGoods =[];
 	var orderTotal=0;
 	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
				console.log('error: '+err);
 			}
 			else{
 				if(doc && doc.orderList){
 					if(id){
 						console.log(' 用户：orderList'+doc.orderList);
 						doc.orderList.forEach(function(order){
 							console.log('order:'+order);
 							if(order && order.orderId && (order.orderId==id)){
 								orderTotal= order.orderTotal;
 								orderGoods=order.orderGoods;
 								var list=[];

 								resp.json({
					 				status:'1',
					 				msg:'',
					 				result:{
					 					orderGoods: orderGoods,
					 					orderTotal: orderTotal,
					 					
					 				}
				 				});
 							}
 						})
 					}
 					else{
 						console.log('orderList: '+doc.orderList);
 						resp.json({
			 				status:'0',
			 				msg:'无订单orderId',
			 				result:''
			 				
	 					});
 					}
	 				
 				}else{
 					console.log('用户未登录，无法获得订单消息');
 					resp.json({
					status: '0',
					msg: '用户未登录'
					})
 				}
 			}
 			
 		})
 	}

 	
 }) 


router.get('/orderDetail', function(req, resp, next) {
	/*optional stuff to do after success */
	//console.log('address');
	var orderId=req.query.orderId;

	if(req.headers.cookie){
 		var userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 		Users.findOne({'userId':userId},function(err,doc){
 			if(err){
 				resp.json({
					status: '0',
					msg: err.message
				})
 			}
 			else{
 				if(doc){
 					var list=[];
 					var orderList=doc.orderList;
 					console.log('订单列表：'+orderList);
 					if(orderList){
 						if(orderId && orderList){
 							orderList.forEach(function(item){
		 						if(item && item.orderId && (item.orderId==orderId)){
		 							list.push(item);
		 							
		 						}
	 						
 							});
 							console.log('orderID:'+orderId+'  list:'+list);
							resp.json({
				 				status:'1',
				 				msg:'',
				 				result:{
				 					orderList: list
				 					}
				 					
								});
 						}
 						else{
 							resp.json({
				 				status:'2',
				 				msg:'',
				 				result:{
				 					orderList: orderList
				 					} 
				 					
								});
 						}
 						
		 					
 					}
 				}
 							
 				
 			}
 			
 		})
 	}
	

});

module.exports = router;
