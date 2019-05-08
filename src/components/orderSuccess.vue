<template>
    <div>
      
      <div class="container">
        <headVue goBack="true" :headTitle="'CHECK OUT'">  
      </headVue>
        <!-- 进度条 -->
        <div class="check-step">
          <ul>
            <li class="cur"><span>Confirm</span> address</li>
            <li class="cur"><span>View your</span> order</li>
            <li class="cur"><span>Make</span> payment</li>
            <li class="cur"><span>Order</span> confirmation</li>
          </ul>
        </div>

        <div class="order-create">
          <div class="order-create-pic"><img src="/static/ok-2.png" alt=""></div>
          <div class="order-create-main">
            <h3>Congratulations! <br>Your order is under processing!</h3>
            <p>
              <span>Order ID：{{orderId}}</span>
              <span>Order total：{{orderTotal}}</span>
            </p>
            <div class="order-create-btn-wrap">
              <div class="btn-l-wrap">
                <router-link :to="{name:'cart'}" class="btn btn--m">Cart List</router-link>
              </div>
              <div class="btn-r-wrap">
                <router-link :to="{name:'orderDetail',query:{'orderId': orderId}}"  class="btn btn--m">order Detail</router-link>
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
<script>
import {mapState,mapActions} from 'vuex'
    export default{
        data(){
            return{
              orderId:'',
              orderTotal:0,
              orderDetail:{},
              sum: 0 //购物车商品数量 上个页面传入。
            }
        },
        mounted(){
          this.orderId=this.$route.query.orderId;
           this.orderTotal=this.$route.query.orderTotal;
           this.sum =this.$route.query.sum;
           console.log('消费商品数量： '+this.sum);
          this.getClear();
        },
        computed: mapState(['count']),
        methods:{
          ...mapActions(['setClearCart']),
            getClear(){
                this.setClearCart(this.count-this.sum);
            }
        }
    }
</script>
