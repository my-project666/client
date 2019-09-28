<template>
  <div class="special" ref="list">
    <div class="specialList">
      <div class="specialItem" v-for="(item) in list" :key="item.id" @click="details(item.id)">
        <img :src="item.scene_pic_url" alt="">
        <div class="special_title">{{item.title}}</div>
        <div class="special_cont">{{item.subtitle}}</div>
        <div class="special_price">{{item.price_info}}元起</div>
      </div>
    </div>
  </div>
</template>    
<script>
import BScroll from "better-scroll";
import {mapActions,mapState} from 'vuex'
export default {
  components:{
     
  },
  computed:{
      ...mapState('special',['list']),
  },
  mounted() {
       let lefts = new BScroll(this.$refs.list,{
         click:true
       })
  },
  methods:{
      ...mapActions('special',['getList']),
      details(id){
          this.$router.push(`/specialDl/${id}`)
      }
  },
  created(){
      this.getList()
  }
};
</script> 

<style lang="scss">
.special {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  font-size: 0.3rem;
  overflow: hidden;
}
.specialLit {
  width: 100%;
}
.specialItem {
  width: 100%;
  height: 5.8rem;
  text-align: center;
  img{
      height:4rem;
      width: 100%;
  }
  .special_price{
      color:red;
  }
}
</style>