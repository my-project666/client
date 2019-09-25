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
                        <ul>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                            <li>居家</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="classif_right">
            <div class="classif_right_top">
                好吃，高颜值美食
            </div>
            <div class="classif_right_create">
                <div></div>
                居家分类
                <div></div>
            </div>
            <div class="classif_right_subCat">
                <a href="#">
                    <img src="../images/q2.png" alt="">
                    <div>
                        低洼地娃
                    </div>    
                </a> 
                <a href="#">
                    <img src="../images/q2.png" alt="">
                    <div>
                        低洼地娃
                    </div>    
                </a>        
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
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
    .classif .classif_left .classif_left_l .classif_left_l_tabl .classif_left_l_tabl_am ul li{
        flex: 1;
        border-right: 1PX solid #ddd;
        padding: 0 8px;
        font-size: .3rem;
        line-height: 40px;
    }
    .classif .classif_right{

        margin-top: .84rem;
        margin-left: 2rem;
        overflow: hidden;
    }
    .classif .classif_right_top{
        background-image: url("../images/q1.png");
        height: 100px;
        background-size: 100% 100%;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: .3rem;
    }
    .classif .classif_right_create{
        background: white;
        padding: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: .28rem;
        color: #2196f3;
    }    
    .classif .classif_right_create div{
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .classif .classif_right_subCat{
        background: white;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 .2rem .2rem .2rem;
    }
    .classif .classif_right_subCat a{
        width: 50%;
    }
    .classif .classif_right_subCat a img{
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
        width: 100%;
        padding: .2rem;
        height: auto;
    }
    .classif .classif_right_subCat a div{
        font-size: .28rem;
        text-align: center;
        padding: 0.02rem 0;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
</style>