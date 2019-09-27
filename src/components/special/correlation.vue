<template>
    <div class="correlation">
         <div class="correlation_item" v-for="item in this.correlationData" :key="item.id" @click="add(id)">
               <img :src="item.scene_pic_url" alt="">
               <div class="correlation_title">{{item.title}}</div>
         </div>
    </div>
</template>    
<script>
     import { mapActions,mapState}  from 'vuex'
      export default {
         props:['id'],
         created(){
              this.correlationList({id:this.id});
         },
         methods:{
             ...mapActions('special',['correlationList']),
              add(id){
                  this.$router.push('/homePage')
             } 
         },
         computed:{
             ...mapState('special',['correlationData'])
         }
     }
</script>  
<style lang="scss">
    .correlation {
        font-size: .35rem;
        padding: 0 2%;
    }
    .correlation_item{
        background: #fff;
        padding: 2%;
        margin-top: 3%;
        img{
            height: 4rem;
            width:100%;
        }
        .correlation_title{
            height: 1rem;
            line-height: 1rem;
        }
    }
</style>