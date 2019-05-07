<template>
    <div class="mainContent">
        <ul>
            <li class="mainContentList" v-for="item in list">
                <div class="listImg">
                    <img :src="item.cover" alt="acticleImg">
                </div>
                <div class="listContent">
                    <p class="listContentTitle">{{item.title}}</p>
                    <p class="listContentDescribe" v-html="item.content"></p>
                    <p class="listContentDate">{{item.date|subDate}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../../assets/css/mixins.styl';
@import '../../../../assets/css/varibles';
.mainContent
    padding .2rem
    .mainContentList
        height 3rem
        display flex
        margin .3rem 0
        background #fff
        cursor pointer
        transition all .3s
        box-shadow 0 2px 4px 0 rgba(0,0,0,.03), 0 0 6px 0 rgba(0,0,0,.04)
        &:hover
            transform translateY(-.1rem)
            color $activeColor
        .listImg
            padding .2rem
            width 38%
            img 
                width 100%
                height 100%
        .listContent
            padding .3rem .2rem
            width 62%
            .listContentTitle
                height .5rem
                font-size .34rem
                font-weight bold
                padding-top .06rem
                ellipsis()
            .listContentDescribe
                height 1.4rem
                margin-bottom .2rem
                line-height .44rem
                color $textColor
                ellipses(3)
            .listContentDate
                color $textColor
                font-size .24rem
                float right
@media (max-width : 767px)
    .mainContent
        padding 0
        .mainContentList
            height 2.4rem
            .listContent
                padding .2rem
                .listContentTitle
                    height .44rem
                    font-size .28rem
                .listContentDescribe
                    height 1rem
                    margin-bottom .2rem
                    line-height .36rem
                    font-size .24rem
                    color $textColor
                    ellipses(3)
</style>
