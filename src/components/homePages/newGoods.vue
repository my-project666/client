<template>
    <div class="newGoods">
        <div class="shang_header">
            <div class="shang_header_left">
                <i class="iconfont" @click="add">&#xe697;</i>
            </div>
            <div class="shang_header_title">
                {{info.name}}
            </div>
            <div class="shang_header_right">
            </div>
        </div>
        <div class="newGoods_slider"></div>
        <ul class="serviceList">
            <li>
                <span>★</span>
                30天无忧退货
            </li>
            <li>
                <span>★</span>
                48小时快速退款
            </li>
            <li>
                <span>★</span>
                满88元免邮费
            </li>
        </ul>
        <div class="goodsMsgWrap">
            <div class="goodsMsgWrap_title">
                {{info.name}}
            </div>
            <div class="goodsMsgWrap_SubTitle">
                {{info.goods_brief}}
            </div>
            <div class="goodsMsgWrap_Titles">
                ￥{{info.retail_price}}
            </div>  
        </div>
        <div class="goodsSize">
            <div></div>
            <div>x 0</div>
            <div>
                选择规格
                <i class="iconfont icon-right"></i>
            </div>
        </div>
        <div class="goodsAttribute">
            <div class="goodsAttribute_top">
                商品参数
            </div>
        </div>
        <div class="goodsAttribute">
            <div class="goodsAttribute_top">
                常见问题
            </div>
            <div class="goodsAttribute_con" v-for="item in issue" :key='item.id'>
                <div class="goodsAttribute_con_problem">
                    <span>√</span>
                    {{item.question}}
                </div>
                <div class="goodsAttribute_con_probles">
                    {{item.answer}}
                </div>
            </div>
             
            
        </div>
        <div class="goodsAttribute">
            <div class="goodsAttributeLine">
                大家都在看
            </div>
        </div>
        <div class="shang_good">
            <div class="shang_good_list">
                <a href="#" v-for="item in goodsList" :key='item.id'>
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
import {detaildy,related} from '../../http/home'
export default {
    data(){
        return{
            info:'',
            issue:[],
            goodsList:[]
        }
    },
    methods:{
       async detail(id){
           const result = await detaildy(id);
           console.log(result.data);
           this.info = result.data.info;
           console.log(this.info,'++++++++++++++');
           this.issue = result.data.issue;
           const results = await related(id);
           this.goodsList = results.data.goodsList
       },
       add(){
            this.$router.go(-1)
        }
    },
    mounted(){
        console.log(this.$route.params.id)
        this.detail(this.$route.params.id)
    }
}
</script>
<style scoped>
    a{
        text-decoration:none;
        color:#000;
    }
    .newGoods{
        width: 100%;
        height: 100%;
    }
    .newGoods .shang_header{
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
        box-shadow: 0 0.04rem 0.08rem 0 rgba(0,0,0,.12), 0 0 6px 0 rgba(0,0,0,.04);
    }
    .newGoods .shang_header div{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .newGoods .shang_header .shang_header_left{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .newGoods .shang_header .shang_header_left i{
        font-family: "iconfont" !important;
        font-size: 16px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .newGoods .shang_header .shang_header_title{
        flex: 1 1;
        font-size: .32rem;
    }
    .newGoods .shang_header .shang_header_right{
        width: .6rem;
    }
    .newGoods_slider{
        width: 100%;
        height: 100px;
        margin-top:50px;
    }
    .serviceList{
        height: .8rem;
        background: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .serviceList li{
        flex: 1 1;
        color: #666;
        font-size: .24rem;
        text-align: center;
    }
    .serviceList li span{
        color: red;
        margin-right: .15rem;
        font-size: .3rem;
    }
    .goodsMsgWrap{
        width: 100%;
        height: 139px;
        padding: .4rem;
        background: white;
    }
    .goodsMsgWrap .goodsMsgWrap_title{
        font-size: .4rem;
        text-align: center;
        padding-bottom: .2rem;
    }
    .goodsMsgWrap .goodsMsgWrap_SubTitle{
        font-size: .3rem;
        color: #444;
        text-align: center;
        padding-bottom: .1rem;
    }
    .goodsMsgWrap .goodsMsgWrap_Titles{
        font-size: .4rem;
        color: red;
        text-align: center;
        line-height: 1rem;
    }
    .goodsSize{
        margin-top: .02rem;
        height: 1rem;
        padding: 0 .4rem;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .goodsSize div:nth-child(1){
        flex: 1 1;
        text-align: left;
        color: #2196f3;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .goodsSize div:nth-child(2){
        width: auto;
        padding: 0 .1rem;
        text-align: right;
        color: red;
        font-weight: bolder;
        font-size: 14px;
    }
    .goodsSize div:nth-child(3){
        width: auto;
        padding: 0 .1rem;
        text-align: right;
        font-size: 16px;
    }
    .goodsAttribute{
        margin-top: .2rem;
        padding: .4rem;
        background: white;
    }
    .goodsAttribute .goodsAttribute_top{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2196f3;
        padding: .1rem 0;
        font-size: 14px;
    }
    .goodsAttribute .goodsAttribute_top::before{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .goodsAttribute .goodsAttribute_top::after{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .goodsAttribute{
        margin-top: .2rem;
        padding: .4rem;
        background: white;
    }
    .goodsAttribute .goodsAttribute_top::before{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .goodsAttribute .goodsAttribute_top::after{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .goodsAttribute .goodsAttribute_con{
        margin-bottom: .2rem;
    }
    .goodsAttribute .goodsAttribute_con .goodsAttribute_con_problem{
        font-size: .32rem;
        line-height: .6rem;
    }
    .goodsAttribute .goodsAttribute_con .goodsAttribute_con_problem span{
        color: red;
        margin-right: .1rem;
    }
    .goodsAttribute .goodsAttribute_con .goodsAttribute_con_probles{
        font-size: .3rem;
        line-height: .5rem;
        color: gray;
    }
    .goodsAttribute{
        margin-top: .2rem;
        padding: .4rem;
        background: white;
    }
    .goodsAttribute .goodsAttributeLine{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #2196f3;
        padding: .1rem 0;
        font-size: 16px;
    }
    .goodsAttribute .goodsAttributeLine::before{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .goodsAttribute .goodsAttributeLine::after{
        content: '';
        width: .4rem;
        height: 1px;
        background: #2196f3;
        margin: 0 .2rem;
    }
    .shang_good{
        width: auto;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        /* margin-top:10px; */
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
