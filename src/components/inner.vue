<template>
	<ul>
		<li v-for="(item,index) in items"  :key="index">{{item.alis}}
			<router-link  :to="{name:'dance',query:{i:index}}" >查看</router-link>
		
		</li>
	</ul>
	
</template>
<script type="text/javascript">
	export default {
		data(){

		return{

		items:[
			{alis:'zm'},
			{alis: 'qx'}

		]

	}
		
	},
	created(){
		console.log("inner url 参数："+this.$route.query.i)
	}
}
</script>
<style>
	
</style>