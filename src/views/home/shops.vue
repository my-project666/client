<template>
  <div class="shops">
    <div class="shop_title">
       <Hand :title="info.name"></Hand>
    </div>
    <div class="shops_cont">
          <Swipers :swiperArr="gallery"></Swipers> 
          <ul class="shops_title">
                <li><span>★</span>30天无忧退货</li>
                <li><span>★</span>48小时执行快速退款</li>
                <li><span>★</span>满88元免邮费</li>
          </ul>
          <div class="shios_detal"> 
                 <h3>{{info.name}}</h3>
                 <p>{{info.goods_brief}}</p>
                 <span>￥{{info.retail_price}}</span>
          </div>
          <div class="shops_size"> 
               <div :style="{flex:'1'}"></div>
               <div class="shops_sh">X{{info.is_app_exclusive}}</div>
               <div class="shops_si">选择规则></div>
          </div>
          <div class="shops_parameter">
              <div :style="{textAlign:'center',color:'#2196f3'}" class="">——商品参数——</div>
              <div class="shops_cli">
                   <div v-for="item in shopDetail.attribute" :key="item.id" class="shop_items">
                         <div class="shops_name">
                               {{item.name}}
                         </div>
                         <div :style="{flex:'1'}">
                             {{item.value}}
                         </div>
                   </div>
              </div>
          </div>
          <div class="shops_Img" v-html="info.goods_desc"> </div>
          <div class="shops_x">
              <div :style="{textAlign:'center',color:'#2196f3'}">——常见问题——</div>
              <div v-for="item in shopDetail.issue" :key="item.id" class="shops_p"> 
                   <div><span :style="{color:'red'}">√</span> {{item.question}}</div>
                   <div>{{item.answer}}</div>
              </div>
          </div>
          <div class="shops_public">   ——大家都在看——</div>
          <div class="shops_bot">
             <div class="shops_t" v-for="item in shopRelated.goodsList" :key="item.id">
                    <div><img :src="item.list_pic_url" alt=""></div>
                    <div :style="{marginTop:'.1rem'}">{{item.name}}</div>
                    <p :style="{marginTop:'.1rem',color:'red'}">￥{{item.retail_price}}</p>
             </div>
          </div>
    </div>
    <div class="foot">
         <ShopCar></ShopCar>  
    </div>
  </div>
</template>
<script>
import Hand from "../../components/special/index";
import { mapState, mapActions } from "vuex"; 
import Swipers from '../../components/swiper';
import ShopCar from '../../components/shopcar'
export default {
  components: {
    Hand,
    Swipers,
    ShopCar
  },
  methods: {
    ...mapActions("shops", ["getgoodsDetail", "getgoodsRelated"]),
  },
  async created() {
    await this.getgoodsRelated({ id: this.$route.params.id });
    await this.getgoodsDetail({ id: this.$route.params.id });
  },
  computed: {
    ...mapState("shops", ["shopDetail", "shopRelated",'info','gallery'])
  },
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
    background: #efefef;
  }
  .foot {
    height: 1rem;
  }
  .shops_title{
    background: #fff;
    height: .8rem;
    display: flex;
    font-size: .25rem;
    justify-content: space-around;
    align-items: center;
    span{
      color: red;
    }
  }
  .shios_detal{
     background: #fff;
     padding: .4rem;
     display: flex;
     flex-flow: column;
     text-align: center;
     h3{
        font-weight: normal;
        padding-bottom: .2rem;
     }
     p{
       font-size: .3rem;
       padding-bottom: .2rem;
     }
     span{
        color: red;
        height: .9rem;
        line-height: .9rem;
     }
  }
  .shops_size{
     background: #fff;
    padding:0 .5rem;
    height: .9rem;
    display: flex;
    font-size: .3rem;
    .shops_sh{
      width: .4rem;
      line-height: .9rem;
      margin-right: .2rem;
      color: red;
    }
    .shops_si{
      width: 1.6rem;
      line-height: .9rem
    }
  }
  .shops_parameter{
    padding:.5rem;
    margin-top: .2rem;
    background: #fff;
    font-size: .3rem;
  }
  .shop_items{
    padding: .1rem 0;
    line-height: .6rem;
    display:flex;
    font-size: .3rem;
    background: #dcdfe6;
    margin-top: .1rem;
    align-items: center;
    .shops_name{
      width:1.8rem;
      text-align: center;
    }
  }
  .shops_Img{
     width: 100%;
     padding: 0;
     margin: 0;
     p{
        width:100%;
        height: 2rem;
        background: #fff;
        img{
          width: 100%;
       }
     }
  }
  .shops_Img>p:last-child{
    height: 0;
  }
  .shops_x{
      padding:.5rem;
      background: #fff;
      font-size: .3rem;
      .shops_p{
        display: flex;
        flex-flow: column;
        justify-content: center;
        list-style: .8rem;
        margin-top: .2rem;
      }
  }
  .shops_public{
    padding: 5% 10%;
    text-align: center;
    color:cornflowerblue;
    margin-top: .2rem;
    background: #fff;
    font-size: .3rem;
  }
  .shops_bot{
     display:flex;
     flex-wrap: wrap;
     background: #fff;
     .shops_t{
       width: 50%;
       text-align: center;
       font-size: .3rem;
       img{
         width: 100%;
       }
     }
  }
</style>