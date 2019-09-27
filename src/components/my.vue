<template>
    <div class="my">
        <div class="my_top">
            <div class="my_top_left">

            </div>
            <div class="my_top_right">
                <div>15323807318</div>
                <div>普通用户</div>
            </div>
        </div>
        <div class="my_con">
            <div class="my_con_c" id="cons">
                <i class="iconfont">&#xe6d0;</i>
                <div>我的收藏</div>
            </div>
            <div class="my_con_c" id="cons">
                <i class="iconfont">&#xe61d;</i>
                <div>地址管理</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe649;</i>
                <div>我的订单</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe70e;</i>
                <div>周末拼单</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe681;</i>
                <div>优惠卷</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe654;</i>
                <div>优选购</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe603;</i>
                <div>我的红包</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe609;</i>
                <div>会员plus</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe606;</i>
                <div>邀请返利</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe601;</i>
                <div>意见反馈</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe61e;</i>
                <div>客服咨询</div>
            </div>
            <div class="my_con_c">
                <i class="iconfont">&#xe6fa;</i>
                <div>账户安全</div>
            </div>
        </div>
        <div class="my_bottom">
            退出登陆
        </div>
    </div>
</template>
<script>
import {mys} from '../http/my'
export default {
    data(){
        return{

        }
    },
    methods:{
        async my(){
            const result = await mys();
            console.log(result);
        }
    },
    mounted(){
        this.my()
    }
}
</script>
<style scoped>
    .my{
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    .my .my_top{
        height: 3rem;
        background: url(../images/my1.png) no-repeat;
        background-size: 100%;
        padding: .7rem .4rem;
        display: flex;
            
    }
    .my .my_top .my_top_left{
        width: 1.6rem;
        background: url(../images/my2.png) no-repeat;
        background-size: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .my .my_top .my_top_right{
        flex: 1 1;
        padding: .2rem;
        padding-right: 0;
        height: 100%;
    }
    .my .my_top .my_top_right div{
        height: 50%;
        display: flex;
        align-items: center;
        color: white;
        font-size: .3rem;
    }
    .my .my_con{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
    .my .my_con .my_con_c{
        width: 33.333%;
        height: 2.5rem;
        background: white;
        border: .5px solid gainsboro;
    }
    .my .my_con #cons{
        color: rgb(33, 150, 243);
    }
    .my .my_con #cons i{
        color: rgb(33, 150, 243);
    }
    .my .my_con .my_con_c i{
        display: block;
        padding-top: .8rem;
        padding-bottom: .2rem;
        text-align: center;
        font-size: .6rem;
        color: #9e9e9e;
    }
    .my .my_con .my_con_c div{
        text-align: center;
        font-size: .3rem;
    }
    .my .my_bottom{
        height: 1rem;
        width: 100%;
        margin: .2rem 0;
        background: white;
        text-align: center;
        line-height: 1rem;
        font-size: .3rem;
    }
</style>