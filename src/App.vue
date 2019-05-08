<template>
	<div>
		<transition name="router-fade" mode="out-in">
			<keep-alive>
				<router-view></router-view>
			</keep-alive>
		</transition>
		
		
		<footVue></footVue>
		
	</div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default{
		data(){
			return{

			}
		},
		created(){
			this.getCart();
			console.log('App  Start count:'+this.count);
		},
		computed:{
			...mapState(['count'])
		},
		methods:{
			...mapActions(['getCartList','getCartCount']),
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
	.router-fade-enter-active,router-fade-leave-active{
	 	transition: opacity 1s;
	 }
	
	.router-fade-enter{
		opacity: 0;
	}
</style>
