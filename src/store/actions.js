export default{
	getNickName({commit,state},name){
		commit('getNickName',name);
	},
	getCartCount({commit,state},payload){
		commit('getCartCount',payload);
	},
	getCartList({commit,state},cartList){
		commit('getCartList',cartList);
	},
	setClearCart({commit,state},num){
		commit('setClearCart',num);
	},
	setOrderList({commit,state},orderList){
		commit('setOrderList',orderList);
	}

}