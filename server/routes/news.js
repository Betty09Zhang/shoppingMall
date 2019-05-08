var express=require('express')

var mongoose=require('mongoose')

var router=express.Router();

var News=require('../model/news');
var Newsdetails=require('../model/newsDetails');

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

router.get('/newsList',function(req,resp,next){
	// resp.send('获取服务端信息  goods');
	// 接收到请求后，利用模型取数据库里面查找  有findAPI  
	News.find({},function(err,doc){  // doc 为查出来的列表集合
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

//
router.get('/newsDetails',function(req,resp,next){
	// resp.send('获取服务端信息  goods');
	// 接收到请求后，利用模型取数据库里面查找  有findAPI  
	var id=req.query.id;
	Newsdetails.find({},function(err,doc){  // doc 为查出来的列表集合
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

router.get('/newsDetails/:id',function(req,resp,next){
	// resp.send('获取服务端信息  goods');
	// 接收到请求后，利用模型取数据库里面查找  有findAPI  
	var id=req.params.id;
	console.log("id:"+id);
	Newsdetails.find({"id":id},function(err,doc){  // doc 为查出来的列表集合
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

router.post('/newsDetails/addClick', function(req,resp,next){
	//更新数据的查询条件
	var id=req.body.id; var clicks=req.body.clicks;
	var whereStr = {'id':id};
	clicks=clicks+1;
	var updateStr = {'click': clicks};
	console.log("id:"+id+' '+'updateStr'+clicks);
	Newsdetails.update(whereStr,updateStr,function(err,res){
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
				res:res
			})
		}
	})

})

router.post('/newsList/addClick',function(req,resp,next){
	//更新数据的查询条件
	var id=req.body.id; var clicks=req.body.clicks;
	var whereStr = {'id':id};
	clicks=clicks+1;
	var updateStr = {'click': clicks};
	console.log("id:"+id+' '+'updateStr'+clicks);
	News.update(whereStr,updateStr,function(err,res){
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
				res:res
			})
		}
	})
})

module.exports=router;