var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var userSchema=new Schema({
	userId: String,
	name: String,
	psw: String,
	cartList:[{
			"productId": Number,
			"productName":String,
			"salePrice": Number,
			"productImage": String,
			"productNum":Number,
			"check":String
		
	}],
	orderList:[{
		"orderId": String,
		"orderStatus":String,
		"orderTotal": Number,
		"createdTime": String,
		"addressDetail": {
			"addressId": String,
			"addressName":String,
			"postCode": String,
			"tel":String,
			"receiver": String,
			"isDefault":Boolean
		},
		"orderGoods":[{
			"productId": Number,
			"productName":String,
			"salePrice": Number,
			"productImage": String,
			"productNum": Number,
			"check": String
		}]

	}],
	addressList:[{
		"addressId": String,
		"addressName":String,
		"postCode": String,
		"tel":String,
		"receiver": String,
		"isDefault":Boolean
	}]

})

//把商品模型输出去调方法
module.exports=mongoose.model('Users',userSchema);