<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">您的身份是：</view>
			<view class="choose">
			<button @tap="admin"  :disabled="a">管理员</button>
			<button @tap="teacher"  :disabled="t">教师</button>
			<button @tap="student"  :disabled="s">学生</button>
			</view>
		</view>
		<view class="buttom">
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			tel: '',
			pas: '',
			a: false,
			t: false,
			s: false,
		}
	},
	computed: {
		inputStyle() {
			let style = {

			};
			if(this.tel&&this.pas) {
				style.color = "#fff";
				style.backgroundColor = "#f9ae3d";
			}
			return style;
		}
	},
	methods: {
		admin(){
			
		},
		teacher(){
			
		},
		student(){
			uni.switchTab({
				url:"/pages/student/index",
				});
		},
		submit() {
			if(this.$u.test.mobile(this.tel)) {
				this.$u.route({
					url: 'pages/student/index'
				})
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.choose{
		display: flex;
		flex-direction: column;
		align-items: space;
		button{
			width: 40%;
			margin-bottom: 100rpx;
			background-color: #A4ADB3;
			color: white;
		}
	}
.u-border-bottom{
	margin-bottom: 40rpx !important;
}
.wrap {
	font-size: 28rpx;
	.content {
		width: 600rpx;
		margin: 80rpx auto 0;
		

		.title {
			text-align: left;
			font-size: 60rpx;
			font-weight: 500;
			margin-bottom: 100rpx;
		}
		input {
			text-align: left;
			margin-bottom: 10rpx;
			padding-bottom: 6rpx;
		}
		.alternative {
			color: $u-tips-color;
			display: flex;
			justify-content: space-between;
			margin-top: 30rpx;
		}
	}
	.buttom {
		.loginType {
			display: flex;
			padding: 350rpx 150rpx 150rpx 150rpx;
			justify-content:space-between;
			
			.item {
				display: flex;
				flex-direction: column;
				align-items: center;
				color: $u-content-color;
				font-size: 28rpx;
			}
		}
		
		.hint {
			padding: 20rpx 40rpx;
			font-size: 20rpx;
			color: $u-tips-color;
		}
	}
}
</style>


