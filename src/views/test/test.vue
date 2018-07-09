<template>
    <Layout>
        <button @click="test" class="test2">测试aja x</button>
    </Layout>
</template>
<script>
    import { queryPoster } from '@/iao/home/home'
    export default {
    	name: 'test',
        methods: {
    		test() {
			    queryPoster().then(res => {
			    	console.log(res)
                })
            }
        }
    }
</script>
<style scoped>
    .test2 {
        color: #FFF;
    }
</style>