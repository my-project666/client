<template>
    <div class="homeNav">
        <div class="homeNav_header">
            <div class="homeNav_header_left">
                <i class="iconfont" @click="add">&#xe697;</i>
            </div>
            <div class="homeNav_header_title">
                奇趣分类
            </div>
            <div class="homeNav_header_right">
            </div>
        </div>  
        <div class="homeNav_tabWrap">
            <div class="homeNav_tabWrap_c">      
                        <u class="uls">
                            <li class="uls_li" v-for="item in categoryList" :key="item.id">{{item.name}}</li>
                        </u>
            </div>
           
        </div>  
        <div class="homeNav_category">
            <div class="divs">居家</div>
            <div class="divs1">回家，放松身心</div>
        </div>
        <div class="homeNav_good">
            <div class="homeNav_good_list">
                <a href="#">
                    <div class="homeNav_good_list_img">
                        <img src="../../images/5.jpg" alt="">
                    </div>
                    <div class="homeNav_good_list_item">
                        母亲节大大大
                    </div>
                    <div class="homeNav_good_list_Price">
                        ￥2598元
                    </div>
                </a>
                <a href="#">
                    <div class="homeNav_good_list_img">
                        <img src="../../images/5.jpg" alt="">
                    </div>
                    <div class="homeNav_good_list_item">
                        母亲节大大大
                    </div>
                    <div class="homeNav_good_list_Price">
                        ￥2598元
                    </div>
                </a>
                <a href="#">
                    <div class="homeNav_good_list_img">
                        <img src="../../images/5.jpg" alt="">
                    </div>
                    <div class="homeNav_good_list_item">
                        母亲节大大大
                    </div>
                    <div class="homeNav_good_list_Price">
                        ￥2598元
                    </div>
                </a>
                
            </div>
        </div>
    </div>
</template>
<script>
import {catalog} from '../../http/home'
export default {
    data(){
        return{
            categoryList:[],
            id:''
        }
    },
    mounted(){
        this.id = this.$route.params.id
        console.log(this.$route.params.id)
        this.catalogs()
    },
    methods:{
        add(){
            this.$router.go(-1)
        },
        async catalogs(){
             const result = await catalog()
             console.log(result.data.categoryList);
             this.categoryList = result.data.categoryList
        }
    }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .homeNav{
        width: 100%;
        height: 100%;
    }
    .homeNav_header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: white;
        /* box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04); */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
        padding:0 10px;
    }
    .homeNav_header div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .homeNav_header .homeNav_header_left{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .homeNav_header .homeNav_header_left i{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .homeNav_header .homeNav_header_title{
        flex: 1 1;
        font-size: .32rem;
    }
    .homeNav_header .homeNav_header_right{
        width: .6rem;
    }
    .homeNav_tabWrap{
        width: 100%;
        height: 32px;
        background:#fff;
        margin-top:50px;
    }
    .homeNav_tabWrap .homeNav_tabWrap_c{
        width: 100%;
        height: 32px;
        text-align: center;
        
    }
    .homeNav_tabWrap .homeNav_tabWrap_c .uls{
        width: 100%;
        height: 32px;
        display: flex;
        flex-wrap:nowrap;
        overflow: scroll;  
    }
    .homeNav_tabWrap .homeNav_tabWrap_c .uls .uls_li{
        flex-shrink: 0;
        font-size: .28rem;
        width: 20%;
        height: .64rem;
    }
    .homeNav .homeNav_category{
        padding: .2rem 0;
        margin-top: .64rem;
    }
    .homeNav .homeNav_category div{
        height: .6rem;
        line-height: .6rem;
        text-align: center;
    }
    .homeNav .homeNav_category .divs{
         font-size: .30rem;
    }
    .homeNav .homeNav_category .divs1{
        
        color: gray;
        height: .5rem;
        line-height: .5rem;
        font-size: .28rem;
    }
    .homeNav_good{
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }
    .homeNav_good .homeNav_good_list{
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }
    .homeNav_good .homeNav_good_list a{
        width: 50%;
        background: white;
        height: auto;
        padding: .2rem;
        position: relative;
    }
    .homeNav_good .homeNav_good_list a ::after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #f5f5f9;
        border-left-width: 2px;
        box-sizing: border-box;
        width: 200%;
        height: 200%;
        -webkit-transform: scale(0.5);
        transform: scale(0.5);
        -webkit-transform-origin: left top;
        transform-origin: left top;
    }
    .homeNav_good .homeNav_good_list a .homeNav_good_list_img{
        width: 100%;
        min-height: 2rem;
        height: auto;
    }
    .homeNav_good .homeNav_good_list a .homeNav_good_list_img img{
        width: 100%;
    }
    .homeNav_good .homeNav_good_list a .homeNav_good_list_item{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: .3rem;
        padding-top: .1rem;
    }
    .homeNav_good .homeNav_good_list a .homeNav_good_list_Price{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: red;
    }
</style>