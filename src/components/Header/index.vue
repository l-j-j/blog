<template>
 <div class="header">
    <div class="logo">
        <router-link to="/" @click.native="toggleMenuShow=false">
            <img src="./images/logo.png" alt="logo" class="logoImg">
        </router-link>
    </div>
    <el-menu
        class="el-menu-demo hidden-xs-only"
        mode="horizontal"
        text-color="#000"
        active-text-color="#409EFF"
        :default-active="activeIndex"
    >
        <el-menu-item index="1">
            <router-link to="/"><div>首页</div></router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <router-link to="/programme"><div>编程文章</div></router-link>
        </el-menu-item>
        <el-menu-item index="3">学习笔记</el-menu-item>
        <el-menu-item index="4">学习资源</el-menu-item>
        <el-menu-item index="5">其他</el-menu-item>
    </el-menu>
    <div class="phoneMenu" :class="{isToggle:toggleMenuShow}" @click="toggleMenu">
        <i class="el-icon-menu hidden-sm-and-up"></i>
    </div> 
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
        <div class="toggleMenuZz" v-if="toggleMenuShow" @click="toggleMenu">
        </div>
    </transition>
    <transition enter-active-class="animated slideInLeft" leave-active-class="animated slideOutLeft">
        <ul class="toggleMenu" v-if="toggleMenuShow" @click="toggleMenu">
            <router-link tag="li" to="/" class="menuList" 
            :class="{active:$route.path=='/'}">首页</router-link>
            <router-link tag="li" to="/programme" class="menuList" 
            :class="{active:$route.path=='/programme'}">编程文章</router-link>
            <router-link tag="li" to="" class="menuList">学习笔记</router-link>
            <router-link tag="li" to="" class="menuList">学习资源</router-link>
            <router-link tag="li" to="" class="menuList">其他</router-link> 
        </ul>
    </transition>       
 </div>
</template>

<script>
export default {
    data(){
        return{
            toggleMenuShow:false,
        }
    },
    computed:{
        activeIndex(){
            switch(this.$route.path){
                case '/':
                return '1'
                case '/programme':
                return '2'
            }
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
    position fixed
    z-index 9999
    left 0
    right 0
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
        &.isToggle
            color #409eff
    .toggleMenuZz
        position fixed
        top 1.2rem
        left 0
        right 0
        bottom 0
        z-index 900
        background rgba(0,0,0,.1)
    .toggleMenu
        position fixed
        top 1.2rem
        left 0
        right 40%
        bottom 0
        z-index 999
        background #fff
        padding-top .2rem
        overflow scroll
        .menuList
            text-align center
            height 1.2rem
            line-height 1.2rem
            margin 0 20%
            &.active
                color #409eff
                border-bottom 1px solid #409eff
</style>
