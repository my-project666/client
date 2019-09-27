<template>
    <div class="shang">
        <div class="shang_header">
            <div class="shang_header_left">
                <i class="iconfont" @click="add">&#xe697;</i>
            </div>
            <div class="shang_header_title">
                {{brand.name}}
            </div>
            <div class="shang_header_right">
            </div>
        </div>
        <div class="shang_brandDetail">
            <img :src="brand.list_pic_url" alt="" class="imgLazy">
            <div class="shang_brandDetail_con">
                    {{brand.simple_desc}}
            </div>
        </div>

        <div class="shang_good">
            <div class="shang_good_list">
                <a href="#" v-for="item in datas" :key='item.id'>
                    <div class="shang_good_list_img">
                        <img :src="item.list_pic_url" alt="">
                    </div>
                    <div class="shang_good_list_item">
                        {{item.name}}
                    </div>
                    <div class="shang_good_list_Price">
                        ￥{{item.retail_price}}元
                    </div>
                </a>   
            </div>
        </div>

    </div>
</template>
<script>
import {detail,goolist} from '../../http/home'
export default {
    data(){
        return{
            brand:'',
            datas:[]
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        this.detail(this.$route.params.id)
        this.goolist(this.$route.params.id)
    },
    methods:{
        add(){
            this.$router.go(-1)
        },
        async detail(id){
            const results = await detail(id,1000,1)
             this.brand=results.data.brand
          
            
        },
        async goolist(brandId){
             const resut = await goolist(brandId,1,10000)
             console.log(resut.data.data)
             this.datas = resut.data.data
        }
    }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .shang{
        width:100%;
        height:100%
    }
    .shang .shang_header{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 1rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 10;
    }
    .shang .shang_header div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shang .shang_header .shang_header_left{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .shang .shang_header .shang_header_left i{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .shang .shang_header .shang_header_title{
        flex: 1 1;
        font-size: .32rem;
    }
    .shang .shang_header .shang_header_right{
        width: .6rem;
    }
    .shang_brandDetail{
        width: 100%;
        height: 311px;
        font-size: .28rem;
        margin-top:50px;
    }
    .shang_brandDetail .imgLazy{
        opacity: 1;
        -webkit-transition: all 1s;
        transition: all 1s;
    }
    .shang_brandDetail img{
        width: 100%;
        height: auto;
        
    }
    img{
        border-style: none;
    }
    .shang_brandDetail .shang_brandDetail_con{
        width: 100%;
        line-height: .4rem;
        padding: .4rem;
        background: white;
        text-indent: 2em;
        color: gray;
    }

    .shang_good{
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top:10px;
    }
    .shang_good .shang_good_list{
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
    }
    .shang_good .shang_good_list a{
        width: 50%;
        background: white;
        height: auto;
        padding: .2rem;
        position: relative;
    }
    .shang_good .shang_good_list a ::after{
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
    .shang_good .shang_good_list a .shang_good_list_img{
        width: 100%;
        min-height: 2rem;
        height: auto;
    }
    .shang_good .shang_good_list a .shang_good_list_img img{
        width: 100%;
    }
    .shang_good .shang_good_list a .shang_good_list_item{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding-bottom: .3rem;
        padding-top: .1rem;
    }
    .shang_good .shang_good_list a .shang_good_list_Price{
        text-align: center;
        font-size: .28rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: red;
    }
</style>