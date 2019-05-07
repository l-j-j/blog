<template>
    <div>
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide><img src="./images/slide1.jpg" alt="slide1" class="swiperImg"></swiper-slide>
            <swiper-slide><img src="./images/slide2.jpg" alt="slide2" class="swiperImg"></swiper-slide>
            <swiper-slide><img src="./images/slide3.jpg" alt="slide3" class="swiperImg"></swiper-slide>
            <swiper-slide><img src="./images/slide4.jpg" alt="slide4" class="swiperImg"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    data(){
        return {
            swiperOption:{
                loop:true,
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                },
                scrollbar:false
            }
        }
    }
}
</script>

<style scoped lang="stylus">
.swiperImg
    width 100%
</style>
