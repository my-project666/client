<template>
    <div class="specialDl"> 
         <header class="head"> 
            <HeadBus :title="this.specialDetal.title"></HeadBus>  
         </header>
         <div class="special_main">
            <div v-html="this.specialDetal.content" class="imgs"></div> 
            <div class="message">
                  <div class="ly">精选留言</div>
                  <div class="icon"><i class="iconfont">&#xe617;</i></div>
            </div>
            <div class="pin">
                  <div class="pin_items">
                      <div class="ming">
                          <div class="mi">匿名用户</div>
                          <div class="time">2017-07-29 23:47:32</div>
                      </div>
                      <div class="pin_cont">
                          很不错
                      </div>
                  </div>
                   <div class="pin_items">
                      <div class="ming">
                          <div class="mi">匿名用户</div>
                          <div class="time">2017-07-29 23:47:32</div>
                      </div>
                      <div class="pin_cont">
                          很不错
                      </div>
                  </div>
                   <div class="pin_items">
                      <div class="ming">
                          <div class="mi">匿名用户</div>
                          <div class="time">2017-07-29 23:47:32</div>
                      </div>
                      <div class="pin_cont">
                          很不错
                      </div>
                  </div>
                   <div class="pin_items">
                      <div class="ming">
                          <div class="mi">匿名用户</div>
                          <div class="time">2017-07-29 23:47:32</div>
                      </div>
                      <div class="pin_cont">
                          很不错
                      </div>
                  </div>
                   <div class="pin_items">
                      <div class="ming">
                          <div class="mi">匿名用户</div>
                          <div class="time">2017-07-29 23:47:32</div>
                      </div>
                      <div class="pin_cont">
                          很不错
                      </div>
                  </div>
            </div>
            <div class="more"> 查看跟多评论</div>
            <div class="tuijian">
                <div class="tui"> 推荐专题</div>
                <Correlation :id="this.$route.params.id"></Correlation>
            </div>
           
            
         </div>
    </div>
</template>
<script>
     import {mapActions,mapState} from 'vuex';
     import HeadBus from '../../components/special/index.vue';
     import Correlation from '../../components/special/correlation.vue'
     export default {
         components:{
             HeadBus,
             Correlation,
         },
         data(){
             return {
                 id:this.$route.params.id
             }
         },
         created(){ 
             this.specialDeta({id:this.id})
         },
         computed:{
             ...mapState('special',['specialDetal'])
         },
         methods:{
             ...mapActions('special',['specialDeta'])
         }
     }
</script>  
<style lang="scss">
    .specialDl{
        width: 100%;
        height: 100%;
        font-size: .4rem;
        display: flex;
        flex-flow: column;
    }
    .head{
        height: 1rem;
    }
    .special_main{
        flex:1;
        overflow: auto;
        .imgs{
            width: 100%;
            img{
                width: 100%;
            }
        }
    }
    .message{
        display: flex;
        height: 1rem;
        padding: 0 3%;
        .ly{
            width: 6rem;
            line-height: 1rem;
            font-size:.35rem;
        }
        .icon{
            flex:1;
            text-align: center;
            line-height: 1rem;
        }
    }
    .pin{
        padding: 0 3%;
        .pin_items{
            height: 1.5rem;
            display: flex;
            flex-flow: column;
            border-top: .02rem solid #ccc;
            .ming{
                display: flex;
                height: 50%;
                .mi{
                    width: 60%;
                    height: 100%;
                    font-size: .3rem;
                    line-height: .75rem;
                }
                .time{
                    width: 40%;
                    height: 100%;
                    font-size: .25rem;
                    line-height: .75rem;
                }
            }
            .pin_cont{
                height: 50%;
                font-size: .3rem;
                line-height: .75rem;
            }
        }
    }
    .more{
        height:.8rem;
        text-align: center;
        line-height: .8rem;
        font-size: .3rem;
    }
    .tuijian{
          background: #efefef;
        .tui{
           height:.8rem;
           text-align: center;
           line-height: .8rem;
           font-size: .3rem;
           background: #efefef;
        }
        .tuijian_cont{
            flex:1;
            background: #ccc;
        }
    }
</style>