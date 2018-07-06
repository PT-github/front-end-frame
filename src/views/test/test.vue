<template>
    <Layout>
        <button @click="test">测试aja x</button>
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