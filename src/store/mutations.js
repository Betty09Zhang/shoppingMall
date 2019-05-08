import {setStore} from '../util/localStorage.js';
const getNickName='getNickName';
const getCartCount = 'getCartCount';
const getCartList = 'getCartList';
const setClearCart = 'setClearCart';
const setOrderList = 'setOrderList';

export default{
	[getNickName](state,name){
		state.username = name;
		setStore('username',name);
	},
	[setClearCart](state,num){
		state.count = num;
	},
	[getCartCount](state,payload){
		if(payload.flag == 'add'){
			state.count += payload.count;
		}
		else if(payload.flag == 'minus'){
			state.count-= payload.count;
		}
	},
	[getCartList](state,cartList){
		state.cartList = cartList;
	},
	[setOrderList](state,orderList){
		state.orderList=orderList;
	}

}