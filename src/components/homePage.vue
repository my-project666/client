<template>
    <div class="home">
        <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in pase" :key="item.id">
                <a href="javascript:">
                     <img :src="item.image_url" alt="">
                </a>
            </div>
           
        </div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-pagination"></div>
    </div>
    <div class="home_nav">
        <ul >
            <li v-for="item in channel" :key="item.id" @click="homeNav(item.id)">
                <img :src="item.icon_url" alt="">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
    <div class="home_brandBox">
        <div class="home_brandBox_top">
            品牌制造商直供
        </div>
        <div class="home_brandBox_con">
            <a href="#" v-for="item in brandList" :key="item.id" @click="shangOnclik(item.id)">
                <div class="home_brandBox_con_div">
                    {{item.name}}
                </div>
                <div class="home_brandBox_con_div1">
                    {{item.floor_price}}元起
                </div>
                <img :src="item.new_pic_url" alt="">
            </a>
        </div>
    </div>
    <div class="home_newGood">
        <div class="home_newGood_top">
            新品首发
        </div>
        <div class="home_newGood_con">
            <a href="#" v-for="item in newGoodsList" :key='item.id' @click="newGoodsLists(item.id)">
                <img :src="item.list_pic_url" alt="">
                <div class="home_newGood_con_c">
                    {{item.name}}
                </div>
                <div class="home_newGood_con_cq">
                    ￥{{item.retail_price}}
                </div>
            </a>     
        </div>
    </div>
    <div class="home_hotgats">
        <div class="home_hotgats_top">
            人气推荐
        </div>
        <div class="home_hotgats_con">
            <a href="#" v-for="item in hotGoodsList" :key="item.id" @click="tuijianClick">
                <img :src="item.list_pic_url" alt="">
                <div class="home_hotgats_con_acon">
                    <div class="home_hotgats_con_acon_t">
                        {{item.name}}
                    </div>
                    <div class="home_hotgats_con_acon_b">
                        {{item.name}}
                    </div>
                    <div class="home_hotgats_con_acon_many">
                        "￥"{{item.retail_price}}
                    </div>
                </div>
            </a>
          
        
        </div>
    </div>
    <div class="home_topGoodsBox">
        <div class="home_topGoodsBox_topGood">
            专题精选
        </div>
        <div class="home_topGoodsBox_con">
            <div class="home_topGoodsBox_con_c">
                <div class="home_topGoodsBox_con_con">
                    <ul>
                        <li class="li1" v-for="item in topicList" :key="item.id">
                            <a href="#">
                                <img :src="item.scene_pic_url" alt="">
                                <div class="home_a_con">
                                    {{item.title}}
                                    <span>￥{{item.price_info}}元起</span>
                                </div>
                                <div class="home_a_con_topGood">
                                    {{item.subtitle}}
                                </div>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="home_create" v-for="item in categoryList" :key="item.id">
        <div class="home_create_top">
            {{item.name}}
        </div>
        <div class="home_create_con" >
            <a href="#" v-for="ites in item.goodsList" :key="ites.id">
                <div class="home_create_con_img">
                    <img :src="ites.list_pic_url" alt="">
                </div>
                <div class="home_create_con_name">
                    {{ites.name}}
                </div>
                <div class="home_create_con_Price">
                    ￥{{ites.retail_price}}
                </div>
            </a>
        </div>
    </div>
    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css'
import {home} from '../http/home'
export default {
    data(){
        return{
            pase:[],
            brandList:[],
            channel:[],
            newGoodsList:[],
            hotGoodsList:[],
            topicList:[],
            categoryList:[]
        }
    },
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
        this.homes()
  },
  methods:{
      async homes(){
            const result = await home();
            console.log(result.data)
            this.pase =result.data.banner;
            this.brandList = result.data.brandList;
            console.log( result.data.brandList)
            this.channel = result.data.channel;
            this.newGoodsList = result.data.newGoodsList;
            this.hotGoodsList = result.data.hotGoodsList;
            this.topicList = result.data.topicList;
            this.categoryList = result.data.categoryList;
            
      },
      homeNav (id){
          this.$router.history.push('/homeNavse/'+id)
      },
      //品牌制造商直供
      shangOnclik(id){
          this.$router.history.push('/shangPin/'+id)
      },
      //新品首发
      newGoodsLists(id){
          this.$router.history.push('/newGoods/'+id)
      },
      //人气推荐
      tuijianClick(){
          this.$router.history.push('/tuijians')
      }
      
  }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .home{
        width: 100%;
        height: 100%;
        overflow: auto;
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
    .home_nav ul li img{
        width:45px;
        height:45px;
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
        height:500px;
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
    .home_hotgats{
        width: 100%;
        height: 500px;
        margin-top: .2rem;
        background: white;
    }
    .home_hotgats .home_hotgats_top{
        width: 100%;
        height: 1rem;
        background: white;
        text-align: center;
        font-size: .3rem;
        line-height: 1rem;
        letter-spacing: .02rem;
        font-weight: bold;
    }
    .home_hotgats .home_hotgats_con{
        width: 100%;
        height: 450px;
        padding: 0 .2rem;
        min-height: 200px;
    }
    .home_hotgats .home_hotgats_con a{
        height: 3rem;
        position: relative;
        padding: 0.1rem 0;
        display: flex;
    }
    .home_hotgats .home_hotgats_con a::after{
        content: '';
        width: 200%;
        height: 1px;
        background: darkgrey;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        -webkit-transform-origin: 0;
        transform-origin: 0;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
    }
    .home_hotgats .home_hotgats_con a img{
        width: auto;
        height: 100%;
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
    }
    .home_hotgats .home_hotgats_con a .home_hotgats_con_acon{
        flex: 1 1;
        padding: 0.5rem 0;
    }
    .home_hotgats .home_hotgats_con a .home_hotgats_con_acon .home_hotgats_con_acon_t{
        font-size: .32rem;
    }
    .home_hotgats .home_hotgats_con a .home_hotgats_con_acon .home_hotgats_con_acon_b{
        color: darkgray;
        font-size: .28rem;
    }
    .home_hotgats .home_hotgats_con a .home_hotgats_con_acon .home_hotgats_con_acon_many{
        color: darkred;
        font-size: .3rem;
    }
    .home_topGoodsBox{
        width: 100%;
        height: 312px;
        margin-top: .2rem;
        background: white;
    }
    .home_topGoodsBox .home_topGoodsBox_topGood{
        height: 1rem;
        text-align: center;
        font-size: .3rem;
        line-height: 1rem;
        letter-spacing: .02rem;
        font-weight: bold;
    }
    .home_topGoodsBox .home_topGoodsBox_con{
        height: auto;
        padding-bottom: .2rem;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_c{
        position: relative;
        display: block;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        visibility: visible;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con{
        position: relative;
        display: block;
        overflow: hidden;
        height: auto;
        margin: 0px;
        padding: 0px;
        transform: translate3d(0px, 0px, 0px);
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        overflow: auto;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul{
        height: 252px;
        width:100%;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-y: scroll;
        
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li{
        width:318px;
        height: 252px;
        flex-shrink: 0;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li a{
        width: 318;
        height: 5rem;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li a img{
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
        height: 4rem;
        width:318px;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li a .home_a_con{
        font-size: .32rem;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li a .home_a_con span{
        color: darkred;
    }
    .home_topGoodsBox .home_topGoodsBox_con .home_topGoodsBox_con_con ul li a .home_a_con_topGood{
        font-size: .24rem;
        color: gray;
    }
    .home_create{
        width: 100%;
        height: auto;
    }
    .home_create .home_create_top{
        width: 100%;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .3rem;
    }
    .home_create .home_create_con{
        display: flex;
        flex-wrap: wrap;
    }
    .home_create .home_create_con a{
        width: 50%;
        height: auto;
        background: white;
        padding: .2rem;
        position: relative;
    }
    .home_create .home_create_con a .home_create_con_img{
        width: 100%;
        min-height: 2rem;
        height: auto;
    }
    .home_create .home_create_con a .home_create_con_img img{
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
        width: 100%;
        height: auto;
    }
    .home_create .home_create_con a .home_create_con_name{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: .3rem;
        padding-top: .1rem;
    }
    .home_create .home_create_con a .home_create_con_Price{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: red;
    }
</style>