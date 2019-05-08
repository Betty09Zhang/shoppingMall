<template>
	<div>
		音乐
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