<template>
  <div class="BScrolls" ref="lis">
    <div class="specialList">
      <div class="specialItem" v-for="(item,index) in list.value" :key="index">
        <!-- <img :src="item.scene_pic_url" alt="">
        <div class="special_title">{{item.title}}</div>
        <div class="special_cont">{{item.subtitle}}</div>
        <div class="special_price">{{item.price_info}}元起</div>-->
        {{item}}
      </div>
      <p class="upload" v-if="uploadflag">{{upload}}</p>
      <p class="download" v-if="downloadflag">{{download}}</p>
    </div>
  </div>
</template> 
<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  prop: ["lis"],
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          query: {},
          limit: 10,
          count: 1000,
          refreshDispatch: "regest/pullRefresh",
          loadMoreDispatch: "regest/loadMore",
          value: ["1", "2", "3", "4"]
        };
      }
    }
  },
  data() {
    return {
      upload: "正在加载",
      up: "加载完成",
      download: "正在刷新",
      down: "刷新完毕",
      uploadflag: false,
      downloadflag: false
    };
  },
  created(){
     console.log()
  },
  methods: {
    async pullRefresh(payload) {
      await this.$store.dispatch(this.list.refreshDispatch, payload);
    },
    async loadMore(payload) {
      await this.$store.dispatch(this.list.loadMoreDispatch, payload);
    },
    scrollUp(e) {
      let leftsY = Math.abs(this.lefts.maxScrollY);
      let h = Math.abs(e.y);
      //console.log(h);
      // if (h > leftsY + 50) {
      //   this.uploadflag = true;
      //   this.upload = "正在加载";
      // } else if (h === leftsY) {
      //   this.upload = "加载完毕";
      //   //this.uploadflag=false;
      // }

      // if (e.y > 70) {
      //   this.downloadflag = true;
      //   this.download = "正在加载";
      // } else if (e.y == 0) {
      //   //  this.downloadflag=false;
      //   this.download = "刷新完毕";
      // }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.lefts) {
        this.lefts = new BScroll(this.$refs.lis, {
          scrollY: true,
          click: true,
          probeType: 3,
          mouseWheel: {
            speed: 20,
            invert: false,
            easeTime: 300
          },
          pullDownRefresh: {
            threshold: 70,
            stop: 0
          },
          pullUpLoad: {
            threshold: 600
          }
        });
        //this.lefts.on("scroll", this.scrollUp);
        // 监听下拉刷新事件
        this.lefts.on("pullingDown", async ()=>{
          await this.pullRefresh()
          console.log('网络请求结束')
          this.lefts.finishPullDown()
        });
         this.lefts.on("pullingUp", async ()=>{
          await this.loadMore({page: list.page+1});
          this.lefts.finishPullUp()
        })
      }else{
           this.lefts.refresh();
      }
    });
  }
};
</script>

<style lang="scss">
.BScrolls {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.specialLit {
  width: 100%;
}
.specialItem {
  width: 100%;
  height: 5.8rem;
  text-align: center;
  img {
    height: 4rem;
    width: 100%;
  }
  .special_price {
    color: red;
  }
}
.upload {
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  z-index: 999px;
}
.download {
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  color: #fff;
  z-index: 999px;
}
</style>