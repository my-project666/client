<template>
  <div class="box">
    <div class="main">
          <router-view></router-view>
    </div>
    <div class="bottom">
      <ul>
        <li>
          <i class="iconfont">&#xe637;</i>
          <span>首页</span>
        </li>
        <li>
          <i class="iconfont">&#xe637;</i>  
          专题
        </li>
        <li>分类</li>
        <li>购物车</li>
        <li>我的</li>
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
    font-size: .16rem;
  }
  .box .main{
    width: 100%;
    flex: 1;
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
</style>