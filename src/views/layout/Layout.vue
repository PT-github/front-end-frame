<template>
    <div class="app-wrapper">
        <LayoutHeader></LayoutHeader>
        <transition name="fade" mode="out-in">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive"></router-view>
            </keep-alive>
        </transition>
        <transition name="fade" mode="out-in">
            <router-view v-if="!$route.meta.keepAlive"></router-view>
        </transition>
        <LayoutFooter></LayoutFooter>
    </div>
</template>
<script>
    import { LayoutHeader, LayoutFooter } from './components'
    export default {
        name: 'Layout',
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
    }
</style>
