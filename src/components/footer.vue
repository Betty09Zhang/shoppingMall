<template>

	<div class="foot">
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item mui-active" :to="{name:'home'}">
				<span class="mui-icon icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			
			<router-link class="mui-tab-item"  :to="{name:'cart'}">
				<span class="mui-icon icon-cart"><span class="mui-badge" v-if="count>0">{{count}}</span></span>
				<span class="mui-tab-label" >购物车</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name: 'goods'}">
				<span class="mui-icon icon-search"></span>
				<span class="mui-tab-label">商品查找</span>
			</router-link>
			<router-link class="mui-tab-item" :to="{name:'vip'}">
				<span class="mui-icon icon-vimeo"></span>
				<span class="mui-tab-label">会员</span> 
			</router-link>
			
		</nav>
		
	</div>
	

</template>       

<script>
	import connect from '../connector/connector.js';
	import {mapState, mapActions} from 'vuex';
	import {setStore,getStore} from '../util/localStorage.js'
	export default{
			data(){
				return{
					
				}
			},
			mounted(){
				console.log('footer');
				
				//this.getCart();
				
			},
			computed:{
				...mapState(['count'])
			},
			methods:{
				...mapActions(['getCartCount','getCartList']),
				getCart(){
		             this.$ajax.get('/users/cart').then((response)=>{
		                if(response){
		                  var re=response.data;
		                  if(re.status=='1'){
		                      var cartList=re.result.cartList;
		                      
		                    // vuex 状态管理购物车
		                      this.getCartList(cartList);


		                      console.log('购物车数量：'+re.cartCount);
		                      var payload={
		                      	flag:'add',
		                      	count: re.cartCount
		                      }
		                      //this.$store.commit("getCount",payload);
		                     // this.sum=re.cartCount;
		                     this.getCartCount(payload);
		                  }
		                }
		                else{
		                  console.log('获取购物车失败！');
		                }
	             	})
         	 	}
			}
		
		}

</script>
<style scoped>
 .foot{
  	color:#007aff;
  }
	
</style>