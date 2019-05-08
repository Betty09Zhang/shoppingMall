<template>
	<div>
		<div class="loginContainer">
			<headVue goBack="true" :headTitle="signFlag?'登录': '注册'">	
			</headVue>
		</div>
	 	 <form class="loginForm" >
            <section class="input_container">
                <input type="text" placeholder="账号" v-model="username">
            </section>
            <section class="input_container">
                <input  type="password" placeholder="密码"  v-model="userPwd">   
            </section>
      	</form>
      	<div class="login_container" @click="login">登录</div>
        <alert-tip v-if="showAlert" alertText="用户名或密码错误！">
            <button slot="ensure" @click="showAlert=false">确认</button>
        </alert-tip>

	</div>
	
</template>
<script>
import {mapState,mapActions} from 'vuex'
	export default{
		data(){
			return{
                username:null,
                userPwd: null,
				showAlert: false
			}
		},
		computed: {
            ...mapState(['signFlag'])
        },
        methods:{
            ...mapActions(['getNickName','getCartCount']),
            login(){

                console.log('登录中。。。');
                if(!this.username || !this.userPwd){
                    this.errorwrap=true;
                    return;
                }
                var param={'username':this.username,'userPwd':this.userPwd}
                this.$ajax.post('/users/login',{
                    'username':this.username,'userPwd':this.userPwd 

                    }
                ).then((response)=>{
                    if(response.data.status==1){

                        this.errorwrap=false;
            
                        this.isShow=false;
                        this.hide=false;
                        this.$router.go(-1);
                        var user=response.data.result.user;
                        var count=user.cartList.length;
                        this.getNickName(user.name);
                        var payload={flag: 'add','count': count};
                        this.getCartCount(payload);
                        console.log("vuex 管理全局nickname 名"+name);
                        this.$router.push('home');

                    }
                    else{
                        this.showAlert = true;
                        console.log('error inout');
                        this.hide=true;
                        this.errorwrap=true;
                        return;
                    }
                })
            }
           
        }

	}
</script>
<style lang="scss" scoped>
 @import '../../style/mixin';
	.container{
		position:relative;
		width:100%;
		height: 4rem;
		top:0;
		left:0;
		background-color: green;
		font-size:30px;
		color: #F2F2F2;
	}
	.loginForm{
        background-color: #fff;
        margin-top: 2rem;

        .input_container{
            display: flex;
            justify-content: space-between; //内容 两端对齐-->
            padding: .8rem .8rem;
            border-bottom: 1px solid #f1f1f1;
            input{
                @include sc(2rem, #666);
                border: none;
                outline: none;
            }
            button{
                @include sc(2rem, #fff);
                font-family: Helvetica Neue,Tahoma,Arial;
                padding: .8rem .4rem;
                border: 1px;
                border-radius: 0.15rem;
            }
            .right_phone_number{
                background-color: #4cd964;
            }
        }
        .phone_number{
            padding: .3rem .8rem;
        }
       
    }

    .login_tips{
        @include sc(.5rem, red);
        padding: .4rem .6rem;
        line-height: .5rem;
        a{
            color: #3b95e9;
        }
    }
    .login_container{
        margin: 0.5rem 0.5rem;
        @include sc(2rem, #fff);
        background-color: #4CD964;
        padding: 1rem 0;
        border: 1px;
        border-radius: 0.15rem;
        text-align: center;
    }
    .button_switch{
        background-color: #ccc;
        display: flex;
        justify-content: center;
        @include wh(2rem, .7rem);
        padding: 0 .2rem;
        border: 1px;
        border-radius: 0.5rem;
        position: relative;
        .circle_button{
            transition: all .3s;
            position: absolute;
            top: -0.2rem;
            z-index: 1;
            left: -0.3rem;
            @include wh(1.2rem, 1.2rem);
            box-shadow: 0 0.026667rem 0.053333rem 0 rgba(0,0,0,.1);
            background-color: #f1f1f1;
            border-radius: 50%;
        }
        .trans_to_right{
            transform: translateX(1.3rem);
        }
        span{
            @include sc(.45rem, #fff);
            transform: translateY(.05rem);
            line-height: .6rem;
        }
        span:nth-of-type(2){
            transform: translateY(-.08rem);
        }
    }
    .change_to_text{
        background-color: #4cd964;
    }
    .to_forget{
        float: right;
        @include sc(.6rem, #3b95e9);
        margin-right: .3rem;
    }
	
</style>