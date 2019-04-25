<template>
    <div>
        <ul class="sourceList">
            <li class="sourceItem" v-for="item in sourceList">
                <div class="title">{{item.title}}</div>
                <div class="des">
                    链接：<a :href="item.url" target="_bank">{{item.url}}</a>
                    <span>提取码：{{item.code}}</span>
                </div>
                <div class="code">提取码：{{item.code}}</a></div>
            </li>
        </ul>
        <Pagination :total="total" :number="number" @currentChange="handleCurrentChange"/>
    </div>
</template>

<script>
import {getSourceList} from '../../api'
import Pagination from '../../components/Pagination'
export default {
    data(){
        return{
            page:1,
            number:20,
            sourceList:[],
            total:0
        }
    },
    methods:{
        getList(){
            let params={
                page:this.page,
                number:this.number
            }
            getSourceList(params).then(res=>{
                this.sourceList = res.data
                this.total = res.count
            })
        },
        handleCurrentChange(val){
            this.page = val
            this.getList()
        }
    },
    components:{
        Pagination
    },
    mounted(){
        this.getList()
    }
}
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixins';
@import '../../assets/css/varibles';
.sourceList
    margin .4rem 0
    .sourceItem
        padding .2rem .4rem
        border-bottom 1px dotted #e4e4e4
        .title
            height .6rem
            line-height .6rem
            font-size .34rem
            font-weight bold
            ellipsis()
        .des
            height .4rem
            line-height .4rem
            font-size .26rem
            ellipsis()
            span
                margin-left .4rem
        .code
            display none
@media (max-width 767px)
    .sourceList
        margin .2rem 0
        .sourceItem
            .title
                font-size .28rem
            .des
                font-size .24rem
                span
                    display none
            .code
                display block
                font-size .24rem
                padding .1rem 0
</style>
