<template>
       <div class="classif_right">
            <div class="classif_right_top">
                  <img :src="this.defaultData.wap_banner_url" alt="">
                  <div class="tls">{{this.defaultData.front_name}}</div>
            </div>
            <div class="classif_right_create">
                <div></div>
                  {{this.defaultData.name}}分类
                <div></div>
            </div>
            <div class="classif_right_subCat">
                <p  v-for="item in this.defaultData.subCategoryList"
                  :key="item.id" @click="detals(item.id)">
                    <span :style="{'backgroundImage':`Url(${item.wap_banner_url})`}"></span>
                    <b>{{item.name}}</b>
                </p> 
            </div>
        </div>
</template>    

<script>
    import {mapState,mapActions} from 'vuex'
    export default {
         methods:{
             detals(id){
                 console.log(id)
                 this.$router.push(`/classifyNik/${id}`)
             }
         },
         computed:{
             ...mapState('classify',['defaultData'])
         }
    }
</script>  
<style lang="scss">
    .classif_right{
        margin-top: .84rem;
        margin-left: 2rem;
        height:100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
       
    }
    .classif_right .classif_right_top{
        height: 2rem;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: .3rem;
        position: relative;
        img{
            width: 100%;
        }
        .tls{
            position: absolute;
        }
    }
    .classif_right_create{
        background: white;
        padding: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .28rem;
        color: #2196f3;
    }    
    .classif_right_create div{
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .classif_right_subCat{
        background: white;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 .2rem .2rem .2rem;
        
    }
    .classif_right_subCat p{
        width: 50%;
    }
    .classif_right_subCat p span{
        width: 100%;
        padding: .2rem;
        display: block;
        height: 2.5rem;
        background-position-x: center;
        background-size: 100%;
        background-position-y: center;
    }
    .classif_right_subCat p b{
        font-size: .28rem;
        text-align: center;
        padding: 0.02rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        width: 100%;
    }
    a{
        text-decoration: none;
        color:#333;
    }
</style>