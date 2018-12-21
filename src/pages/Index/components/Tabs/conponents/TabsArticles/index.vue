<template>
    <div class="sideContent">
        <ul>
            <li class="sideContentList">
                <div class="listImg">
                    <img src="./images/article.jpg" alt="acticleImg">
                </div>
                <div class="listContent">
                    <p class="listContentTitle">某一人似曾相识一刻似曾经历某一刻似曾经历某一人似曾相识某一刻似曾经历一刻似曾经历</p>
                    <p class="listContentDate">2018-12-12</p>
                </div>
            </li>
            <li class="sideContentList">
                <div class="listImg">
                    <img src="./images/article.jpg" alt="acticleImg">
                </div>
                <div class="listContent">
                    <p class="listContentTitle">某一人似曾相识一刻似曾经历某一刻似曾经历某一人似曾相识某一刻似曾经历一刻似曾经历</p>
                    <p class="listContentDate">2018-12-12</p>
                </div>
            </li>
            <li class="sideContentList">
                <div class="listImg">
                    <img src="./images/article.jpg" alt="acticleImg">
                </div>
                <div class="listContent">
                    <p class="listContentTitle">某一人似曾相识一刻似曾经历某一刻似曾经历某一人似曾相识某一刻似曾经历一刻似曾经历</p>
                    <p class="listContentDate">2018-12-12</p>
                </div>
            </li>
            <li class="sideContentList">
                <div class="listImg">
                    <img src="./images/article.jpg" alt="acticleImg">
                </div>
                <div class="listContent">
                    <p class="listContentTitle">某一人似曾相识一刻似曾经历某一刻似曾经历某一人似曾相识某一刻似曾经历一刻似曾经历</p>
                    <p class="listContentDate">2018-12-12</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
@import '../../../../../../assets/css/mixins.styl';
@import '../../../../../../assets/css/varibles';
.sideContentList
    height 1.6rem
    display flex
    margin .2rem 0
    cursor pointer
    transition all .3s
    &:hover
        transform translateY(-.06rem)
        color $activeColor
    .listImg
        padding .1rem
        width 40%
        img 
            width 100%
            height 100%
    .listContent
        padding .1rem
        width 60%
        .listContentTitle
            height .8rem
            font-size .28rem
            font-weight 500
            line-height .4rem
            margin-bottom .3rem
            ellipses(2)
        .listContentDate
            color $textColor
            font-size .24rem
</style>
