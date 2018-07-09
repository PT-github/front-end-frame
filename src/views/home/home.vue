<template>
    <Layout :title="'首页'" :hasFooter="true">

        <div class="test">首页内容</div>

    </Layout>
</template>
<script>
	export default {
		name: 'Home',
		components: {
			// Layout
		}
	}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.test {
    color: red;
}
</style>