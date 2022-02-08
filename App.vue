<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss" */
	@import "@/uni_modules/uview-ui/index.scss";
</style>
<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* 公共css */
	.con{
		font-weight:bold;
		color: #8f8f94;
	}
	.tit {
		font-size: 20px;
		font-weight:bold;		
	}
</style>
