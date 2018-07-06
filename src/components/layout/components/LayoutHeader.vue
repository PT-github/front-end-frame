<template>
    <van-nav-bar
            :title="title"
            :left-text="leftText"
            :right-text="rightText"
            left-arrow
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
</template>
<script>
	import { NavBar } from 'vant';
    export default {
        name: 'LayoutHeader',
	    props: {
		    title: {
			    type: String,
			    default: ''
		    },
		    leftText: {
			    type: String,
			    default: ''
		    },
		    rightText: {
			    type: String,
			    default: ''
		    }
	    },
        data() {
            return  {

            }
        },
        methods: {
	        onClickLeft() {
		        var referrer = document.referrer
                if (referrer) {
		        	history.back()
                } else {
		        	console.log('先判断是否在APP，如果在APP，那么就关闭webview；不在APP内，则不做任何操作')
                }
            },
	        onClickRight() {
	        	this.$emit('click-right')
            }
        },
        components: {
        	[ NavBar.name ]: NavBar
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>