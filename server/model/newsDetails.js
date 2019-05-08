var mongoose=require('mongoose')

//定义schema
var Schema=mongoose.Schema;

//定义模型  new Schema 传递数据
var newsDetailSchema=new Schema({
	"id": Number,
	"title":String,
	"click":Number,
	"add_time": Date,
	"content": String
});

//把商品模型输出去调方法
module.exports=mongoose.model('NewsDetails',newsDetailSchema);