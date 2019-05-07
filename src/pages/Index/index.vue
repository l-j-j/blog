<template>
    <div>
        <el-container>
            <el-main>
                <Slide/>
                <hr>
                <Articles :list="articleList"/>
            </el-main>
            <el-aside class="hidden-xs-only" width="330px">
                <Tabs/>
                <About/>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Slide from '../../components/Slide'
import Articles from './components/Articles/index'
import Tabs from './components/Tabs/index'
import About from './components/About/index'
import {getRestList} from '../../api/index.js'
export default {
    data(){
        return {
            articleList:[]
        }
    },
    components:{
        Slide,
        Articles,
        Tabs,
        About
    },
    mounted(){
        getRestList().then(res=>{
            this.articleList = res.data
        })
    }
}
</script>

<style lang="stylus" scoped>
.el-main
    padding 20px 10px
.el-aside
    padding 20px
</style>
