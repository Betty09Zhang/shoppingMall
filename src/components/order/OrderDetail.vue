<template>
	<div>
		<headVue goBack="true" :headTitle="'Order Details'" style="position: fixed">
      </headVue>
   
    <div class="container" style="margin-top: 40px">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>My Orders</span></h2>
            <form class="form" action="#" v-on:keyup.enter="searchById">
              <i class="icon-search" @click="searchById"></i>
              <input type="text" name="" placeholder="订单编号搜索" class="input-search" v-model="infoId">
            </form>
            <span>{{infoId}}</span>
  
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>Items</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
                <li>State</li>
              </ul>
            </div>
            <ul class="cart-item-list"  v-if="order && order.orderId" v-for="order in orderList" :key="order.orderId">

            	<div style="color:red;font-weight: bold;padding: 10px 10px;">
            		<p>订单编号：<span> {{order.orderId}}</span></p>
                	<p>创建时间：<span> {{order.createdTime}}</span></p>
		            <span>Order total:</span>
		            <span>{{order.orderTotal| currency('$')}}</span>
             
            	</div>
            	
              <li v-for="cart in order.orderGoods" :key="cart.productId">
                <div class="cart-tab-1">
                  
                  <div class="cart-item-pic">
                    <router-link :to="{path:'/goods/goodsDetail',query: {id: cart.productId}}"><img :src="'/static/'+cart.productImage"></router-link>
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{cart.productName}}</div>
                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{cart.salePrice}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×{{cart.productNum}}</span>
                      </div>
                    </div>
           
                  </div>
                </div>
      
                <div class="cart-tab-4">
                  <div class="item-price-total" >{{(cart.productNum*cart.salePrice) | currency('$')}}</div>
                </div>
                <div class="cart-tab-5">
                  <div class="item-status" >{{order.orderStatus=='1'?'已支付':'未支付'}}</div>
                </div>

              </li>

             
             

            </ul>
    
          </div>
        </div>

            

          </div>
        </div>
      </div>
	</div>
</template>
<script>
import {currency} from '../../util/currency'
import {setStore,getStore} from '../../util/localStorage'
import {mapState,mapActions} from 'vuex'
	export default{
		data(){
			return{
				//orderList:[],
        orderId: '',
        infoId: ''

			}
		},
		created(){
      if(this.$route.query.orderId){
        this.orderId=this.$route.query.orderId;
      }
     
      this.initOrderList();
      //this.orderList =JSON.parse(getStore('orderList'));
     
		},
    computed:{
     ...mapState(['orderList'])
    },
		methods: {
      ...mapActions(['setOrderList']),
			initOrderList(){
				this.$ajax.get('/users/orderDetail',{params: {'orderId': this.orderId}}).then((response) => {
					if(response){

            console.log('status:'+response.data.status);
						var re=response.data.result;
          //  localStorage 存储
					//	this.orderList =re.orderList;
          //  setStore('orderList',re.orderList);

          // vuex 存储
            this.setOrderList(re.orderList);
						console.log('orderlist: '+re.orderList);
					}
				});
			},

      searchById(){
          if(this.infoId){ 
            console.log('infoId: '+this.infoId);
            this.orderId = this.infoId;
            this.initOrderList();
          }
      }
		},
		filters:{
			currency,
		}
	}
</script>
<style scoped>
	.bgId{
		background-color: white;
	}

  .form{
  
  width:80%;
  display:block;
  position:relative;
 
  height: 50px;
  margin: 0 auto;
  margin-bottom: 20px;

  
  
}

.item-status{
  text-align:right;
  margin-right:10px;
  color: red;
}

.icon-search{ 
  position:absolute;
  left:70px;
  top:25px;
  
}
.input-search{
  width:100%;
  height:80%;
  border-radius:15px;
  margin-top:10px;
  text-align:left;
  padding-left:100px;


}
input::-webkit-input-placeholder{
  font-size: 20px;
}
</style>