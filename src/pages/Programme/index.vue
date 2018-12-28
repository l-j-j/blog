<template>
    <div>
        <el-container>
            <el-main>
                <Breadcrumb class="hidden-xs-only"/>
                <ClassifyNav class="hidden-sm-and-up" mode="horizontal" />
                <ContentList/>
                <Pagination/>
            </el-main>
            <el-aside class="hidden-xs-only" width="250px">
                <ClassifyNav/>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Breadcrumb from './components/Breadcrumb/'
import ClassifyNav from './components/ClassifyNav/'
import ContentList from './components/ContentList/'
import Pagination from './components/Pagination/'
export default {
    components:{
        Breadcrumb,
        ClassifyNav,
        ContentList,
        Pagination
    },
    methods: {
      
    }
}
</script>

<style scoped lang="stylus">
.el-aside
    margin 2rem 0
</style>
