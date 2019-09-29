<template>
     <div class="foots">
         <div class="wujiao">☆</div>
         <div class="quantity"><span>23</span></div>
         <div class="shop_add" @click="delo">加入购物车</div>
         <div class="shop_li">立即购买</div>
         <div class="mack" v-if="flag">
              <div class="mack_t" @click="close">

              </div>
              <div class="mack_cont">
                   <div class="mack_top">

                   </div>
                    <div class="mack_bottom">

                   </div>
              </div>
         </div>
     </div>
</template>

<script>
    export default {
         data(){
                return {
                    flag:false
                }  
            },
        methods:{
            delo(){
                this.flag=!this.flag;
                
            },
            close(){
                 this.flag=!this.flag
            }
        }
    }
</script>

<style lang="scss">
    .foots{
        height: 100%;
        display: flex;
        line-height: 1rem;
        
        .wujiao,.quantity{
            width: 1.44rem;
             text-align: center;
        }
        .shop_add,.shop_li{
            flex:1;
             text-align: center;
        }
        .shop_add{
           background: linear-gradient(90deg, #ff9500, #ff5e3a);
           color:#fff;
            text-align: center;
        }
        .shop_li{
            background: linear-gradient(90deg, #1d62f0, #19d5fd);
            color:#fff;
             text-align: center;
        }
    }
    .mack{
        position: absolute;
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        top:0;
        left:0;
        z-index: 999;
        display: flex;
        flex-flow: column;
        .mack_cont{
           position: absolute;
           height: 5rem;;
           background: #fff;
           bottom:0;
           width: 100%;
           display:flex;
           flex-flow: column;
           .mack_top{
               padding: 5%;
               height: 4rem;
           }
          .mack_bottom{
              flex:1;
              background: #ccc;
          }
        }
        .mack_t{
           flex: 1;
        }
    }
</style> 
