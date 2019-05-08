<template>

	<div>
		<headVue father-component="home"></headVue>
		<div style="height:200px;width=100%">
		
			<mt-swipe :auto="4000">
			  <mt-swipe-item><a href="#"><img src="static/8.jpg" style="height: 100%;width:100% "></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="static/9.jpg" style="height: 100%;width: 100%"></a></mt-swipe-item>
			  <mt-swipe-item><a href="#"><img src="static/8.jpg" style="height: 100%;width: 100%"></a></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="mui-content">
				        <ul class="mui-table-view mui-grid-view mui-grid-9">
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				            	<router-link :to="{name:'newsList'}">
				                    <span class="mui-icon mui-icon-home"></span>
				                    <div class="mui-media-body">News</div>
				                </router-link>
				            </li>

				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				           		<router-link :to="{name:'goods'}">
				                    <span class="mui-icon mui-icon-email"></span>
				                    <div class="mui-media-body">Supermarket</div>

				                </router-link>
				            </li>
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <span class="mui-icon mui-icon-chatbubble"></span>
				                    <div class="mui-media-body">Chat</div></a></li>
				          
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				                <router-link :to="{name: 'orderDetail'}">
				                    <span class="mui-icon mui-icon-more"></span>
				                    <div class="mui-media-body">SearchOrders</div>
				               	</router-link>
				            </li>
				           
				         
				            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
				                    <span class="mui-icon mui-icon-info"></span>
				                    <div class="mui-media-body">LeaveMessage</div></a></li>
				           	<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
				           		<router-link :to="{name: 'orderDetail'}">
				                    <span class="mui-icon mui-icon-more"></span>
				                    <div class="mui-media-body">More</div>
				                </router-link>
				            </li>
				        </ul> 
		</div>
	</div>
	
	
</template>
<script>

	
	
</script>
<style scoped>
	
	
</style>