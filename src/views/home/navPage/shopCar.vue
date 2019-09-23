<template>
     <div class="shopCar">
              <ul class="list">
                  <li>30天无忧退货</li>
                  <li>48小时快速退货</li>
                  <li>满88元免邮费</li>
              </ul>
              <div class="cont">
                  <div class="item">
                    <div class="xuan">
                         选择
                    </div>
                    <div class="shopImg">
                         图片
                    </div>
                    <div class="shopPrice">
                         <div class="title">日式蓬软太鼓抱枕</div>
                         <div></div>
                         <div class="prve">￥29</div>
                    </div>
                    <div class="quantity">
                           ×3
                    </div>
                  </div>
              </div>
              <div class="price">
                   <div class="img"></div>
                   <div class="shop">
                       <span>已选(5)</span>
                       <span>￥2755</span>
                   </div>
                   <div class="bian">
                       编辑
                   </div>
                   <div class="place ">
                       下单
                   </div>
              </div>
     </div>
</template>

<script>

   export default {

   }
</script>

<style lang="scss">
    .shopCar{
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
        font-size: .3rem;
        background: #f4f4f4;
    }
    .list{
        height:.8rem;
        display: flex;
        justify-content: space-around;
        line-height: .8rem;
    }
    .cont{
         flex: 1;
         overflow: auto;
        .item{
            padding: 3% 0;
            padding-right: 3%;
            height: 2.2rem;
            background: #fff;
            height: 2.2rem;
            display: flex;
            .xuan{
                width: .8rem;
                height: 100%;
            }
            .shopImg{
                height: 100%;
                width: 1.8rem;
            }
            .shopPrice{
                height: 100%;
                width: 4.2rem;
                padding: 0 1%;
                display: flex;
                flex-flow: column;
                line-height: .6rem;
                div{
                    flex:1;
                }
                .prve{
                    color:red;
                }
            }
            .quantity{
                flex:1;
                height: 100%;
            }
        }
    }
    .price{
        height: 1.1rem;
        background: #fff;
        display: flex;
        line-height: 1.1rem;
        overflow: auto;
    }
    .img{
        width: .8rem;
        height: 100%;
    }
    .shop{
        width: 2.5rem;
        height: 100%;
        text-align: center;
    }
    .bian{
        width: 1.5rem;
        height: 100%;
        text-align: center;
    }
    .place {
        flex:1;
        text-align: center;
        background: #ab2b2b;
        color: #fff;
    }
</style>