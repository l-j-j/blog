<template>
    <el-row>
        <el-col :span="24">
            <slot></slot>
            <el-menu
            default-active=""
            class="el-menu-vertical-demo"
            background-color="#fff"
            text-color="#333"
            :mode="mode"
            active-text-color="#409eff">
                <el-menu-item index="1">
                    <i class="iconfont icon-html"></i>
                    <span slot="title">HTML</span>
                </el-menu-item>
                <el-menu-item index="2">
                    <i class="iconfont icon-css"></i>
                    <span slot="title">CSS</span>
                </el-menu-item>
                <el-menu-item index="3">
                    <i class="iconfont icon-js"></i>
                    <span slot="title">JAVASCRIPT</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="iconfont icon-vuejs"></i>
                    <span slot="title">VUE</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    props:{
        mode:{
            type:String
        }
    }
}
</script>

<style scoped lang="stylus">
.el-menu
    background #eeeeee
    .el-menu-item i
        display inline-block
        line-height 1rem
        width .56rem
        text-align center
@media (max-width 767px)
    .el-menu
        margin -20px -20px 0
        .el-menu-item
            width 33.3%
            padding 0
            text-align center
            height .8rem
            line-height .8rem
            i
                line-height .8rem
</style>
