var mongoose=require('mongoose')

//定义schema
var Schema=mongoose.Schema;

//定义模型  new Schema 传递数据
var productSchema=new Schema({
	"productId": Number,
	"productName":String,
	"salePrice": Number,
	"productImage": String
});

//把商品模型输出去调方法
module.exports=mongoose.model('Goods',productSchema);