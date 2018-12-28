<template>
    <div>
        <ul class="articleList">
            <li class="artileItem">
                <div class="title">文章标题文章标题</div>
                <div class="des">
                    <span>转载 某某某</span>
                    <span>类型</span>
                    <span>2018-12-12</span>
                </div>
            </li>
            <li class="artileItem">
                <div class="title">文章标题文章标题文章标题文章标题</div>
                <div class="des">
                    <span>转载 某某某</span>
                    <span>类型</span>
                    <span>2018-12-12</span>
                </div>
            </li>
            <li class="artileItem">
                <div class="title">文章标题文章标题文章标题文章标题</div>
                <div class="des">
                    <span>转载 某某某</span>
                    <span>类型</span>
                    <span>2018-12-12</span>
                </div>
            </li>
            <li class="artileItem">
                <div class="title">文章标题文章标题文章标题文章标题文章标题</div>
                <div class="des">
                    <span>转载 某某某</span>
                    <span>类型</span>
                    <span>2018-12-12</span>
                </div>
            </li>
            <li class="artileItem">
                <div class="title">文章标题文章标题文章标题文章标题文章标题文章标题</div>
                <div class="des">
                    <span>转载 某某某</span>
                    <span>类型</span>
                    <span>2018-12-12</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@import '../../../../assets/css/mixins';
    @import '../../../../assets/css/varibles';
.articleList
    margin .6rem 0
    .artileItem
        padding 0 .4rem
        margin-bottom .2rem
        .title
            height .7rem
            line-height .7rem
            font-size .32rem
            font-weight bold
            ellipsis()
            a
                color #333
        .des
            height .4rem
            line-height .4rem
            font-size .24rem
            padding-left .2rem
            color $textColor
            ellipsis()
@media (max-width 767px)
    .articleList
        margin .3rem 0
        .artileItem
            padding 0
            .title
                font-size .28rem
</style>
