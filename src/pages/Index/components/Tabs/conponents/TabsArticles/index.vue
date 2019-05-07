<template>
    <div class="sideContent">
        <ul>
            <li @click="handleDetail(list.type,item.id)" class="sideContentList" v-for="item in list.data" :key="item.id">
                <div class="listImg" v-if="item.cover">
                    <img :src="item.cover" alt="acticleImg">
                </div>
                <div class="listContent" :class="{notCover:item.cover?false:true}">
                    <p class="listContentTitle" v-if="item.url">{{item.url}}</p>
                    <p class="listContentTitle" v-else>{{item.title}}</p>
                    <p class="listContentDate" v-if="item.code">提取码:{{item.code}}</p>
                    <p class="listContentDate" v-else>{{item.date|subDate}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        list:{
            type:Object
        }
    },
    methods:{
        handleDetail(type,id){
            if(type){
                this.$router.push(`/detail/${type}/${id}`)
            }
        }
    }
}
</script>

<style scoped lang="stylus">
@import '../../../../../../assets/css/mixins.styl';
@import '../../../../../../assets/css/varibles';
.sideContentList
    height 1.6rem
    display flex
    margin .2rem 0
    cursor pointer
    transition all .3s
    border-bottom 1px dotted #e4e4e4
    &:hover
        transform translateY(-.06rem)
        color $activeColor
    .listImg
        padding .1rem
        width 40%
        img 
            width 100%
            height 100%
    .listContent
        padding .1rem
        width 60%
        &.notCover
            width 100%
        .listContentTitle
            height .8rem
            font-size .28rem
            font-weight 500
            line-height .4rem
            margin-bottom .2rem
            word-wrap break-word
            ellipses(2)
        .listContentDate
            color $textColor
            font-size .24rem
            float right
</style>
