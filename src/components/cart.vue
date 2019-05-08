<template>
  <div>
    <headVue goBack="true" :headTitle="'Cart'" style="position: fixed">
      </headVue>
    <div class="container" style="margin-top: 50px">
      <div class="cart">
        <div class="page-title-normal">
          <h2 class="page-title-h2"><span>My Cart</span></h2>
        </div>
        <div class="item-list-wrap">
          <div class="cart-item">
            <div class="cart-item-head">
              <ul>
                <li>Items</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
                <li>Edit</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="cart in cartList" :key="cart.productId">
                <div class="cart-tab-1">
                  <div class="cart-item-check">
                    <a href="javascipt:;" class="checkbox-btn item-check-btn" v-bind:class="{'check': cart.check=='1'}" @click="edit('',cart)">
                      <svg class="icon icon-ok">
                        <use xlink:href="#icon-ok"></use>
                      </svg>
                    </a>
                  </div>
                  <div class="cart-item-pic">
                    <img :src="'/static/'+cart.productImage">
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
                    <div class="select-self select-self-open">
                      <div class="select-self-area">
                        <a class="input-sub" @click="edit('minus',cart)">-</a>
                        <span class="select-ipt">{{cart.productNum}}</span>
                        <a class="input-add" @click="edit('add',cart)">+</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total" >{{(cart.productNum*cart.salePrice) | currency('$')}}</div>
                </div>
                <div class="cart-tab-5">
                  <div class="cart-item-opration">
                    <a href="javascript:;" class="item-edit-btn" @click="confirmItem(cart.productId)">
                      <svg class="icon icon-del" @click="showAlert=true">
                        <use xlink:href="#icon-del" ></use>
                      </svg>
                    </a>
                  </div>
                </div>

              </li>
            </ul>
            
            <alert-tip v-if="showAlert" alertText="确定删除该商品？">
                <button slot="ensure" @click="clearItem">确认</button>
            </alert-tip>
          
          </div>
        </div>

        <div class="cart-foot-wrap">
          <div class="cart-foot-inner">
            <div class="cart-foot-l">
              <div class="item-all-check" >
                <a href="javascript:void"   @click="allSelected">
                  <span class="checkbox-btn item-check-btn"  v-bind:class="{'check': allSelectedFlag}" >
                      <svg class="icon icon-ok"><use xlink:href="#icon-ok"/></svg>
                  </span>
                  <span>Select all</span>
                </a>
              </div>
            </div>
            <div class="cart-foot-r">
              <div class="item-total">
                Item total: <span class="total-price">{{countSum | currency('$')}}</span>
              </div>

              <div class="btn-wrap">
                <router-link :to="{name:'addressChoose'}" class="btn btn--red" v-bind:class="{'btn--dis':this.countSelect==0}">Checkout</router-link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="footer__wrap">
        <div class="footer__secondary">
          <div class="footer__inner">
            <div class="footer__region">
              <span>Region</span>
              <select class="footer__region__select">
                <option value="en-US">USA</option>
                <option value="zh-CN">China</option>
                <option value="in">India</option>
              </select>
            </div>
            <div class="footer__secondary__nav">
              <span>Copyright © 2017 IMooc All Rights Reserved.</span>
              <a href="http://us.lemall.com/us/aboutUs.html">
                About Us
              </a>
              <a href="http://us.lemall.com/us/termsofUse.html">
                Terms &amp; Conditions
              </a>
              <a href="http://us.lemall.com/us/privacyPolicy.html">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
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
  }
</style>
<script>
import {currency} from '.././util/currency.js'
import {mapState, mapActions} from 'vuex'
import {setStore,getStore} from '.././util/localStorage.js'
    export default{
        data(){
            return{
               
                isShow:false,
                productId:'',
                showAlert: false
               
            }
        },
        mounted(){

          this.getCart();

        },

        filters:{
            currency: currency
        },
        computed:{
          ...mapState(['count','cartList']),
          allSelectedFlag(){
           return this.countSelect==this.cartList.length;
        },

           countSelect(){
           var count=0;

            for(var i=0;i<this.cartList.length;i++){
              if(this.cartList[i].check=='1'){
                ++count;
              }
            }
          return count;
        },

        countSum(){
            var sum=0;
            this.cartList.forEach(function(item){
              if(item.check=='1'){
                sum+=item.productNum*item.salePrice;
              }
            })
            return sum;
          }
        },
        methods:{

           ...mapActions(['getCartCount','getCartList']),
          allSelected(){

              var temp=this.allSelectedFlag;
              console.log('allSelectedFlag:'+temp);
              this.allSelectedFlag=!this.allSelectedFlag;

              var value=temp? '-1':'1';

            for(var i=0;i<this.cartList.length;i++){
              this.cartList[i].check=value;
            }
            
          this.$ajax.post('/users/editCheckAll',{'check': value}).then((response)=>{
                if(response){
                  if(response.data.status=='1'){
                    console.log('成功全切换');
                  }
                  else{
                    console.log('状态切换失败');
                  }
              }
            })


          },

          edit(flag,item){
              if(flag=='minus'){
                  if(item.productNum>1){
                    --item.productNum;
                      var payload={
                            flag:'minus',
                            count: 1
                          }
                     // this.$store.commit("getCount",payload);
                    this.getCartCount(payload);
                  }
                  else{
                    item.productNum=1;
                  }
              }
              else if(flag=='add'){
                ++item.productNum;
                var payload={
                            flag:'add',
                            count: 1
                          }
                //this.$store.commit("getCount",payload); 
                  this.getCartCount(payload);     
              }
              else{
                item.check=item.check=='1'? '-1': '1'; 
               
                     
              }
              this.$ajax.post('/users/edit',{'productId':item.productId,'productNum':item.productNum,'check':item.check}).then((response)=>{
                  if(response){
                    if(response.data.status=='1'){
                      console.log('修改成功！');
                    }
                  }
              })

          },
          confirmItem(id){
            this.showAlert = true;
            this.productId=id;
          },
          // closeModal(){
          //   this.isShow=false;
          // },

          getCart(){
             this.$ajax.get('/users/cart').then((response)=>{
                if(response){
                  var re=response.data;
                  if(re.status=='1'){
                      
                     // this.cartList=re.result.cartList;
                     this.getCartList(re.result.cartList);

                   
                    
                  }
                }
                else{
                  console.log('获取购物车失败！');
                }
             })
          },
          clearItem(){
          
            this.showAlert =false;
            var param={productId: this.productId};
             this.$ajax.get('/users/deleteItem',{params: param}).then((response)=>{
                if(response){
                  var re=response.data;
                  if(re.status=='1'){  //删除成功
                    console.log('删除商品的数量：'+re.deleteCount);
                    var payload={flag:'minus',count:re.deleteCount};
                   // this.$store.commit('getCount',payload);
                   this.getCartCount(payload);
                   this.getCartList(re.result.cardList);
                    this.getCart();
                  }
                  else{
                    console.log('删除失败')
                  }
                }
             })
          }
         
        }
    }
</script>
