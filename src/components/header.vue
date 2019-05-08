<template>
	<div class="container">
		<span class="goBack" v-if="goBack" v-on:click="$router.go(-1)">&lt;</span>
		<span v-if="headTitle"  class="headTitle">{{headTitle}}</span>
		<div class="mall_search" v-if="fatherComponent=='home'">
		<!-- <mt-header  title="vue system"></mt-header> -->
			<form class="form" action="#">
				<i class="icon-search"></i>
				<input type="search" name="" placeholder="可爱加湿器 马云同款" class="input-search">
			</form>
			<div class="login" v-if="username==''">
				<!--<router-link to:"username? 'login':'loginOut'"  class="login" v-on:click="isShow=true"> -->
					<transition name="router-fade">
						<keep-alive>
							<router-link to="login">
								SignIn
							</router-link>
							
						</keep-alive>
					</transition>
				<span>|</span>
				<router-link to="login">
					SignUp
				</router-link>
			</div>
			<div class="login" v-else><router-link to="home" @click.native="userExit">Exit</router-link>
				
			</div>
		</div>
		 <alert-tip v-if="showAlert" alertText="确认退出当前账号？" class="albutton" :class="{'cover-animate-leave':isLeave}">
		 	<button slot="noChange" @click="waiting" >取消</button>
            <button slot="ensure" @click="outLogin" >确认</button>
        </alert-tip>
		
	</div>
	
	
	
</template>

<script>
	import './../assets/css/login.css'
	import {mapState,mapActions} from 'vuex'
	import {removeStore} from '../util/localStorage.js'
	export default{
		data(){
			return{
				
				userPwd:'',
				showAlert:false,
				timer: null,
				isLeave: null
				
			}
		},
		props:['father-component','headTitle','goBack'],
		mounted(){
			this.checkLogin();
		},
		computed: mapState([
			'username'

		]),
		boforeDestory(){
			clearTimeout(this.timer);
		},
		methods:{
			...mapActions(['getNickName']),
			userExit(){
				this.showAlert = true;
					/* this.$ajax.get('/users/logout').then((response)=>{
					if(response.data.status=='1'){

							console.log('')
							//this.$store.commit("getNickName",'');
							this.getNickName("");
							alert('logout!')
						}
					}) */
				},

			waiting(){

					this.isLeave = true;
					// 定时器退出
					this.timer= setTimeout(() =>{
						clearTimeout(this.timer);
						this.showAlert = false;	
					},200);
					
				},
			outLogin(){
					
					this.count=0;
					// 清空localStorage. 
					removeStore(this.username);
					this.waiting();
					// vuex 状态管理
					//服务器端user 退出
					 this.$ajax.get('/users/logout').then((response)=>{
					if(response.data.status=='1'){

							console.log('')
							//this.$store.commit("getNickName",'');
							this.getNickName("");
							
						}
					})

					//跳转页面
					this.$router.push('home');
				},
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
						alert('登录成功！');
						this.isShow=false;
						this.hide=false;
						var name=response.data.result.username;
					//	this.$store.commit("getNickName",name);
						this.getNickName(name);
						console.log(name);

					}
					else{
						console.log('error inout');
						this.hide=true;
						this.errorwrap=true;
						return;
					}
				})
			},
			checkLogin(){
				this.$ajax.get('/users/checkLogin'
				).then((response)=>{
					if(response.data.status==1){
						var name=response.data.result;
						this.$store.commit("getNickName",name);
						console.log(name);
					}
					else{
						console.log('login error');
						
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

.albutton button{
	width: 30%;
	border-radius: 10px;
	padding: 5px 10px;
}

.showName{
	color:red;
}

.hide{
	display: none;
}

.form{
	
	width:80%;
	display:block;
	position:relative;
	padding-right:150px;
	height: 50px;
	
	
}


.icon-search{ 
	position:absolute;
	left:70px;
	top:15px;
	
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
.container{
	position:relative;
	width:100%;
	height: 4rem;
	top:0;
	left:0; 
	background-color: green;
	font-size:20px;
	color: #F2F2F2;
	z-index:999;
	


}

.goBack{
	position: fixed;
	top:15px;
	left: 10px;
	font-size:25px;
}

.headTitle{
	position: fixed;
	top:15px;
	left: 50%;
	color: #F2F2F2;
}
.mall_search{
	width:100%;

	position:fixed;
	
}
.login{
	
	position:absolute;
	top:10px;
	right:100px;
	height:40px;
	line-height:40px;
	text-align: center;
	color:#F2F2F2;
}

@-webkit-keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}

@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(.3, .3, .3);
    transform: scale3d(.3, .3, .3);
  }

  100% {
    opacity: 0;
  }
}

.cover-animate-leave{
	animation: zoomOut .4s
}

</style>