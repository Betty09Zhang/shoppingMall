<template>
	<div>
		
		<headVue goBack="true" :headTitle="'商品详情'"></headVue>
		<div class="showPic">
                <a href="#"><img :src=" '/static/'+item.productImage" alt=""></a>
        </div>
        <div class="pro-detail">
          <div class="text-show">{{item.productName}}</div>
          <div class="item-text"><span>价格：</span>  {{item.salePrice | currency('$')}}</div>

          <div class="item-quantity">
          	<span class="item-text">数量:</span>
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <a class="input-sub" @click="edit('minus',cart)">-</a>
                        <span class="select-ipt">{{initCount}}</span>
                        <a class="input-add" @click="edit('add',cart)">+</a>
                      </div>
                    </div>
          </div>

          <div class="item-price-total">{{(orderTotal=initCount* item.salePrice) | currency('$')}}</div>
               
          <div class="btn-area goCart" >
            <a class="btn btn--m" @click='addCart(item.productId,initCount)'>加入购物车</a>
          </div>
          <div class="btn-area payOff">
            <a class="btn btn--m" @click='purchase(item.productId,initCount,orderTotal)'>&nbsp;立即购买&nbsp;</a>
          </div>
        </div>
         <alert-tip v-if="showAlert" alertText="请先登录" class="albutton" >
            <button slot="ensure" @click='signIn' >确认</button>
       </alert-tip>

        
	</div>
</template>
<script>
import {currency} from '../../util/currency.js'
 import '../.././assets/css/login.css'
 import '../.././assets/css/base.css'
 import {mapState, mapActions} from 'vuex'
	export default{
		data(){
			return{
				item:{},
				id: null,
				//initCount:1,
				showAlert: false,
        orderTotal: null
			}
		},
		created(){
			this.id= this.$route.query.id;
			console.log('id :'+this.id);
			if(this.id){
				this.getGoodsDetail(this.id);
			}
		},
		mounted(){
			
		},
    computed:{
      ...mapState(['username']),
      initCount:1
    }, 
		filters: {
			currency: currency
		},
		methods: {
			...mapActions(['getCartCount']),
      purchase(id,count,total){
          // 判断是否登录
          if(this.username){
             var param ={productId:id,productNum:count};
             this.$router.push({name:'addressChoose',params:param});
          }
          else{
            this.showAlert = true;
          }
      },
			getGoodsDetail(id){
				var param={'id': id};
				this.$ajax.get('goods/getById',{params: param})
				.then((response) =>{
					if(response){
						var re=response.data;
						console.log('product: '+re.result);
						
						this.item=re.result;
						
						
					}
				})
			},
			signIn(){
              this.showAlert = false;
              this.$router.push({name:'login'});
            },
			addCart(pid,count){

              if(this.username==''){
                this.showAlert = true;
              }
              else{
                 this.$ajax.post('/goods/addcart',{'productId':pid,'addCount':count}).then((response)=>{
                
                  if(response){
                     console.log(response.data.status);
                    if(response.data.status=='0'){
                          console.log('需登录');
                           this.showAlert=true;
                    }
                    else{
                     
                       var payload={
                            flag:'add',
                            count: count
                          }
                          //this.$store.commit("getCount",payload);
                          this.getCartCount(payload);
                    }
                   
                   
                  }
                
                
               
              })
              }
             
            },

            edit(flag,item){
                if(flag=='add'){
                  this.initCount++;
                }
                else if(flag=='minus' && this.initCount>1){
                  --this.initCount;
                }
            }
		}

	}
</script>
<style lang="scss" scoped>
@import '../../style/mixin'; 
	.showPic{
		width: 100%;
		heigth: 40%;
		background-color: rgba(255,255,255,0.8);
		text-align:center;


	}

	.pro-detail{
		width:100%;
		text-align:center;
		position: relative;
	}
	.text-show{

		padding-top: 1rem;
		font-size: 2rem;
		color: black;
		font-weight: bold;
	}

	.input-sub,.input-add{
    min-width: 40px;
    height: 100%;
    border: 0;
    color: #605F5F;
    text-align: center;
    font-size: 16px;
    overflow: hidden;
    display: inline-block;
    background: #f0f0f0;
  }

   .item-text{
  	color: #D1434A;
  padding: 1rem 1rem ;
  	font-size: 1.7rem;
  	line-height: 1.5rem;
  	vertical-align: super;
  	font-weight: bold;
  	font-family: "moderat", sans-serif;
  }
  .item-quantity .select-self-area{
    background:none;
    border: 1px solid #f0f0f0;
  }
  .item-quantity .select-self-area .select-ipt{
    display: inline-block;
    padding:0 3px;
    width: 30px;
    min-width: 30px;
    text-align: center;
    color: red;

    
 	
  }

  .goCart{
  	position: absolute;
  	top: 130%;
  	left:30%;
  }
  .payOff{
  	position: absolute;
  	top: 130%;
  	left:60%;
  }
</style>