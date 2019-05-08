<template>
    <div>     
      <headVue goBack="true" :headTitle="'Confirm Address'">  
      </headVue>
      <div class="checkout-page">
        <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <symbol id="icon-add" viewBox="0 0 31 32">
              <title>add</title>
              <path class="path1" d="M30.745 15.152h-14.382v-14.596c0-0.308-0.243-0.557-0.543-0.557s-0.543 0.249-0.543 0.557v14.596h-14.665c-0.3 0-0.543 0.249-0.543 0.557s0.243 0.557 0.543 0.557h14.665v15.177c0 0.307 0.243 0.557 0.543 0.557s0.543-0.249 0.543-0.557v-15.177h14.382c0.3 0 0.543-0.249 0.543-0.557s-0.243-0.557-0.543-0.557z"></path>
            </symbol>
            <symbol id="icon-ok" viewBox="0 0 32 32">
              <title>ok</title>
              <path class="path1" d="M14.084 20.656l-7.845-9.282c-1.288-1.482-3.534-1.639-5.016-0.351s-1.639 3.534-0.351 5.016l10.697 12.306c1.451 1.669 4.057 1.623 5.448-0.096l18.168-22.456c1.235-1.527 0.999-3.765-0.528-5.001s-3.765-0.999-5.001 0.528l-15.573 19.337z"></path>
            </symbol>
            <symbol id="icon-edit" viewBox="0 0 32 32">
              <title>edit</title>
              <path class="path1" d="M28.287 8.51l-4.805-4.806 0.831-0.831c0.472-0.472 1.086-0.777 1.564-0.777 0.248 0 0.452 0.082 0.622 0.253l3.143 3.144c0.539 0.54 0.133 1.529-0.524 2.186l-0.831 0.831zM26.805 9.992l-1.138 1.138-4.805-4.806 1.138-1.138 4.805 4.806zM24.186 12.612l-14.758 14.762-4.805-4.806 14.758-14.762 4.805 4.806zM7.379 28.288l-4.892 1.224 1.223-4.894 3.669 3.67zM31.123 4.011l-3.143-3.144c-0.567-0.567-1.294-0.867-2.103-0.867-1.036 0-2.174 0.52-3.045 1.391l-20.429 20.436c-0.135 0.134-0.23 0.302-0.276 0.487l-2.095 8.385c-0.089 0.355 0.017 0.736 0.276 0.995 0.198 0.198 0.461 0.307 0.741 0.307 0.085 0 0.171-0.010 0.254-0.031l8.381-2.096c0.185-0.047 0.354-0.142 0.487-0.276l20.43-20.436c1.409-1.41 2.042-3.632 0.524-5.15v0z"></path>
            </symbol>
            <symbol id="icon-del" viewBox="0 0 32 32">
              <title>delete</title>
              <path class="path1" d="M11.355 4.129v-2.065h9.29v2.065h-9.29zM6.194 29.935v-23.742h19.613v23.742h-19.613zM30.968 4.129h-8.258v-3.097c0-0.569-0.463-1.032-1.032-1.032h-11.355c-0.569 0-1.032 0.463-1.032 1.032v3.097h-8.258c-0.569 0-1.032 0.463-1.032 1.032s0.463 1.032 1.032 1.032h3.097v24.774c0 0.569 0.463 1.032 1.032 1.032h21.677c0.569 0 1.032-0.463 1.032-1.032v-24.774h3.097c0.569 0 1.032-0.463 1.032-1.032s-0.463-1.032-1.032-1.032v0z"></path>
              <path class="path2" d="M10.323 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path3" d="M16 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
              <path class="path4" d="M21.677 9.806c-0.569 0-1.032 0.463-1.032 1.032v14.452c0 0.569 0.463 1.032 1.032 1.032s1.032-0.463 1.032-1.032v-14.452c0-0.569-0.463-1.032-1.032-1.032z"></path>
            </symbol>
            <symbol id="icon-clock" viewBox="0 0 32 32">
              <title>clock</title>
              <path class="path1" d="M29.333 16c0-7.364-5.97-13.333-13.333-13.333s-13.333 5.97-13.333 13.333c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v0 0 0 0 0 0zM0 16c0-8.837 7.163-16 16-16s16 7.163 16 16c0 8.837-7.163 16-16 16s-16-7.163-16-16zM14.667 14.667v1.333h2.667v-10.667h-2.667v9.333zM24 18.667h1.333v-2.667h-10.667v2.667h9.333z"></path>
            </symbol>
            <symbol id="icon-question" viewBox="0 0 32 32">
              <title>question</title>
              <path class="path1" d="M16 2.56c7.411 0 13.44 6.029 13.44 13.44s-6.029 13.44-13.44 13.44c-7.411 0-13.44-6.029-13.44-13.44s6.029-13.44 13.44-13.44zM16 0c-8.822 0-16 7.178-16 16s7.178 16 16 16c8.822 0 16-7.178 16-16s-7.178-16-16-16z"></path>
              <path class="path2" d="M16 22.080c-1.059 0-1.92 0.861-1.92 1.92s0.861 1.92 1.92 1.92c1.059 0 1.92-0.861 1.92-1.92s-0.861-1.92-1.92-1.92z"></path>
              <path class="path3" d="M12.16 12.48c0.706 0 1.28-0.574 1.28-1.28 0-1.412 1.148-2.56 2.56-2.56s2.56 1.148 2.56 2.56c0 1.412-1.148 2.56-2.56 2.56-0.706 0-1.28 0.574-1.28 1.28v3.84c0 0.706 0.574 1.28 1.28 1.28s1.28-0.574 1.28-1.28v-2.723c2.224-0.575 3.84-2.616 3.84-4.957 0-2.823-2.297-5.12-5.12-5.12s-5.12 2.297-5.12 5.12c0 0.706 0.574 1.28 1.28 1.28z"></path>
            </symbol>
          </defs>
        </svg>
        <div class="container">
          <div class="checkout-addr">
            <div class="page-title-normal">
              <h2 class="page-title-h2"><span>check out</span></h2>
            </div>
            <!-- process step -->
            <div class="check-step">
              <ul>
                <li class="cur"><span>Confirm</span> address</li>
                <li><span>View your</span> order</li>
                <li><span>Make</span> payment</li>
                <li><span>Order</span> confirmation</li>
              </ul>
            </div>

            <!-- address list -->
            <div class="page-title-normal checkout-title">
              <h2><span>Shipping address</span></h2>
            </div>
            <div class="addr-list-wrap">
              <div class="addr-list">
                <ul>
                  <li v-for="item in addressPart" :key="item.addressId"  @click="checkedIndex=item.addressId;selectedIndex=item.addressId;" v-bind:class="{'check':checkedIndex==item.addressId}">
                    <dl> 
                      <dt>{{item.receiver}}</dt>
                      <dd class="address">{{item.addressName}}</dd>
                      <dd class="tel">{{item.tel}}</dd>
                    </dl>
                    <div class="addr-opration addr-del">
                      <a href="javascript:;" class="addr-del-btn" @click="deleteConfirm(item.addressId)">
                        <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                      </a>
                    </div>
                    <div class="addr-opration" v-bind:class="{'addr-set-default':item.isDefault}">
                      <a href="javascript:;" class="addr-set-default-btn" @click="toggleDefault(item.addressId)">
                           <i v-if="!item.isDefault">Set default</i>
                      </a>
                    </div>
                    <div class="addr-opration addr-default" v-if="item.isDefault">Default address</div>
                 
                  </li>
                 
                  <li class="addr-new">
                    <div class="add-new-inner">
                      <i class="icon-add">
                        <svg class="icon icon-add"><use xlink:href="#icon-add"></use></svg>
                      </i>
                      <p>Add new address</p>
                    </div>
                  </li>
                </ul>

                
                <modal v-bind:class="{'md-show':deleteFlag}" v-on:close="closeItem">
                    <p slot="tips">确认要删除该地址吗？</p>
                    <div slot="closeDialog" @click="addressDel()">确认</div>
                    <div slot="closeDialog" @click="deleteFlag=false">关闭</div>
                </modal>

              </div>

              <div class="shipping-addr-more" @click="showMore">
                <a class="addr-more-btn up-down-btn" href="javascript:;">
                  more
                  <i class="i-up-down">
                    <i class="i-up-down-l"></i>
                    <i class="i-up-down-r"></i>
                  </i>
                </a>
              </div>
            </div>

            <!-- shipping method-->
            <div class="page-title-normal checkout-title">
              <h2><span>Shipping method</span></h2>
            </div>
            <div class="shipping-method-wrap">
              <div class="shipping-method">
                <ul>
                  <li class="check">
                    <div class="name">Standard shipping</div>
                    <div class="price">Free</div>
                    <div class="shipping-tips">
                      <p>Once shipped，Order should arrive in the destination in 1-7 business days</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="next-btn-wrap">
            <button class="btn btn--m btn--red" @click="preOrder">Next</button>
            </div>

            <alert-tip v-if="showAlertAddress" alertText="您还未选择收货地址或现在添加！">
                <button slot="ensure" @click="showAlertAddress=false">确认</button>
            </alert-tip>
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
</style>
<script>
  export default{
      data(){
          return{
            addressList:'',
            addressId:'',
            addressPart:'',
            limit:3,
            deleteFlag:false,
            selectedIndex:'',
            checkFlag:false,
            checkedIndex:'',
            pid:null,
            count:null,
            flag:null ,//立即购买标志位  true;
            showAlertAddress: false , // 未选择地址 弹出框,
            defaultFlag: true 
          }
      },

      created(){
        var productId=this.$route.params.productId;
        var productNum =this.$route.params.productNum;
        if(productId){
           this.pid=productId;
        }
        else if(productNum){
          this.count=productNum;
        }
       
        
      },
      mounted(){
        this.getAddress();
      },
      methods:{
        closeItem(){
          this.deleteFlag=false;
        },
        deleteConfirm(id){
          this.deleteFlag=true;
          this.addressId=id;

        },

        addressDel(){
          this.deleteFlag=false;

          this.$ajax.post('/users/addressDel',{'addressId':this.addressId}).then((response)=>{
              if(response){
                if(response.data.status=='1'){
                  this.getAddress();
                  console.log('删除成功！');
                }
              }
          })
        },
        showMore(){

          this.addressPart=this.addressPart.length==this.limit? this.addressList:this.addressList.slice(0,3);

        },
        getAddress(){
          this.$ajax.get('/users/address').then((response)=>{
                if(response){
                  if(response.data.status=='1'){
                    this.addressList=response.data.result.addressList;
                    this.addressPart=this.addressList.slice(0, this.limit);
                  }
                }
          })
        },
        toggleDefault(id){
          this.addressId=id;
          this.defaultFlag =!this.defaultFlag;
          this.$ajax.post('/users/toggleDefaultAddr',{'addressId':this.addressId}).then((response)=>{
              if(response){
                if (response.data.status=='1') {
                  console.log('默认状态修改成功！');
                }
              }
          });
          this.getAddress();  
        },
        // 生成预订单  未支付 ‘-1’； 两种情况1. 直接购买2. 添加购物车购买
        preOrder(){

           // 选择地址
            if(!this.selectedIndex){
              this.showAlertAddress=true;
            }
            else{
            // 直接购买
              console.log('addressID:  '+this.selectedIndex);
              if(this.pid && this.count){
                this.flag= true;

                 //生成未支付订单表
                  this.$ajax.post('/users/purchaseNow',{'addressId': this.selectedIndex}).then((resp) =>{
                    if(resp){

                      var re= resp.data;
                      if(re.status == '1'){
                        console.log('orderId: '+re.result.orderId);
                         this.$router.push({path:'/users/order', query:{'orderId':re.result.orderId,'flag': this.flag}});
                      }
                      else{
                        console.log('生成订单失败！');
                      }
                    }
                  })
               
              }
              else{
                  this.flag = false;
                  this.$ajax.post('/users/orderItem',{addressId:this.selectedIndex}).then((response)=>{
                    if(response){
                      console.log('提交订单返回状态码：'+response.data.status);
                      if(response.data.status=='1'){
                        console.log('创建成功！');
                        // 清vuex 数据
                       // this.count = this.temp;
                        //订单创建成功后立即跳转页面，防止订单重复提交
                      this.$router.push({path:'/users/order', query:{'orderId':response.data.result.orderId,'flag':this.flag
                        }});
                      }
                    }
                 
                  })
              }
            }
        }
      }
  }
</script>
