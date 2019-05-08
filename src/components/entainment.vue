<template>
	<div>
		娱乐
		<router-link :to="{name:'movie'}">电影</router-link>
		<router-link :to="{name:'music'}">音乐</router-link>
		<router-view></router-view>
	</div>

</template>       

<script>
	import connect from '../connector/connector.js';
	export default{
		
		data(){
			return{

			}
		},
		methods:{
			goto(){
				this.$router.go(-1);
			}
			}

		}

</script>
<style scoped>
   div{
   	background-color: red;
   }
	
</style>