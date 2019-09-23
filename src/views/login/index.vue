<template>
  <div class="wrap">
      <div class="logo">
          <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="login">
           <div class="cont">
                 <div class="user"><input type="text" placeholder="请输入账号"></div>
                 <div class="pwd"><input type="password" placeholder="请输入密码"></div>
                 <div class="btn"><span>登录</span></div>
           </div>
      </div>
  </div>
</template>  


<script>
    import Swiper from 'swiper';
    
    export default {
        
    }
</script> 

<style lang="scss">

    .wrap{
        font-size: .32rem;
        width: 100%;
        height: 100%;
        display: flex;
        flex-flow: column;
    }
    .logo{
        padding: .9rem 0;
        text-align: center;
        img{
            width: 3.2rem;
            height: 1.1rem;
        }
    }
    .login{
        width:100%;
        padding:0 5%;
        padding-top: 2rem;
        flex:1;
    }
    .cont{
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        font-size: .4rem;
        .user,.pwd{
            height: 1.2rem;
            width: 100%;
            line-height: 1.2rem;    
            input{
               width: 100%;
               height: 100%;
               border: none;
               outline: none;
               font-size: .4rem;
            }
        }
    }
    .btn{
        text-align: center;
        background:#108ee9;
        color: #fff;
        height: .9rem;
        width: 100%;
        line-height: 1rem;
        margin-top: 1rem;
        border-radius:.1rem;
    }
</style>