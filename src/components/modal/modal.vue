<template>

	<div class="md-modal md-modal-m" v-bind:class="{'md-show':isShow}">

		<div class="md-model-inner">
			<div class="md-top>">
				<button class="md-close"  @click='closeModal'>close</button>
			</div>
			<div class="md-content">
				<div class="confirm-tips">
					<slot name="tips"></slot>
				</div>
				<div class="btn-wrap">
					<slot name="close"></slot>
				</div>

				<div class="login-wrap">
					<slot name="closeDialog"></slot>
				</div>
				


			</div>
		</div>
	</div>	
</template>



<script>
	import '../.././assets/css/login.css'
    import '../.././assets/css/base.css'

	export default{
		props:["isShow"],
		data(){
			return {

			}
		},
		methods:{
			closeModal(){
				this.$emit('close');

			}
		}
	}
</script>

<style scoped>
div.md-top{
	width: 535px;
	height: 30px;
}
	
</style>
