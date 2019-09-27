<template>
    <div class="classif">
        <div class="classif_top">
            <div class="classif_top_c">
                <i></i>
                <span>搜索商品，共239款好物</span>
            </div>
        </div>
        <div class="classif_left">
            <div class="classif_left_l">
                <div class="classif_left_l_tabl">
                    <div class="classif_left_l_tabl_am">
                        <NavLick></NavLick> 
                    </div>
                </div>
            </div>
        </div>
         <ClassifyCont></ClassifyCont>   
    </div>
</template>
<script>
import {mapActions,mapState} from 'vuex';
import NavLick from './classify/classifyNav';
import ClassifyCont from './classify/classifyCont'
export default {
     name:'classif',
     components:{
         NavLick,
         ClassifyCont
     },
     created(){
         this.getclassify()
     },
     methods:{
         ...mapActions('classify',['getclassify']),
     }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .classif{
        width: 100%;
        height: 100%;
    }
    .classif .classif_top{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: .8rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .classif .classif_top .classif_top_c{
        width: 90%;
        height: 70%;
        background: #ededed;
        border-radius: .1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .28rem;
        color: #666;
    }
    .classif .classif_top .classif_top_c span{
        margin-left: .1rem;
    }
    .classif .classif_left{
        position: fixed;
        top: .84rem;
        bottom: 1rem;
        width: 2rem;
        background: white;
        border-right: 1px solid #f2f2f6;
    }
    .classif .classif_left .classif_left_l{
        height: 378px;
    }
    .classif .classif_left .classif_left_l .classif_left_l_tabl{
        flex-direction: row;
    }
    .classif .classif_left .classif_left_l .classif_left_l_tabl .classif_left_l_tabl_am{
        width: 100%;
    }
    .classif .classif_left .classif_left_l .classif_left_l_tabl .classif_left_l_tabl_am ul{
        display: flex;
        flex-direction: column;
        height: 378px;
        text-align: center;
    }
</style>