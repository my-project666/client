<template>
  <div class="shops">
    <div class="shop_title">
       <Hand :title="info.name"></Hand>
    </div>
    <div class="shops_cont">
      <div class="shops_banner" v-if="gallery.length">
        <div class="swiper-container" ref="swipe">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="item in this.shopDetail.gallery"
              :key="item.id"
              :style="{'backgroundImage':`Url(${item.img_url})`}"
            >
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div v-else class="wu">
              暂无数据
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>
<script>
import Hand from "../../components/special/index";
import { mapState, mapActions } from "vuex";
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
export default {
  components: {
    Hand
  },
  methods: {
    ...mapActions("shops", ["getgoodsDetail", "getgoodsRelated"]),
     swiprs(){
        let mySwiper = new Swiper(this.$refs.swipe, {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        //自动轮播
        autoplay: {
          delay: 2000, //控制时间
          disableOnInteraction: true,
          disableOnInteraction: false
        },
        effect: "coverflow", //控制翻滚动效
        pagination: {
          el: ".swiper-pagination", //点标记
          dynamicBullets: true,
         
        }
      });
  },
  },
 
  created() {
    //this.getgoodsDetail({ id: this.$route.params.id });
    this.getgoodsRelated({ id: this.$route.params.id });
  },
  computed: {
    ...mapState("shops", ["shopDetail", "shopRelated",'info','gallery'])
  },
  mounted() {
    this.$nextTick(async () => {
            const reust=await this.getgoodsDetail({ id: this.$route.params.id });
            const re=await this.swiprs()
    });
  }
};
</script>
<style lang="scss">
.shops {
  width: 100%;
  height: 100%;
  font-size: 0.35rem;
  display: flex;
  flex-flow: column;
}
.shop_title {
  height: 1rem;
}
.shops_cont {
  flex: 1;
  overflow: auto;
}
.foot {
  height: 1rem;
  background: #efefef;
}
.shops_banner {
  width: 100%;
  height: 7rem;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-wrapper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
}
.wu{
    height: 1rem;
    text-align: center;
}
</style>