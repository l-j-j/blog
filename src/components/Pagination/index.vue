<template>
    <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="number"
    @current-change="handleCurrentChange"
    v-if="total">
    
    </el-pagination>
</template>

<script>
    export default {
        props:{
            total:{
                type:Number,
                default:0
            },
            number:{
                type:Number,
                default:20
            }
        },
        methods:{
            handleCurrentChange(val){
                this.$emit('currentChange',val)
            }
        }
    }
</script>

<style scoped lang="stylus">
.el-pagination
    text-align center
</style>
