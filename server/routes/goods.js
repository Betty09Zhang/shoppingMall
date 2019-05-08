var express=require('express')

var mongoose=require('mongoose')

var router=express.Router();

var Goods=require('../model/goods');

var Users=require('../model/users');



//连接数据库
mongoose.connect('mongodb://localhost:27017/mall');
// Connections Exported from Studio 3T -- https://studio3t.com/
// Exported on 2018-12-20 19:27:55

// connectMall

mongoose.connection.once("open",function(){
	console.log("connected success")
});

mongoose.connection.on("error",function(error){
	console.log("connected fail")
});



//
// router.get('/',function(req,resp,next){
// 	// resp.send('获取服务端信息  goods');
// 	// 接收到请求后，利用模型取数据库里面查找  有findAPI  
// 	Goods.find({},function(err,doc){  // doc 为查出来的列表集合
// 		if(err){
// 			resp.json({
// 				status: '0',
// 				msg: err
// 			})
// 		}
// 		else{
// 			resp.json({
// 				status:'1',
// 				msg: '',
// 				count: doc.length,
// 				list:doc
// 			})
// 		}
// 	})
	
// })


//分页
router.get('/list',function(req,resp,next){
	console.log("get");
	// resp.send('获取服务端信息  goods');
	// 接收到请求后，利用模型取数据库里面查找  有findAPI  

	
	//1.分页
	var pageIndex=parseInt(req.query.pageIndex);
	console.log("pageIndex"+pageIndex);
	var  pageSize=parseInt(req.query.pageSize);
	console.log("pageSize"+pageSize);

	var priceSearch=req.query.priceOrign;
	console.log("priceSearch: "+priceSearch);
	var reg=/(\d+)[^0-9]*(\d*)/;
	console.log("priceSearch: "+priceSearch);
	var para={};

	if(priceSearch!="" && reg.test(priceSearch)){
		
		console.log('price range');
		var priceGt=priceSearch.match(reg)[1];
		var priceLt=priceSearch.match(reg)[2];
		if(priceGt!=""){
	//查询条件
			 para={"salePrice": {"$gt":parseInt(priceGt),"$lt":parseInt(priceLt)} };
		}
		else{
			 para={"salePrice": {"$gt":parseInt(priceGt)} };
		}
	}

	

	

	var nums=pageSize*(pageIndex-1);
	//2. 升降序
	var sort=req.query.sort;

	var goodsModel=Goods.find(para).skip(nums).limit(pageSize);
	console.log("goggo");
	goodsModel.sort({'salePrice':sort});
	goodsModel.exec(function(err,doc){
		console.log("goggo");
			if(err){
				resp.json({
					status: '0',
					msg: err
				})
			}
			else{
				resp.json({
					status:'1',
					msg: '',
					count: doc.length,
					list:doc
				})
			}
	})
})

//购物车添加商品  传递添加商品数量
router.post('/addcart',function(req,resp,next){

	var userId='';
	if(req.headers.cookie){
 		userId=req.headers.cookie.match(/(userId=(\d+))/)[2];
 		console.log('useriD: CART'+userId);
 	}
	var productId=req.body.productId;
	var addCount=req.body.addCount;
	console.log("productId:"+productId);

	

	Users.findOne({'userId':userId},function(err,userDoc){
		if(err){
			console.log("user error");
			resp.json({
					status: '0',
					msg: err
				})
		}
		else{
			console.log("user success");
			if(userDoc){
				console.log("userDoc"+userDoc);
				var goodsItem='';
				userDoc.cartList.forEach(function(item){
							if(item.productId==productId){
								goodsItem=item;
								item.productNum=item.productNum+addCount;
								
							}
						});
				//直接查询到商品后加入到购物车
				Goods.findOne({"productId":productId},function(err2,doc2){
					if(err2){
						resp.json({
								status: '0',
								msg: err2.message
							})
					}
					else{
						//商品已存在。重新保存一次
						if(goodsItem){
							userDoc.save(function(doc3,user,err3){
									if(err3){
										resp.json({
										status: '0',
										msg: err3.message
									})
								}
								else{
									console.log('result:'+doc3);
									console.log('影响条数：'+user);
									resp.json({
										status: '1',
										msg:'',
										result:{
											cartList: user.cartList
										}
									})
								}
							})
						}
						else{
							if(doc2){
								console.log("00000000000000");
								console.log('查询到商品信息 待添加商品');
								var temp={};
								for(key in doc2){
									temp[key]=doc2[key];
								}
								temp['productNum']=1;
								temp['check']=1;
								console.log("temp"+temp);
								userDoc.cartList.push(temp);

								userDoc.save(function(err4,userDoc){
										if(err4){
											resp.json({
											status: '0',
											msg: err4.message
										})
									}
									else{
										console.log('后端 cartList:'+userDoc.cartList);
										resp.json({
											status: '1',
											msg:'',
											result:{
												cartList: userDoc.cartList
											}
										})
									}
								})
							}
							

						}
					}

				})
				

				}

			}

		})

})

router.get('/getById',function(req,resp,next){
	var productId = req.query.id;
	console.log('productId：'+productId);
	Goods.findOne({"productId":productId},function(err2,doc2){
					if(err2){
						resp.json({
								status: '0',
								msg: err2.message
							})
					}
					else{
						console.log("doc2: "+doc2);
						resp.json({
							status:'1',
							msg:'查询成功',
							result: doc2
						})
					}
	})
})

module.exports=router;