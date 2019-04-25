<template>
<div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.name}}</el-breadcrumb-item>
        <el-breadcrumb-item>{{breadcrumb}}</el-breadcrumb-item>
    </el-breadcrumb>
</div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
    computed:{
        breadcrumb(){
            return this.$store.state.breadcrumb?this.$store.state.breadcrumb:'全部'
        }
    },
    methods:{
        ...mapMutations(['changeType'])
    },
    mounted(){
        this.changeType('');
    }
}
</script>

<style scoped lang="stylus">
.el-breadcrumb
    font-size .3rem
</style>