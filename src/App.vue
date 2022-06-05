<template>
  <div class="app">
    <div class="top-menu">
    </div>
    <div class="bottom-menu">
      <router-link to="/"><img src="./assets/img/home.png">首页</router-link>
      <router-link to="/category"><img src="./assets/img/category.png">分类</router-link>
      <router-link to="/shopCar"><img src="./assets/img/shopcar.png">购物车</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import Search from 'components/common/Search'
// import Login from 'components/common/Login'
// import Register from 'components/common/Register'
export default {
  name: 'app',
  data(){
    return{
    }
  },
  computed:{
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  
.top-menu{
  height: 30px;
  float: left;
}
.bottom-menu{
  left: 0px;
  position: fixed;
  z-index:1;
  bottom:0;
  padding:6px 0;
  width:100%;
  height:60px;
  display:flex;
  background-color:#fff;
  box-shadow:0 -1px 10px #ddd;
  a{
    text-align: center;
    flex:1;
    display:flex;
    flex-direction: column;
    align-items:cLogin;
    text-align:cLogin;
    color:#000;
    font-weight:bold;
    padding: 5px;
    text-decoration:none;
    img{
      padding-left: 32%;
      height: 32px;
      width: 50px;
      margin-bottom:6px;
      filter: grayscale(100%);
    }
    &.router-link-exact-active{
      color:#1296db;
      img{
        filter: grayscale(0);
      }
    }
  }
} 
</style>
