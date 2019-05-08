<template>
	<div>
		
		细节
		<button @click='goto'>返回上一页</button>
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
   	height: 100px;width: 100px;
   	background-color: yellow;
   }
	
</style>