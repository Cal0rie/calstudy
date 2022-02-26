<template>
	<view class="wrap">
		<view class="top"></view>
		<view class="content">
			<view class="title">新用户注册</view>
			<input class="u-border-bottom" type="number" v-model="tel" placeholder="请输入手机号" />
			<view class='yzm'>
			<input id='reg' class="u-border-bottom" type="password" v-model="pas" placeholder="请输入验证码" />
			<button class='get' @tap="sendCode" :disabled="disabled">{{send}}</button>
			</view>
			<button @tap="submit" :style="[inputStyle]" class="getCaptcha">提交</button>
			<view class="alternative">
			</view>
		</view>
		<view class="buttom">
		</view>
		
<!-- <view class="wrap">
		<u-toast ref="uToast"></u-toast>
		<u-code :seconds="seconds" @end="end" @start="start" ref="uCode" 
		@change="codeChange"></u-code>
		<u-button @tap="getCode">{{tips}}</u-button>
	</view> -->
	
	</view>
</template>

<script>
export default {
	data() {
		return {
			tel: '',
			pas: '',
			
			send: '获取验证码',
			disabled:false,
			tips: '',
			// refCode: null,
			seconds: 10,
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
	submit() {
			
		},
	sendCode() {
	    let self = this
	                //验证码
	    self.disabled = true;
	    var time = 30;                //时间为10s，可以按情况更改 
	    var timer = setInterval(fun, 1000);  //设置定时器 
	    function fun() {
	        time--;
	        if(time>=0) {
	            self.send = time + "s后重新发送"; 
	        }else if(time<0){ 
	            self.send = "重新发送验证码"; 
	            self.disabled = false;  //倒计时结束能够重新点击发送的按钮 
	            clearInterval(timer);  //清除定时器 
	            time = 10;  //设置循环重新开始条件 
	        } 
	    }
	}
}
}
</script>

<style lang="scss" scoped>
.yzm{
	display: flex;
}
.get{
	background-color: $u-primary;
	font-size: 30rpx;
	width: 50%;
	height: 70rpx;
	line-height: 70rpx;
	bottom: 10rpx;
}
#reg{
	
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
			margin-bottom: 0rpx;
			padding-bottom: 6rpx;
		}
		.getCaptcha {
			background-color: rgb(253, 243, 208);
			color: $u-tips-color;
			border: none;
			font-size: 30rpx;
			padding: 12rpx 0;
			width: 70%;
			top: 50rpx;
			
			&::after {
				border: none;
			}
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

