var mongoose=require('mongoose');

//定义schema
var Schema=mongoose.Schema;

//定义模型  new Schema 传递数据
var addressSchema=new Schema({
	"addressId": String,
	"addressName":String,
	"postCode": String,
	"tel":String,
	"receiver": String
});

//把商品模型输出去调方法
module.exports=mongoose.model('Address',addressSchema);