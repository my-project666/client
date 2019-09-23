<template>
  <div class="box">
    <div class="main">
      <router-view/>
    </div>
    <div class="bottom">
      <ul>
        <router-link to="/homePage" tag="li">
          <i class="iconfont">&#xe637;</i>
          <span>首页</span>
        </router-link>
        <router-link to="/special" tag="li">
          <i class="iconfont">&#xe615;</i>  
          <span>专题</span>
        </router-link>
        <router-link to="/classification" tag="li">
          <i class="iconfont">&#xe616;</i>
          <span>分类</span>
        </router-link>
        <router-link to="/ShoppingCart" tag="li">
          <i class="iconfont">&#xe614;</i>
          <span>购物车</span>
        </router-link>
        <router-link to="/my" tag="li">
          <i class="iconfont">&#xe63a;</i>
          <span>我的</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size:.16rem;

  }
  .box .main{
    width: 100%;
    flex: 1;
    overflow:auto;
  }
  .bottom{
    width: 100%;
    height: 1rem;
    /* bottom: 0; */
    background: white;
    box-shadow: 0 -3px 10px 0 rgba(0,0,0,.2);
    /* z-index: 100; */
  }
  .bottom ul{
    width: 100%;
    height:100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .bottom ul li{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;      
  }
  .bottom ul li i{
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;  
  }
  .bottom ul li span{
    font-size: .24rem;
  }
  .router-link-active {
    color: #2196f3;
    font-weight: bolder;
  }
</style>