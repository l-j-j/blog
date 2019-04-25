<template>
    <el-tabs v-model="tabsActiveName" type="border-card" :stretch="true">
        <el-tab-pane name="first">
            <span slot="label"><i class="el-icon-tickets"></i></span>
            <div>最新文章</div>
            <TabsArticles/>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-news"></i></span>
            <div>笔记分享</div>
            <TabsArticles/>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-edit"></i></span>
            <div>资源链接</div>
            <TabsArticles/>
        </el-tab-pane>
        <el-tab-pane>
            <span slot="label"><i class="el-icon-star-on"></i></span>
            <div>其他推荐</div>
            <TabsArticles/>
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import TabsArticles from './conponents/TabsArticles/index'
export default {
     data() {
      return {
        tabsActiveName: 'first'
      };
    },
    components:{
        TabsArticles
    }
}
</script>

<style scoped lang="stylus">
</style>
