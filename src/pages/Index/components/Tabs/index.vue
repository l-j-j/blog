<template>
    <el-tabs v-model="tabsActiveName" type="border-card" :stretch="true">
        <el-tab-pane name="first">
            <span slot="label"><i class="el-icon-tickets"></i></span>
            <div>最新文章</div>
            <TabsArticles :list="article" />
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-news"></i></span>
            <div>笔记分享</div>
            <TabsArticles :list="note" />
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-edit"></i></span>
            <div>资源链接</div>
            <TabsArticles :list="source" />
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-star-on"></i></span>
            <div>其他推荐</div>
            <TabsArticles :list="rest" />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TabsArticles from './conponents/TabsArticles/index'
import {getTabsList} from '../../../../api/index.js'
export default {
     data() {
      return {
        tabsActiveName: 'first',
        article:{
            type:'programme',
            data:[]
        },
        note:{
            type:'note',
            data:[]
        },
        source:{
            data:[]
        },
        rest:{
            type:'other',
            data:[]
        }
      };
    },
    components:{
        TabsArticles
    },
    mounted(){
        getTabsList().then(res=>{
            this.article.data = res.article
            this.note.data = res.note
            this.source.data = res.source
            this.rest.data = res.rest
        })
    }
}
</script>

<style scoped lang="stylus">
</style>
