<template>
    <div class="classifyNik">
           <div class="classifyNik_title">
                <HeadBus :title="this.title"></HeadBus>
            </div>
           <div class="classfiy_nav" ref="list1">
                <div class="classfiy_l" >
                    <span v-for="item in this.classifNicdata.brotherCategory" 
                    :key="item.id" @click="detals(item.id)" :class="[flag===item.id?'active1':'']">
                         {{item.name}}
                    </span>
                </div>
           </div>
           <div class="classifyNik_cont">
            
                <div class="classCon" v-if="this.lisData.length">
                     <div class="classify_item" v-for="item in this.lisData" :key="item.id">
                          <p :style="{'backgroundImage':`Url(${item.list_pic_url})`}"></p>
                          <div>{{item.name}}</div>
                          <h4>￥{{item.retail_price}}元</h4>
                     </div>
                </div>
                <div v-else class="classify_zan">
                       暂无数据
                </div>
           </div>
    </div>
</template>


<script>
  import {mapActions,mapState} from 'vuex';
  import HeadBus from '../../components/special/index.vue';
  import BScroll from "better-scroll";
  export default {
      components:{
          HeadBus
      },
      mounted() {
      this.lefts = new BScroll(this.$refs.list1, {
             click: true,
             scrollX: true,
          });    
      },
      data(){
        return {
           id:this.$route.params.id,
           title:"奇趣分类",
           flag:this.$route.params.id
         }  
      },
      methods:{
          ...mapActions('classify',['classifyNics','xiangList']),
          detals(id){
              this.flag = id;
              console.log(this.flag)
              this.xiangList({categoryId:id,size:20,page:1})
          }
      },
      created(){
          this.classifyNics({id:this.id}),
          this.xiangList({categoryId:this.$route.params.id,size:20,page:1})
      },
      computed:{
           ...mapState('classify',['classifNicdata','lisData'])
      }   
   }
</script>

<style lang="scss">
       .classifyNik{
          font-size: .4rem;
          width: 100%;
          height: 100%;
          display:flex;
          flex-flow: column;
          .active1{
              color:#108ee9;
              border-bottom: .04rem solid #108ee9
          }
      }
      .classfiy_nav{
           height:.8rem;
           overflow: hidden;
           font-size: .32rem;
           width: 100%;  
      }
      .classfiy_l{
           height: 100%;
           width: 15rem;
      }
      .classfiy_l span{
          display: inline-block;
          line-height: .8rem;
          font-size: .3rem;
          text-align: center;
          padding: 0 .3rem;
          height: 95%;
      }
      .classifyNik_title{
           height: 1rem;
      }
      .classifyNik_cont{
           flex:1;
           overflow: auto;
          .box{
           height: 1.5rem;
           }
      }
      .classCon{
          width: 100%;
          height: 100%;
          display: flex;
          flex-wrap: wrap;
         
          .classify_item{
              width: 50%;
              height: 5rem;
              font-size: .25rem;
              padding: 2%;
              p{
                  width: 100%;
                  height: 70%;
                  background-position-x: center;
                  background-size: 100%;
                  background-position-y: center;
              }
              div{
                  height: 15%;
                  line-height: .8rem;
                  overflow: hidden;
                  text-overflow:ellipsis;
                  white-space: nowrap;
                  text-align: center; 
              }
             h4{
                  color:red;
                  text-align: center;
                  height: 15%;
                  line-height: .7rem;
              }
          }
      }
      .classify_zan{
          text-align: center;
          height: 100%;
          line-height: 12rem;
      }
</style>