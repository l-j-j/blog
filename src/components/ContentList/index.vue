<template>
    <div>
        <ul class="articleList">
            <router-link :to="'/detail'+$route.path+'/'+item.id" tag="li" class="artileItem" v-for="item in list" :key="item.id">
                <div class="title">{{item.title}}</div>
                <div class="des">
                    <span v-if="item.source">转载 {{item.source}} ·</span>
                    <span>{{item.date|subDate}} · {{item.type}}</span>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins';
@import '../../assets/css/varibles';
.articleList
    margin .6rem 0
    .artileItem
        padding .2rem .4rem
        cursor pointer
        .title
            height .8rem
            line-height .8rem
            font-size .34rem
            font-weight bold
            ellipsis()
        .des
            height .44rem
            line-height .44rem
            font-size .24rem
            color $textColor
            ellipsis()
@media (max-width 767px)
    .articleList
        margin .2rem 0
        .artileItem
            padding .2rem 0
            .title
                font-size .28rem
</style>
