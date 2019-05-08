<template>
	<div class="alertTips">

		<section class="alert_container">
		
			<div class="icon">
				<span></span>
				<span></span>
			</div>
			<span class="textAlert">{{alertText}}</span>
			
			<div class="footTips">
				<slot name="noChange"></slot>
				<slot name="ensure"></slot>
			</div>
		</section>	
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		props:['alertText']
	}
</script>
<style lang="scss" scoped>
	@import  '../../style/mixin';
	@keyframes tipMove{
		0% {transform : scale(1)}
		35% {transform : scale(.8)}
		70% {transform : scale(1.1)}
		100% {transform : scale(1)}
	}
	.alertTips{
		position: fixed;
		top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 200;

		.alert_container{
			position: absolute;
			top: 20%;
			left:50%;
			transform: translateX(-50%) translateY(-0%);
			width: 30rem;
			animation: tipMove .4s;
			background-color: rgba(255,255,255,1);
			border: 0.15rem solid #F1F1F1;
			border-radius: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			.icon{
				@include wh(4rem,4rem);
				margin-top: 1rem;
				border: 0.15rem solid #f8cb86;
	            border-radius: 50%;
	            display: flex;
	            justify-content: center;
	            align-items: center; 
	            flex-direction: column;

	            span:nth-of-type(1){
                	@include wh(.12rem, 1.5rem);
                	background-color: #f8cb86;
           		 }
		        span:nth-of-type(2){
		            @include wh(.2rem, .2rem);
		            border: 1px;
		            border-radius: 50%;
		            margin-top: .2rem;
		            background-color: #f8cb86;
		        }
			}

			.textAlert{
				@include sc(2rem, #333);
	            line-height: 2.5rem;
	            text-align: center;
	            margin-top: .8rem;
	            padding: 0 .4rem;
			}

			.footTips{
				 @include sc(2rem, #fff);
	            font-weight: bold;
	            margin-top: 1.8rem;
	            background-color: #4cd964;
	            width: 100%;
	            text-align: center;
	            line-height: 3.5rem;
	            border: 1px;
	            border-bottom-left-radius: 0.25rem;
	            border-bottom-right-radius: 0.25rem;
	            display: flex;
	            justify-content: center;


			}
		}

	}
	
</style>