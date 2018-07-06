<template>
    <div class="layout-header">
        <div class="top">
            <div class="wid">
                <p class="fr">
                    <a href="index.php?page=referral_program" class="a1" style="background: #F39F19;">推荐同事</a>
                    <a href="index.php?page=journals_publishers" class="a1">机构合作</a>
                    <a href="https://www.letpub.com.cn">中文</a>
                    <a href="https://www.letpub.tw">繁體中文</a>
                    <a href="https://www.letpub.com">English</a>
                    <a href="https://www.letpub.co.kr/">한국어</a>
                    <a href="https://www.letpub.jp/">日本語</a>
                    <a href="https://www.letpub.com.br/">Português</a>
                    <a href="http://www.letpub.com/es/">Español</a>
                </p>
            </div>
        </div>
        <div class="logo_layout">
            <div class="wid">
                <div class="logo">
                    <a href="https://www.letpub.com.cn" title="SCI论文修改"><img src="/static/imgs/ico0.png" alt=""></a>
                </div>
                <h1>美国ACCDON公司旗下品牌</h1>
                <div class="fri_area" style="line-height:1em;">
                    <p style="padding-left:16px;" class="p1"><i class="i0"></i><span style="padding-left:6px;">021-34243335,021-33632887</span></p>
                    <p style="padding-left:16px;"><i class="i1"></i><span style="padding-left:6px;">chinasupport@letpub.com<span></span></span></p>
                    <p style="height:27px; position:relative; ">
                        <a href="https://www.letpub.com.cn/index.php?page=login">登录</a>
                        <a href="https://www.letpub.com.cn/index.php?page=register" style="margin-left:6px;">注册</a>
                        <span style="color:#f00; padding-left:8px; font-size:13px; position:absolute; bottom:2px; width:100px;">新注册优惠</span>
                    </p>
                </div>
            </div>
        </div>
        <div class="nav-box" :class="{'nav-fixed': fixed}">
            <ul class="headerMenu">
                <li class="home"><a href="/"><img src="/static/imgs/home.png" alt=""></a></li>
                <li class="" @mouseenter="mouseEnterFun(1)" @mouseleave="mouseLeaveFun">
                    <a href="/english-editing/">
                        英文润色
                        <i><img src="/static/imgs/arrow.png" alt=""></i>
                        <span class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span>
                    </a>
                    <transition name="fade">
                        <div class="nav-div sCI-div" v-show="active === 1">
                            <a href="/english-editing/">
                                <div>
                                    <h3>英文润色概览</h3>
                                    <p>了解3种不同英文润色的特点</p>
                                </div>
                            </a>
                            <a href="/english-editing/premium-editing.html">
                                <div>
                                    <h3>优质润色</h3>
                                    <p>365天免费润色大修小修，审查逻辑性、修改语言语法</p>
                                </div>
                            </a>
                            <a href="/english-editing/standard-editing.html">
                                <div>
                                    <h3>标准润色</h3>
                                    <p>一次性润色，修改语言语法</p>
                                </div>
                            </a>
                            <a href="/english-editing/levels-of-editing.html">
                                <div>
                                    <h3>润色服务比较</h3>
                                    <p>从服务内容、润色后期支持、免费增值服务等方面比较，选出最适合您的润色服务</p>
                                </div>
                            </a>
                            <a href="/english-editing/price.html">
                                <div>
                                    <h3>价格与返稿</h3>
                                    <p>提供详细的润色价格和返稿时间，无论当天或次日返稿，均可满足您投稿的多样需求</p>
                                </div>
                            </a>
                            <a href="/english-editing/post_editing_support.html">
                                <div>
                                    <h3>润色后期支持</h3>
                                    <p>提供一系列后期支持服务，助您达到出版语言要求</p>
                                </div>
                            </a>
                            <a href="/editors/">
                                <div>
                                    <h3>编辑团队</h3>
                                    <p>强大的编辑团队，由英文母语编辑组成，覆盖5大学科领域</p>
                                </div>
                            </a>
                            <a href="/english-editing/testimonials/">
                                <div>
                                    <h3>客户心声</h3>
                                    <p>润色客户用过服务后，分享使用心得</p>
                                </div>
                            </a>
                        </div>
                    </transition>
                </li>
                <li class="" @mouseenter="mouseEnterFun(2)" @mouseleave="mouseLeaveFun">
                    <a href="/translation/">
                        学术翻译
                        <i><img src="/static/imgs/arrow.png" alt=""></i>
                        <span class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span>
                    </a>
                    <transition name="fade">
                        <div class="nav-div sCI-div" v-show="active === 2">
                            <a href="/translation/">
                                <div>
                                    <h3>中英翻译</h3>
                                    <p>翻译+润色双重服务，5大翻译流程，严控翻译质量</p>
                                </div>
                            </a>
                            <a href="/translation/level3.html">
                                <div>
                                    <h3>优质翻译润色</h3>
                                    <p>精心挑选具有学科研究背景的译者，搭配优质的母语润色专家，为您精细翻译润色论文 </p>
                                </div>
                            </a>
                            <a href="/translation/level2.html">
                                <div>
                                    <h3>标准翻译润色</h3>
                                    <p>按照SCI/EI/SSCI国际期刊的语言标准，为您匹配同研究领域的译者与母语编辑进行翻译润色 </p>
                                </div>
                            </a>
                            <a href="/translation_comparison.html">
                                <div>
                                    <h3>翻译服务比较</h3>
                                    <p>意得辑提供3种学术翻译服务，可供您根据稿件的情况和使用目的选择合适的服务</p>
                                </div>
                            </a>
                            <a href="/translation/price_tat.html">
                                <div>
                                    <h3>价格及返稿</h3>
                                    <p>提供详细的翻译价和返稿时间，字数越多，价格越优惠</p>
                                </div>
                            </a>
                            <a href="/translation/post_translation_support.html">
                                <div>
                                    <h3>翻译后期支持</h3>
                                    <p>提供一系列后期支持服务，助您达到出版语言要求</p>
                                </div>
                            </a>
                            <a href="/translators/">
                                <div>
                                    <h3>翻译团队</h3>
                                    <p>专业的翻译团队，具有学术背景，覆盖5大学科领域</p>
                                </div>
                            </a>
                            <a href="/translation/testimonials/">
                                <div>
                                    <h3>客户心声</h3>
                                    <p>翻译客户用过服务后，分享使用心得</p>
                                </div>
                            </a>
                        </div>
                    </transition>

                </li>
                <li class="" @mouseenter="mouseEnterFun(3)" @mouseleave="mouseLeaveFun">
                    <a href="/publication-support.html">SCI投稿指导 <i><img src="/static/imgs/arrow.png" alt=""></i><span
                            class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span></a>
                    <transition name="fade">
                        <div class="nav-div sCI-div" v-show="active === 3" >
                            <img src="/static/imgs/accepted.png" class="hidden-xs hidden-sm" alt="">
                            <a href="/publication-support/pack1.html">
                                <div>
                                    <h3>快速润色投稿套餐</h3>
                                    <p>专为短期内急需快速投稿的研究者准备，让您在14天内顺利投稿 </p>
                                </div>
                            </a>
                            <a href="/publication-support/pack2.html">
                                <div>
                                    <h3>全程无忧投稿套餐</h3>
                                    <p>专为需要全程投稿指导的学者服务，独特之处在于为您提供一年内无限次投稿支持</p>
                                </div>
                            </a>
                            <a href="/publication-support/pack3.html">
                                <div>
                                    <h3>高影响因子发表套餐</h3>
                                    <p>专为需要投稿高影响因子的研究者服务，独特之处在于协助您投稿3家期刊，不中退还全款20%</p>
                                </div>
                            </a>
                            <!-- <div style="border:none;background:transparent;"></div> -->
                            <a href="/publication-support/pack4.html">
                                <div>
                                    <h3>中文论文投稿套餐</h3>
                                    <p>专为学术研究繁忙的科研学者服务，你只需提供中文论文给我们，其它的将由专家全程指导您投稿</p>
                                </div>
                            </a>
                            <a href="/publication-support/pack_comparison.html">
                                <div>
                                    <h3>服务套餐比较</h3>
                                    <p>点对点比较服务套餐，选择最合适的服务，提高发表成功率</p>
                                </div>
                            </a>
                            <a href="/publication-support/inquiry.html">
                                <div>
                                    <h3>方案选择建议</h3>
                                    <p>专人为您服务，为您提供投稿解决方案</p>
                                </div>
                            </a>
                        </div>
                    </transition>
                </li>
                <li class="" @mouseenter="mouseEnterFun(4)" @mouseleave="mouseLeaveFun">
                    <a href="/quality-assurance.html">质量保证 <i><img src="/static/imgs/arrow.png" alt=""></i><span
                            class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span></a>
                    <transition name="fade">
                        <div class="nav-div sCI-div quality" v-show="active === 4">
                            <img src="/static/imgs/headqualityicon.png" class="hidden-xs hidden-sm"
                                 style="height:109px;width:121px;margin:10px 10px 0; margin-top:15px !important" alt="">
                            <a href="/quality-assurance.html">
                                <div>
                                    <h3>服务质量保证</h3>
                                    <p>100%售后保障，无理由重修，无理由退款</p>
                                </div>
                            </a>
                            <a href="/confidentiality.html">
                                <div>
                                    <h3>安全保密政策</h3>
                                    <p>签订保密协议，100%文件安全加密保障</p>
                                </div>
                            </a>
                        </div>
                    </transition>
                </li>
                <li class="" @mouseenter="mouseEnterFun(5)" @mouseleave="mouseLeaveFun">
                    <a href="/payment.html">付款与发票 <i><img src="/static/imgs/arrow.png" alt=""></i><span
                            class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span></a>
                    <transition name="fade">
                        <div class="nav-div sCI-div fapiao" v-show="active === 5">
                            <a href="/payment.html">
                                <div>
                                    <h3>付款方式</h3>
                                    <p>支付宝、银联均可在线支付</p>
                                </div>
                            </a>
                            <a href="/invoice.html">
                                <div>
                                    <h3>发票报销</h3>
                                    <p>提供正规机打发票，可以报销</p>
                                </div>
                            </a>

                        </div>
                    </transition>
                </li>
                <li class="" @mouseenter="mouseEnterFun(6)" @mouseleave="mouseLeaveFun">
                    <a href="/about-us/">关于我们 <i><img src="/static/imgs/arrow.png" alt=""></i><span
                            class="glyphicon glyphicon-menu-down hidden-md hidden-lg"></span></a>
                    <transition name="fade">
                        <div class="nav-div sCI-div about-us" v-show="active === 6">
                            <a href="/about-us/">
                                <div>
                                    <h3>公司介绍</h3>
                                    <p>意得辑的成长历程和服务范围</p>
                                </div>
                            </a>
                            <a href="/about-us/our_team.html">
                                <div>
                                    <h3>我们团队</h3>
                                    <p>全球管理高层，中国团队和客户服务团队集体亮相</p>
                                </div>
                            </a>
                            <a href="/about-us/recruitment.html">
                                <div>
                                    <h3>合作伙伴</h3>
                                    <p>全球范围的出版商、协会、媒体等合作伙伴</p>
                                </div>
                            </a>
                            <a href="/faqs/">
                                <div>
                                    <h3>常见问答</h3>
                                    <p>针对常见问题的解答</p>
                                </div>
                            </a>
                        </div>
                    </transition>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'LayoutHeader',
        data() {
            return  {
                active: '',
                fixed: false
            }
        },
        mounted() {
            let _this = this
            window.onscroll = function() {
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop >= 149) {
                    _this.fixed = true
                } else {
                    _this.fixed = false
                }
            }
        },
        methods: {
            mouseEnterFun(idx) {
                console.log(idx, typeof idx)
                this.active = idx
            },
            mouseLeaveFun() {
                this.active = ''
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    div.nav-box {
        min-width: 1140px;
    }
    div.nav-fixed {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: #2684ac;
        z-index: 1;
        .headerMenu {
            border: 0;
        }
    }
    .headerMenu {
        background: #2684ac;
        display: flex;
        width: 1140px;
        margin: 0 auto;
        height: 50px;
        line-height: 48px;
        border: 1px solid #d4d4d4;
        border-top: 1px solid #2684ac;
        position: relative;
        li {
            text-align: center;
            flex: 1;
            height: 48px;
            border-right: 1px solid #73afc9;
            &:last-child {
                border-right: 0;
            }
            &:hover:not(.home) {
                background-color: #FFF;
                a {
                    color: #2684ac
                }
            }
            a {
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                font-weight: 700;
                text-decoration: none;
            }
            .nav-div {
                padding-bottom: 20px;
                position: absolute;
                width: 1140px;
                height: 262px;
                max-height: 262px;
                overflow: hidden;
                border: 1px solid #d4d4d4;
                top: 48px;
                left: 0;
                background: #f6f6f6;
                z-index: 77;
            }
            .sCI-div {
                img {
                    margin-top: 41px!important;
                }
                img {
                    width: 190px;
                    height: 175px;
                    margin: 17px 36px;
                    float: left;
                }
                div {
                    width: 250px;
                    height: 100px;
                    border: 1px solid #dbdbdb;
                    background: #fff;
                    float: left;
                    margin: 20px 10px 0;
                    padding: 0 15px;
                    box-sizing: border-box;
                    h3 {
                        font-size: 16px;
                        font-weight: 700;
                        color: #686868;
                        line-height: 26px;
                        margin-top: 8px;
                        margin-bottom: 0;
                    }
                    p {
                        font-size: 14px;
                        color: #8d8d8d;
                        line-height: 18px;
                    }
                }
                a:hover {
                    & > div {
                        background: #2684ac;
                        border: 1px solid #2761ab;
                        h3,p {
                            color: #FFF;
                        }
                    }
                }
            }
            .quality {
                width: 720px;
                left: 242px;
                height: 142px;
                max-height: 142px;
            }
            .fapiao {
                width: 545px;
                left: 416px;
                height: 142px;
                max-height: 142px;
            }
            .about-us {
                height: 142px;
                max-height: 142px;
            }
        }
        .home {
            flex: initial;
            width: 79px;
        }
    }
    .headerMenu li {
        .fade-enter, .fade-leave-active {
            max-height: 0;
            height: 0;
        }
        .fade-enter-active {
            transition: all .5s ease-out;
        }
    }
    .logo_layout {
        height: 109px;
        .logo {
            float: left;
            margin-top: 20px;
        }
        h1 {
            float: left;
            font-size: 14px;
            color: #224890;
            margin-left: 10px;
            margin-top: 50px;
            border-left: 1px solid #CCC;
            padding: 5px 15px;
        }
        .fri_area {
            float: right;
            margin-top: 6px;
            p {
                margin-top: 10px;
                i {
                    display: inline-block;
                    margin-right: 4px;
                    vertical-align: middle;
                }
                i.i0 {
                    width: 19px;
                    height: 19px;
                    background: url(/static/imgs/ico1.png);
                    margin-top: -4px;
                }
                i.i1 {
                    width: 20px;
                    height: 13px;
                    background: url(/static/imgs/ico2.png);
                    margin-top: -2px;
                }
                a {
                    width: 75px;
                    float: left;
                    height: 27px;
                    line-height: 27px;
                    text-align: center;
                    background: #385692;
                    color: #fff;
                    border-radius: 20px;
                    margin-left: 15px;
                }
            }
            p.p1 {
                color: #385692;
            }
        }
    }
    .wid {
        width: 1100px;
        margin: 0 auto;
    }
    .top {
        width: 100%;
        height: 40px;
        background: #f1f1f1;
        p {
            a {
                margin-left: 10px;
                float: left;
                font-size: 12px;
                height: 22px;
                line-height: 22px;
                color: #666666;
                position: relative;
            }
            a.a1 {
                color: #fff;
                background: #385692;
                width: 72px;
                height: 22px;
                border-radius: 3px;
                text-align: center;
                margin-right: 8px;
                &::after {
                    content: '';
                    position: absolute;
                    right: -8px;
                    width: 1px;
                    height: 12px;
                    background: #666666;
                    top: 5px;
                }
            }
        }
        p.fr {
            font-family: "";
            color: #666666;
            margin-top: 10px;
        }
    }
</style>