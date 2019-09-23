<template>
  <div class="wrap">
    <div class="logo">
      <img src="http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt />
    </div>
    <div class="login">
      <div class="cont">
        <div class="user">
          <input type="text" placeholder="请输入账号" v-model="mobile" />
        </div>
        <div class="pwd">
          <input type="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div class="btn" @click="this.clickLogin">
          <span>登录</span>
        </div>
      </div>
    </div>
  </div>
</template>  
<script>
import Swiper from "swiper";
import { login } from "../../http/login";
import {setToken} from '../../utlis/gettoken'
export default {
  data(){
      return{
          mobile:'15323807318',
          password:'123456'
      }
  },
  methods:{
      async clickLogin(){
        let mobile=this.mobile;
        let password = this.password;
        const result = await login({mobile,password})
        if(result.errno===0){
             setToken('token',result.data.sessionKey)
             this.$router.push('/')
        }else{
             alert(result.errmsg)
        }
      }
  }
};
</script> 

<style lang="scss">
.wrap {
  font-size: 0.32rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}
.logo {
  padding: 0.9rem 0;
  text-align: center;
  img {
    width: 3.2rem;
    height: 1.1rem;
  }
}
.login {
  width: 100%;
  padding: 0 5%;
  padding-top: 2rem;
  flex: 1;
}
.cont {
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 0.4rem;
  .user,
  .pwd {
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    input {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      font-size: 0.4rem;
    }
  }
}
.btn {
  text-align: center;
  background: #108ee9;
  color: #fff;
  height: 0.9rem;
  width: 100%;
  line-height: 1rem;
  margin-top: 1rem;
  border-radius: 0.1rem;
}
</style>