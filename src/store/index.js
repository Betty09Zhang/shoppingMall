import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import Vue from 'vue'

Vue.use(Vuex)

const state ={
	username: '',
	signFlag:true, // 默认登录
	count: 0,
	cartList: [],
	orderList:[]
}
export default new Vuex.Store({
	state,
	mutations,
	actions
})