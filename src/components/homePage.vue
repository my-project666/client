<template>
    <div class="home">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="javascript:">
                     <img src="../images/1.jpg" alt="">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="javascript:">
                    <img src="../images/2.jpg" alt="">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="javascript:">
                    <img src="../images/3.jpg" alt="">
                </a>
            </div>
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-pagination"></div>
    </div>
    <div class="home_nav">
        <ul>
            <li>
                <i class="iconfont">&#xe60a;</i>
                <span>居家</span>
            </li>
            <li>
                <i class="iconfont">&#xe614;</i>
                <span>餐厨</span>
            </li>
            <li>
                <i class="iconfont">&#xe649;</i>
                <span>配件</span>
            </li>
            <li>
                <i class="iconfont">&#xe64c;</i>
                <span>服装</span>
            </li>
            <li>
                <i class="iconfont">&#xe606;</i>
                <span>志趣</span>
            </li>
        </ul>
    </div>
    <div class="home_brandBox">
        <div class="home_brandBox_top">
            品牌制造商直供
        </div>
        <div class="home_brandBox_con">
            <a href="#">
                <div class="home_brandBox_con_div">
                    CK制造商
                </div>
                <div class="home_brandBox_con_div1">
                    39元起
                </div>
                <img src="../images/4.jpg" alt="">
            </a>
            <a href="#">
                <div class="home_brandBox_con_div">
                    MUJI制造商
                </div>
                <div class="home_brandBox_con_div1">
                    12.9元起
                </div> 
                    <img src="../images/5.jpg" alt="">
            </a>
            <a href="#">
                <div class="home_brandBox_con_div">
                    WMF制造商
                </div>
                <div class="home_brandBox_con_div1">
                    9.9元起
                </div> 
                    <img src="../images/6.jpg" alt="">
            </a>
            <a href="#">
                <div class="home_brandBox_con_div">
                    Coach制造商
                </div>
                <div class="home_brandBox_con_div1">
                    49元起
                </div> 
                    <img src="../images/7.jpg" alt="">
            </a>
        </div>
    </div>
    <div class="home_newGood">
        <div class="home_newGood_top">
            新品首发
        </div>
        <div class="home_newGood_con">
            <a href="#">
                <img src="../images/8.png" alt="">
                <div class="home_newGood_con_c">
                    蔓越莓曲奇 200克
                </div>
                <div class="home_newGood_con_cq">
                    "￥"36
                </div>
            </a>
            <a href="#">
                <img src="../images/9.png" alt="">
                <div class="home_newGood_con_c">
                    趣味粉彩系列笔记本
                </div>
                <div class="home_newGood_con_cq">
                    "￥"29
                </div>
            </a>
            <a href="#">
                <img src="../images/10.png" alt="">
                <div class="home_newGood_con_c">
                    简约知性记忆棉坐式
                </div>
                <div class="home_newGood_con_cq">
                    "￥"46
                </div>
            </a>
            <a href="#">
                <img src="../images/11.png" alt="">
                <div class="home_newGood_con_c">
                    趣味彩粉系列记忆棉坐式
                </div>
                <div class="home_newGood_con_cq">
                    "￥"49
                </div>
            </a>
        </div>
    </div>
    <div class="home_hotgats">
        <div class="home_hotgats_top">
            人气推荐
        </div>
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
    .home{
        width: 100%;
        height: 100%;
    }
    .home_nav{
        width: 100%;
        height: 1.4rem;
        background: white;
        display: flex;
    }
    .home_nav ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .home_nav ul li{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
    }
    .home_nav ul li i{
        height: 80%;
        display: block;
        padding: .2rem;
        margin: auto;
    }
    .home_nav ul li span{
        height: 20%;
        font-size: .24rem;
        text-align: center;
    }
    .swiper-container{
        width: 100%;
        height: 200px;
    }
    .swiper-slide img{
        width: 100%
    }
    .home_brandBox{
        width: 100%;
        height: 270px;
        margin-top:10px;
    }
    .home_brandBox .home_brandBox_top{
        height: 1rem;
        background: white;
        text-align: center;
        font-size: .3rem;
        line-height: 1rem;
        letter-spacing: .02rem;
        font-weight: bold;
    }
    .home_brandBox .home_brandBox_con{
        background: white;
        display: flex;
        flex-wrap: wrap;
    }    
    .home_brandBox .home_brandBox_con a{
        width: 50%;
        height: 2.2rem;
        position: relative;
    }
    .home_brandBox .home_brandBox_con a .home_brandBox_con_div{
        position: absolute;
        top: .2rem;
        left: .2rem;
        font-size: .3rem;
        color: #000;
    }
    .home_brandBox .home_brandBox_con a .home_brandBox_con_div1{
        position: absolute;
        top: .6rem;
        left: .2rem;
        font-size: .24rem;
        color: darkgrey;
    }
    .home_brandBox .home_brandBox_con a img{
        width: 100%;
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
    }
    .home_newGood{
        width: 100%;
        height: 1rem;
        margin-top: .2rem;
        background: white;
    }
    .home_newGood .home_newGood_top{
        height: 1rem;
        background: white;
        text-align: center;
        font-size: .3rem;
        line-height: 1rem;
        letter-spacing: .02rem;
        font-weight: bold;
    }
    .home_newGood .home_newGood_con{
        background: white;
        display: flex;
        flex-wrap: wrap;
    }    
    .home_newGood .home_newGood_con a{
        width: 50%;
        height: 4rem;
        text-decoration:none;
        color:#000;
    }
    .home_newGood .home_newGood_con a img{
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
        height: 70%;
        width: 100%;
        
    }
    .home_newGood .home_newGood_con a .home_newGood_con_c{
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .3rem;
    }
    .home_newGood .home_newGood_con a .home_newGood_con_cq{
        height: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .3rem;
    }
</style>