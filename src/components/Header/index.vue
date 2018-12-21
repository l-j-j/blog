<template>
 <div class="header">
    <div class="logo">
        <img src="./images/logo.png" alt="logo" class="logoImg">
    </div>
    <el-menu
        class="el-menu-demo hidden-xs-only"
        mode="horizontal"
        text-color="#000"
        active-text-color="#409EFF"
    >
        <el-menu-item index="2">全部文章</el-menu-item>
        <el-submenu index="3">
            <template slot="title">我的工作台</template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
            <el-menu-item index="3-3">选项3</el-menu-item>
        </el-submenu>
        <el-menu-item index="4">消息中心</el-menu-item>
        <el-menu-item index="5">订单管理</el-menu-item> 
    </el-menu>
    <div class="phoneMenu" @click="toggleMenu">
        <i class="el-icon-menu hidden-sm-and-up"></i>
    </div>
        <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutRight">
        <div class="toggleMenu" v-if="toggleMenuShow">
            <ul>
                <router-link tag="li" to="" class="menuList">处理中心</router-link>
                <router-link tag="li" to="" class="menuList">处理中心</router-link>
                <router-link tag="li" to="" class="menuList">处理中心</router-link>
                <router-link tag="li" to="" class="menuList">处理中心</router-link>
            </ul>
        </div>
        </transition>
 </div>
</template>

<script>
export default {
    data(){
        return{
            toggleMenuShow:false
        }
    },
    methods:{
        toggleMenu(){
            this.toggleMenuShow = !this.toggleMenuShow
        }
    },
    components:{
        
    }
}
</script>

<style scoped lang="stylus">
.header
    height 1.2rem
    overflow hidden
    background #fff
    border-bottom 1px solid #e6e6e6
    .logo
        width 30%
        float left
        height 1.2rem
        line-height 1.2rem
        text-align center
        .logoImg
            max-width 100%
            height 100%
    .el-menu
        float left  
    .phoneMenu
        float right
        height 1.2rem
        line-height 1.2rem
        margin-right .4rem
        font-size .4rem
    .toggleMenu
        position absolute
        top 1.2rem
        left 0
        right 0
        z-index 999
        .menuList
            text-align center
            height .8rem
            line-height .8rem
            font-size .24rem
            background #fff
</style>
