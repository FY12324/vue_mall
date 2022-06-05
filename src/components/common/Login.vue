<template>
        <transition name="fade" >
            <div v-if='true' class="r-2">
                账号：<input placeholder="请输入账号"/><br/><br/><br/>
                密码：<input placeholder="请输入密码"/><br/><br/><br/>
                <button >登录</button>
                <button >注册</button>
          <button><router-link to="/Register">点击这里去注册<</router-link></button>
            </div>
        </transition>
</template>

<script>
    export default{
        // data(){
        //     show:'true'
        // }
    }
</script>
<style lang="scss" scoped>
    .r-2{
        width: 250px;
        height: 250px;
        border: black 1px;
    }
    .fade-active{
        opacity: 0;
    }
    .fade-enter-active{
        transition: opacity .5s;
    }
</style>