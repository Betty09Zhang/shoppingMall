var mongoose=require('mongoose')

//定义schema
var Schema=mongoose.Schema;

//定义模型  new Schema 传递数据
var newsSchema=new Schema({
	"title":String,
	"add_time": Date,
	"click": Number,
	"id":Number
});

//把商品模型输出去调方法
module.exports=mongoose.model('News',newsSchema);