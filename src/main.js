 import Vue from 'vue'
 import App from './App.vue'
 import Vuex from 'vuex'

 import Axios from 'axios'
 import qs from 'qs'

import Moment from 'moment'

import store from './store'

import currency from './util/currency.js'
 //挂载
 Vue.prototype.$ajax=Axios;
 Vue.prototype.qs=qs;

 Vue.config.devtools = true;

 Axios.defaults.baseURL='http://127.0.0.1:4000';
 Axios.defaults.withCredentials=true;



 Vue.filter('converDate',function(value) {
 	return Moment(value).format('YYYY-MM-DD');
 });

 Vue.filter('currency',currency);


import './static/vendor/mui/dist/css/mui.css'
import './assets/stylus/style.css'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'

import Mint from 'mint-ui'
import { Search } from 'mint-ui'


import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'





import { Swipe, SwipeItem } from 'mint-ui'

import VueRouter from 'vue-router'

import infiniteScroll from 'vue-infinite-scroll'



import footVue from './components/footer.vue'
import headVue from './components/header.vue'
import innerVue from './components/inner.vue'
import detailVue from './components/detail.vue'
import homeVue from './components/home.vue'
import musicVue from './components/music.vue'
import movieVue from './components/movie.vue'
import newsListVue from './components/news/newsList.vue'
import newsDetailVue from './components/news/newsDetail.vue'

import entainmentVue from './components/entainment.vue'

import addressVue from './components/address.vue'
import cartVue from './components/cart.vue'
import vipVue from './components/vip.vue'
import searchVue from './components/search.vue'
import navBarVue from './components/common/navBar.vue'
import goodsListVue from './components/goods/GoodsList.vue'
import navFooterVue from './components/common/navFooter.vue'
import modal from './components/modal/modal.vue'
import orderVue from './components/order.vue'
import orderSuccessVue from './components/orderSuccess.vue'
import loginVue from './components/login/login.vue'
import loginOutVue from './components/login/logOut.vue'
import headTop from './components/common/headTop.vue'
import alertTip from './components/modal/alertTip.vue'
import goodsDetailVue from './components/goods/GoodsDetail.vue'
import orderDetailVue from './components/order/OrderDetail.vue'



Vue.component(Search.name, Search);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//引入全局组件 需要的组件对象

Vue.component('modal',modal);
Vue.component('navbar',navBarVue);
Vue.component('navfooter',navFooterVue);

Vue.component(Header.name, Header);


Vue.component('footVue',footVue);

Vue.component('headVue',headVue);
Vue.component('headTop',headTop);




Vue.component('musicVue',musicVue);

Vue.component('movieVue',movieVue);
Vue.component('entainmentVue',entainmentVue);
Vue.component('orderSuccessVue',orderSuccessVue);

Vue.component('vipVue',vipVue);
Vue.component('searchVue',searchVue);
Vue.component('cartVue',cartVue);
Vue.component('newsListVue',newsListVue);
Vue.component('newsDetailVue',newsDetailVue);
Vue.component('addressVue',addressVue);
Vue.component('orderVue',orderVue);
Vue.component('loginVue',loginVue);
Vue.component('loginOutVue',loginOutVue);
Vue.component('alertTip',alertTip);


Vue.use(Vuex);
Vue.use(Mint);
Vue.use(VueRouter);
Vue.use(infiniteScroll);

let router=new VueRouter({

	linkActiveClass: 'mui-active',

	routes:[
		
		{path:'/',redirect:{name:'home'}},

		{name:'home',path:'/home',component:homeVue},
		{name:'vip',path:'/vip',component:vipVue},
		{name:'search',path:'/search',component:searchVue},
		{name:'cart',path:'/users/cart',component:cartVue},
		{name:'newsList',path:'/news/newsList',component:newsListVue},
		{name:'news.detail',path:'/news/newsdetail',component:newsDetailVue},
		{name:'goods',path:'/goods/list',component:goodsListVue},
		{name:'addressChoose',path:'/users/address',component:addressVue},
		{name:'order',path:'/users/order',component:orderVue},
		{name:'orderSuccess',path:'/orderSuccess',component:orderSuccessVue},
		{name:'login',path:'/login',component:loginVue},
		{name:'loginOut',path:'/loginOut',component:loginOutVue},
		{name:'goodsDetail',path:'/goods/goodsDetail',component:goodsDetailVue},
		{name:'orderDetail',path:'/orderDetail',component:orderDetailVue},


	]


	
})

// var store=new Vuex.Store({
// 	state:{
// 		count:0,
// 		nickname:''
// 	},
// 	mutations:{
// 		getCount(state,payload){
// 			if(payload.flag=='add'){
// 				console.log('数量count：'+store.state.count);
// 				console.log('数量传参：'+payload.count);
// 				store.state.count+=payload.count;
// 				console.log('数量结果：'+store.state.count);
// 			}
// 			else if(payload.flag=='minus'){
// 				 store.state.count-=payload.count;
// 			}
// 		},
// 		getNickName(state,name){
// 			store.state.nickname=name;
// 		}
// 	}
// })

new Vue({
	el:'#myapp',
	store,
	router: router,
	render: function(create){
		return create(App);
	}
})
