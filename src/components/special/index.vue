<template>
     <div class="headerBus">
          <div class="btns" @click="add"> <i class="iconfont">&#xe697;</i> </div>
          <div class="titels">
                 <span>{{title}}</span>
          </div>
     </div>
</template>
<script>
    export default {
        props:['title'],
        methods:{
            add(){
                this.$router.go(-1)
            }
        }
    }
</script>
<style lang="scss">
     .headerBus{
         width: 100%;
         height: 100%;
         display: flex;
        .btns{
            width: .6rem;
            height: 100%;
            line-height: 1rem;
            text-align: center;
        }
        .titels{
            flex:1;
            text-align: center;
            line-height: 1rem;
            font-size: .3rem;
            color:#333;
            img{
                width: 100%;
            }
        }
     }
</style>