<template>
    <div class="app-wrapper">
        <slot name="header">
            <LayoutHeader :title="title" :leftText="leftText" :rightText="rightText"></LayoutHeader>
        </slot>
        <div class="content" :class="{hasHeader: hasHeader, hasFooter: hasFooter}">
            <slot></slot>
        </div>
        <slot name="footer">
            <LayoutFooter></LayoutFooter>
        </slot>
    </div>
</template>
<script>
	import { LayoutHeader, LayoutFooter } from './components'
	export default {
		name: 'Layout',
        props: {
            hasHeader: {
            	type: Boolean,
                default: true
            },
            hasFooter: {
                type: Boolean,
                default: false
            },
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
		components: {
			LayoutHeader,
			LayoutFooter
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        height: 100%;
        width: 100%;
        background-color: #FFF;
        .content {
            width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            overflow-y: auto;
            -webkit-overflow-scrolling: touch;
        }
        .hasHeader {
            top: 46px;
        }
        .hasFooter {
            bottom: 50px;
        }
    }
</style>
