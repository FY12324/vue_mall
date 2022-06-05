<template>
      <transition apper apper-active-class="animated flash"
        <div v-else-if='true' class="r-1">
          <input placeholder="请输入您的手机号码"/><br/><br/><br/>
          <input placeholder="请输入您收到的验证码"/><br/><br/><br/>
          <input placeholder="设置您的密码"/><br/><br/><br/>
          <button>注册</button>
          <button><router-link to="/Login">已有账号？点击这里去登陆<</router-link></button>
        </div>
      </transition>
</template>

<script>
    export default{
        
    }
</script>
<style lang="scss" scoped>
    .fade-enter,.fade-leave-to{
        opacity: 0;
    }
    .fade-enter-active,.fade-leave-active{
        transition: opacity .5s;
    }
</style>