<template>
    <el-row>
        <el-col :span="24">
            <slot></slot>
            <el-menu
            default-active="0"
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#333"
            :mode="mode"
            active-text-color="#409eff">
                <el-menu-item index="0" @click.native="handleSelect('')">
                    <i class="iconfont icon-quanbu"></i>
                    <span slot="title">全部</span>
                </el-menu-item>
                <el-menu-item :index="''+value.id+''" v-for="(value,index) in typeList" :key="value.id" @click.native="handleSelect(value.name)">
                    <i class="iconfont" :class="value.icon"></i>
                    <span slot="title">{{value.name}}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import {getTypeList} from '../../api'
import {mapMutations} from 'vuex'
export default {
    props:{
        mode:{
            type:String
        }
    },
    data(){
        return {
            typeList:[]
        }
    },
    methods:{
        ...mapMutations(['changeType']),
        handleSelect(name){
            this.changeType(name)
            this.$emit('changeType',name)
        }
    },
    mounted(){
        getTypeList().then(res=>{
            this.typeList = res
        })
    }
}
</script>

<style scoped lang="stylus">
.el-menu-item:hover
    background #fff
.el-menu-item i
    display inline-block
    line-height 1rem
    width .56rem
    text-align center
@media (max-width 767px)
    .el-menu
        margin -10px -10px 0 
        border none
        .el-menu-item
            width 20%
            padding 0 .1rem
            text-align center
            height .7rem
            line-height .7rem
            font-size .24rem
            border 1px solid #e6e6e6 !important
            .is-active
                background #000
            .iconfont
                display none
</style>
