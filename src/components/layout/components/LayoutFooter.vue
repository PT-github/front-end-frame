<template>
    <van-tabbar v-model="active">
        <van-tabbar-item icon="shop">标签</van-tabbar-item>
        <van-tabbar-item icon="chat" dot>标签</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">标签</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">标签</van-tabbar-item>
    </van-tabbar>
</template>
<script>
	import { Tabbar, TabbarItem } from 'vant';
    export default {
        name: 'LayoutFooter',
        data() {
        	return {
        		active: 0
            }
        },
        components: {
        	[ Tabbar.name ]: Tabbar,
            [ TabbarItem.name ]: TabbarItem
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>