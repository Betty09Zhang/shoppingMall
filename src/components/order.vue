<template>
  <div>
    <headVue goBack="true" :headTitle="'Order Confirm'"> 
    </headVue>
    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-add" viewBox="0 0 32 32">
          <title>add2</title>
          <path class="path1" d="M15 17h-13.664c-0.554 0-1.002-0.446-1.002-1 0-0.552 0.452-1 1.002-1h13.664v-13.664c0-0.554 0.446-1.002 1-1.002 0.552 0 1 0.452 1 1.002v13.664h13.664c0.554 0 1.002 0.446 1.002 1 0 0.552-0.452 1-1.002 1h-13.664v13.664c0 0.554-0.446 1.002-1 1.002-0.552 0-1-0.452-1-1.002v-13.664z"></path>
        </symbol>
        <symbol id="icon-ok" viewBox="0 0 39 32">
          <title>ok</title>
          <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
        </symbol>
        <symbol id="icon-edit" viewBox="0 0 32 32">
          <title>edit</title>
          <path class="path1" d="M25.599 11.292l-4.892-4.892 3.825-3.825 4.892 4.892-3.825 3.825zM4.732 23.308l3.959 3.959-5.939 1.98 1.98-5.939zM10.666 26.225l-4.892-4.892 13.425-13.425 4.892 4.892-13.425 13.425zM31.687 6.713l-6.4-6.4c-0.417-0.417-1.091-0.417-1.508 0l-20.267 20.267c-0.114 0.115-0.191 0.25-0.242 0.393-0.003 0.009-0.012 0.015-0.015 0.025l-3.2 9.6c-0.128 0.383-0.029 0.806 0.257 1.091 0.203 0.204 0.476 0.313 0.754 0.313 0.112 0 0.227-0.017 0.337-0.054l9.6-3.2c0.011-0.003 0.017-0.013 0.027-0.016 0.142-0.052 0.276-0.128 0.39-0.242l20.267-20.267c0.417-0.416 0.417-1.091 0-1.508v0z"></path>
        </symbol>
        <symbol id="icon-delete" viewBox="0 0 26 32">
          <title>delete</title>
          <path class="path1" d="M17.723 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM7.877 28c0.543 0 0.984-0.448 0.984-1v-12c0-0.552-0.441-1-0.984-1s-0.985 0.448-0.985 1v12c0 0.552 0.441 1 0.985 1v0zM12.8 28c0.543 0 0.985-0.448 0.985-1v-12c0-0.552-0.441-1-0.985-1s-0.984 0.448-0.984 1v12c0 0.552 0.441 1 0.984 1v0zM23.631 4h-5.908v-2c0-1.104-0.882-2-1.969-2h-5.908c-1.087 0-1.969 0.896-1.969 2v2h-5.908c-1.087 0-1.969 0.896-1.969 2v2c0 1.104 0.882 2 1.969 2v18c0 2.208 1.765 4 3.939 4h13.784c2.174 0 3.938-1.792 3.938-4v-18c1.087 0 1.969-0.896 1.969-2v-2c0-1.104-0.882-2-1.969-2v0zM9.846 3c0-0.552 0.441-1 0.984-1h3.938c0.544 0 0.985 0.448 0.985 1v1h-5.908v-1zM21.662 28c0 1.104-0.882 2-1.969 2h-13.784c-1.087 0-1.97-0.896-1.97-2v-18h17.723v18zM22.646 8h-19.692c-0.543 0-0.985-0.448-0.985-1s0.441-1 0.985-1h19.692c0.543 0 0.984 0.448 0.984 1s-0.441 1-0.984 1v0z"></path>
        </symbol>
        <symbol id="icon-clock" viewBox="0 0 32 32">
          <title>clock</title>
          <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
        </symbol>
      </defs>
    </svg>
    <div class="container">
      <div class="checkout-order">
        <!-- process step -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>Confirm</span> address</li>
            <li class="cur"><span>View your</span> order</li>
            <li><span>Make</span> payment</li>
            <li><span>Order</span> confirmation</li>
          </ul>
        </div>

        <!-- order list -->
        <div class="page-title-normal checkout-title">
          <h2><span>Order content</span></h2>
        </div>
        <div class="item-list-wrap confirm-item-list-wrap">
          <div class="cart-item order-item">
            <div class="cart-item-head">
              <ul>
                <li>Order contents</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
              </ul>
            </div>
            <ul class="cart-item-list">
              <li v-for="item in orderGoods" v-if="item.check=='1'" :key="item.productId">
                <div class="cart-tab-1">
                  <div class="cart-item-pic">
                    <img :src="'/static/'+ item.productImage " alt="item.productName">
                  </div>
                  <div class="cart-item-title">
                    <div class="item-name">{{item.productName}}</div>

                  </div>
                </div>
                <div class="cart-tab-2">
                  <div class="item-price">{{item.salePrice | currency('$')}}</div>
                </div>
                <div class="cart-tab-3">
                  <div class="item-quantity">
                    <div class="select-self">
                      <div class="select-self-area">
                        <span class="select-ipt">×{{item.productNum}}</span>
                      </div>
                    </div>
                    <div class="item-stock item-stock-no">In Stock</div>
                  </div>
                </div>
                <div class="cart-tab-4">
                  <div class="item-price-total">{{(item.productNum* item.salePrice) | currency('$')}}</div>
                </div>
               
              </li>
            </ul>
          </div>
        </div>

        <!-- Price count -->
        <div class="price-count-wrap">
          <div class="price-count">
            <ul>
              <li>
                <span>Item subtotal:</span>
                <span>{{itemTotal | currency('$')}}</span>
              </li>
              <li>
                <span>Shipping:</span>
                <span>{{shipping | currency('$')}}</span>
              </li>
              <li>
                <span>Discount:</span>
                <span>{{disCount | currency('$')}}</span>
              </li>
              <li>
                <span>Tax:</span>
                <span>{{tax | currency('$')}}</span>
              </li>

              <li class="order-total-price">
                <span>Order total:</span>
                <span>{{orderTotal| currency('$')}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="order-foot-wrap">
          <div class="prev-btn-wrap">
            <router-link  to="address"  class="btn btn--m">Previous</router-link>
          </div>
          <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="takeOrder">Proceed to payment</button>
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
<script>

import {currency} from '.././util/currency.js'
import {setStore, getStore} from '.././util/localStorage.js'
import {mapState,mapActions} from 'vuex'
  export default{
      data(){
          return{
           
            itemTotal:0,
            shipping:0,
            disCount:10,
            tax:30,
            orderTotal:0,
            addressId:'',
            temp: 0,
            orderStatus: -1,
            orderId: null,
            orderGoods: [],
            flag:null,
            sum:0

          }
      },
      created(){

        this.orderId = this.$route.query.orderId;
      //  this.itemTotal = this.$route.query.orderTotal;
        this.flag = this.$route.query.flag; // true 为立即购买通道 false 为购物车购买
        this.getOrder();
        //this.getCartList();
       
      },
      computed: mapState(['count','cartList']),
      methods:{
        ...mapActions(['getCartList','setOrderList']),
        getOrder(){
            this.$ajax.post('/users/orders',{orderId: this.orderId}).then((resp)=>{
                if(resp){
                  var re = resp.data;
                  if(re.status=='1'){ //result。order
                      this.orderGoods =re.result.orderGoods;
                      // 商品总数：
                      var sum=0;
                      this.orderGoods.forEach(function(item){

                          sum=sum +item.productNum;
                      });
                      this.sum=sum;
                      this.itemTotal= re.result.orderTotal;
                      this.orderTotal=this.itemTotal+this.shipping-this.disCount+this.tax;
                  }
                }
            })
        },

        takeOrder(){ //购买完成  更新订单状态。  清除购物车
          this.orderStatus='1';
        //   this.$ajax.post('/users/orderItem',{addressId:this.addressId,orderStatus: orderStatus}).then((response)=>{
        //     if(response){
        //       if(response.data.status=='1'){
        //         console.log('创建成功！');
        //         // 清vuex 数据
        //         this.count = this.temp;
        //         //订单创建成功后立即跳转页面，防止订单重复提交
        //       this.$router.push({path:'/orderSuccess', query:{'orderId':response.data.result.orderId,'orderTotal':response.data.result.orderTotal}
        //         });
        //       }
        //     }
         
        //   })
        // }
        this.$ajax.post('/users/updateOrder',{orderId:this.orderId,orderTotal: this.orderTotal,flag: this.flag}).then((resp) =>{
            if(resp){
              if(resp.data.status == '1'){

                //购物车vuex 更新cartList,清除check =1 的商品  count 页面更新 
                if(!this.flag){  // 购物车购买
                   
                    var temp =this.cartList.filter(function(item) {
                      return item.check==-1;
                    });

                    // vuex 更新cartList,清除check =1 的商品  后台购物车清理。
                    this.getCartList(temp);
                    // 更新orderList
                    console.log("更新cartList: "+resp.data.result.cartList);
                    this.setOrderList(resp.data.result.orderList);
                   

                }
                // 更新成功，跳转页面
                console.log('order 页面统计的sum 数量'+ this.sum);
                      this.$router.push({path:'/orderSuccess', query:{'orderId': this.orderId,'orderTotal':this.orderTotal,'sum':this.sum}});
              }
            }
        })
      }
                    
      },
      filters:{
        currency: currency
      }
  }
</script>
