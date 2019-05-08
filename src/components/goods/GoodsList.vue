<template>
    <div>
     
      <div class="nav-breadcrumb-wrap">
        <div class="container">
          <nav class="nav-breadcrumb">
            <a href="/">Home</a>
            <span>Goods</span>
          </nav>
        </div>
      </div>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a   @click='sortGoods' href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)"  @click="setPriceFilter('all')">All</a></dd>
                <dd>
                  <a href="javascript:void(0)"  @click="setPriceFilter('0-100')">0 - 100</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)"  @click="setPriceFilter('100-500')">100 - 500</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)"  @click="setPriceFilter('500-1000')">500 - 1000</a>
                </dd>
                <dd>
                  <a href="javascript:void(0)"  @click="setPriceFilter('1000-2000')">1000 - 2000</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="item in goods" :key="item.productId">
                    <div class="pic">
                      <router-link  :to="{path:'/goods/goodsDetail',query: {id: item.productId}}">
                      <img :src=" '/static/'+item.productImage" alt="">
                        
                      </router-link>
                    </div>
                    <div class="main">
                      <div class="name">{{item.productName}}</div>
                      <div class="price">{{item.salePrice}}</div>
                      <div class="btn-area">
                        <a class="btn btn--m" @click='addCart(item.productId)'>加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
                <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10" class="load-more" v-text='msg'>
              
                </div>
              </div>

             
            </div>

          
          </div>
        </div>
      </div>

       <alert-tip v-if="showAlert" alertText="请先登录" class="albutton" >
            <button slot="ensure" @click="signIn" >确认</button>
       </alert-tip>

     
      <footer class="footer">

e
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
    import '../.././assets/css/login.css'
     import '../.././assets/css/base.css'
    import {mapState, mapActions} from 'vuex'
    import {getStore} from '../../util/localStorage.js'
    export default{
        data(){
            return {
              goods:[],
              pageIndex:1,
              sortFlag:true,
              pageSize:3,
              busy:false,
              msg:'加载',
              priceChecked:'',
              isShow:false,
              addCartShow:false,
              showAlert: false

            }
        },

        mounted(){
            this.getGoodsList(true);
        },
        computed: {
          ...mapState(['username'])
        },
        methods:{

          ...mapActions(['getCartCount','getCartList']),
           closeModal(){
              this.isShow=false;
            },

           loadMore(){
              this.busy=true;
              setTimeout(() => {
                  
                  this.pageIndex=this.pageIndex+1;

                  this.getGoodsList(false);
    
            }, 500);

              
            },
            signIn(){
              this.showAlert = false;
              this.$router.push({name:'login'});
            },
            addCart(pid){

              if(!this.username){
                this.showAlert = true;
              }
              else{
                 this.$ajax.post('/goods/addcart',{'productId':pid,'addCount':1}).then((response)=>{
                
                  if(response){
                     console.log(response.data.status);
                    if(response.data.status=='0'){
                          console.log('需登录');
                           this.isShow=true;
                    }
                    else{
                       var payload={
                            flag:'add',
                            count: 1
                          }
                          //this.$store.commit("getCount",payload);
                          this.getCartCount(payload);
                          var temp=response.data.result.cartList;
                          console.log('cartList: '+temp);
                          this.getCartList(temp);
                    }
                   
                   
                  }
                
                
               
              })
              }
             
            },
    
            getGoodsList(flagPart){
                  console.log('output');
                  var param={pageSize:this.pageSize,pageIndex:this.pageIndex,sort:this.sortFlag?1:-1,priceOrign:this.priceChecked};
                  this.$ajax.get('/goods/list',{
                    params:param
                  }).then((response)=>{
                    if (flagPart) {
                      this.goods=response.data.list;
                    }
                    else{
                      this.goods=this.goods.concat(response.data.list);
                      if(response.data.list.count<this.pageSize){
                        console.log('没有耕读啦');
                        this.busy=true;
                        this.msg='没有更多啦';
                      }
                      else{
                        this.busy=false;
                      }
                    }
                 
                  console.log(this.goods);
                }).then((error)=>{
                  console.log(error);
                })
            },
            sortGoods(){
              this.sortFlag=!this.sortFlag;
              this.pageIndex=1;
              this.getGoodsList(true);
            },
            setPriceFilter(content){
              this.priceChecked=content;
       
              console.log("content"+content);
               this.pageIndex=1;
              this.goods=[];
              this.busy=false;
              if(content!='all'){
                this.getGoodsList(false);
              }
              else{
                console.log('all all ');
                 this.busy=true;
                this.getGoodsList(true);
              }
             
              
            }
          }
    }
</script>
<style lang='css' scoped>
  .load-more{
    width:668px;
    
    line-height:21px;
    text-align:center;
  }
  .cur{
    color:#007aff;
  }
</style>
