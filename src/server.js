var express=require('express')

var app=express()

var router=require('router')



app.listen('3000',function(){
	console.log('服务器打开')
})


// 当请求。。路径时，服务器返回数据
app.get('/home'，function(req,resp){
	resp.render('1.json')
})