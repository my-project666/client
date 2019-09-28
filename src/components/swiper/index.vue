<template>
  <div class="shops_banner">
    <div class="swiper-container" ref="swipe" v-if="swiperArr.length">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="item in swiperArr"
          :key="item.id"
          :style="{'backgroundImage':`Url(${item.img_url})`}"
        ></div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
      <div v-else class="wu">暂无数据</div>
  </div>
</template>   
<script>
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import "swiper/js/swiper"
export default {
  props: {
    swiperArr: {
      type: Array
    }
  },
  methods: {
    swiprs() {
      let mySwiper = new Swiper(this.$refs.swipe, {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项//自动轮播
        autoplay: {
          delay: 2000, //控制时间
          disableOnInteraction: true,
          disableOnInteraction: false
        },
        effect: "coverflow", //控制翻滚动效
        pagination: {
          el: ".swiper-pagination", //点标记
          dynamicBullets: true
        }
      });
    }
  },
  mounted() {
    this.$nextTick(async () => {
        this.swiprs();
    });
  }
};
</script>
<style lang="scss">
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
.wu {
  height: 1rem;
  text-align: center;
}
</style>