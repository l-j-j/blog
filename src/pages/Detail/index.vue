<template>
<div class="detail">
    <div class="header">
        <div class="title">{{title}}</div>
        <div class="date">{{date|subDate}}</div>
    </div>
    <div class="content" v-html="content"></div>
</div>
</template>

<script>
import {getArticle,getNote,getRest} from '../../api'
export default {
    data(){
        return{
            title:'',
            type:'',
            date:'',
            content:''
        }
    },
    methods:{
        getContent(){
            var type = this.$route.params.type
            var id = this.$route.params.id
            switch(type){
                case 'programme':
                    getArticle({id:id}).then(res=>{
                        this.setData(res)
                    });
                    break;
                case 'note':
                    getNote({id:id}).then(res=>{
                        this.setData(res)
                    })
                    break;
                case 'other':
                    getRest({id:id}).then(res=>{
                        this.setData(res)
                    })
                    break;
            }
        },
        setData(res){
            this.title = res.title;
            this.type = res.type;
            this.date = res.date;
            this.content = res.content;
        }
    },
    mounted(){
        this.getContent()
    }
}
</script>

<style scoped lang="stylus">
.detail>>>img
    max-width 100%
.detail>>>pre
    white-space pre-wrap
.detail
    padding 1rem
    .header
        margin .4rem 0
        overflow hidden
        .title
            text-align center
            font-weight bold
            margin-bottom .2rem
            font-size .36rem
        .date
            float right
            font-size .26rem
            color #999
    .content
        margin-top .5rem
        line-height 1.5
@media (max-width : 767px)
    .detail
        padding .2rem
        .header
            .title
                font-size .3rem
            .date
                font-size .24rem
        .content
            font-size .26rem
</style>
