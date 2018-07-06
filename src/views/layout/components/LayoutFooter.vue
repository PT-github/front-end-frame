<template>
    <div class="bottom dt">
        <div class="wid">
            <div class="tel">
                <img src="/static/imgs/ico22.png" alt="">
            </div>
            <p class="p1">
                <a href="index.php?page=contact">联系我们</a> |
                <a href="index.php?page=sitemap">站点地图</a> |
                <a href="index.php?page=links">友情链接</a> |
                <a href="index.php?page=distributor">授权代理商</a> |
                <a href="index.php?page=recruitment">人才招聘</a>
            </p>
            <p>© 2010-2018 中国: LetPub上海分公司 沪ICP备10217908号</p>
            <p>United States: Tel: 1-781-202-9968 Address: 204 2nd Ave, Fl 1, Waltham, Massachusetts 02451</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LayoutFooter'
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .bottom {
        width: 100%;
        background: #e6e6e6;
        padding: 30px 0;
        .tel {
            text-align: center;
            padding-bottom: 30px;
        }
        p {
            text-align: center;
            font-family: "";
            margin-top: 14px;
            a {
                margin: 0 4px;
                text-decoration: none;
                outline: none;
                color: #000;
            }
        }
        p.p1 {
            margin-bottom: 40px;
        }
    }
</style>