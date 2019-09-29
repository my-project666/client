<template>
    <div class="tuijians">
        <div class="shang_header">
            <div class="shang_header_left">
                <i class="iconfont">&#xe697;</i>
            </div>
            <div class="shang_header_title">
                可水洗舒柔丝结真
            </div>
            <div class="shang_header_right">
            </div>
        </div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="javascript:">
                        <img src="../../images/w1.png" alt="">
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="javascript:">
                        <img src="../../images/w1.png" alt="">
                    </a>
                </div>
            </div>
            <!-- 如果需要导航按钮 -->
            <div class="swiper-pagination"></div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
export default {
    mounted(){
     var mySwiper = new Swiper('.swiper-container', {
            direction: 'horizontal', // 垂直切换选项

            loop: true, // 循环模式选项
            // 如果需要前进后退按钮
            //控制左右按钮
            navigation: {
                nextEl: '.swiper-button-next',//对应左边按钮类名
                prevEl: '.swiper-button-prev',//对应右边按钮类名
            },
            //自动轮播
            autoplay: {
                delay: 3000, //控制时间
                disableOnInteraction: true,
                disableOnInteraction: false,
            },
            effect: 'coverflow',  //控制翻滚动效
            pagination: {
                el: '.swiper-pagination',  //点标记
                dynamicBullets: true,
                dynamicMainBullets: 2
            },
        })
  }
}
</script>
<style scoped>
    .swiper-container{
        width: 100%;
        height: 200px;
    }
    .swiper-slide img{
        width: 100%
    }
    .tuijians{
        width: 100%;
        height: 100%;
    }
    .tuijians .shang_header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .tuijians .shang_header div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tuijians .shang_header .shang_header_left{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .tuijians .shang_header .shang_header_left i{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .tuijians .shang_header .shang_header_title{
        flex: 1 1;
        font-size: .32rem;
    }
    .tuijians .shang_header .shang_header_right{
        width: .6rem;
    }
</style>