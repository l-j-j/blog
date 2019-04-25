<template>
    <div>
        <el-container>
            <el-main>
                <Breadcrumb class="hidden-xs-only"/>
                <ClassifyNav @changeType="handleChangeType" class="hidden-sm-and-up" mode="horizontal" />
                <ContentList :list="noteList"/>
                <Pagination :total="total" :number="number" @currentChange="handleCurrentChange"/>
            </el-main>
            <el-aside class="hidden-xs-only" width="250px">
                <ClassifyNav @changeType="handleChangeType"/>
            </el-aside>
        </el-container>
    </div>
</template>

<script>
import Breadcrumb from '../../components/Breadcrumb/'
import ClassifyNav from '../../components/ClassifyNav/'
import ContentList from '../../components/ContentList/'
import Pagination from '../../components/Pagination'
import {getNoteList} from '../../api'
export default {
    components:{
        Breadcrumb,
        ClassifyNav,
        ContentList,
        Pagination
    },
    data(){
        return {
            page:1,
            number:20,
            type:'',
            total:0,
            noteList:[]
        }
    },
    methods: {
        getList(){
            let params = {
                page:this.page,
                number:this.number,
                type:this.type
            }
            getNoteList(params).then(res=>{
                this.total = res.count
                this.noteList = res.data
            })
        },
        handleCurrentChange(val){
            this.page = val
            this.getList()  
        },
        handleChangeType(name){
            this.type = name
            this.getList()
        }
    },
    mounted(){
        this.getList()
    }
}
</script>

<style scoped lang="stylus">
.el-aside
    margin 2rem 0
</style>
