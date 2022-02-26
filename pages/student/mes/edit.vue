<template>
	<view id='all'>
		<u-cell-group>
			<u-cell isLink title='头像' ></u-cell>
			<u-cell isLink title='昵称' value="张三"></u-cell>
			<u-cell isLink title='学号' value="123456"></u-cell>
			<u-cell isLink title='电话' value="12345678"></u-cell>
			<u-cell isLink title='性别' value="男"></u-cell>
			<u-cell isLink title='身份证号' value="123456789101112131"></u-cell>
			<u-cell isLink title='地区' value="天津"></u-cell>
		</u-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:'张三'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	#all{
		
	}

</style>
