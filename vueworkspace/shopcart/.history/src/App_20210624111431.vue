<template>
  <div id="app">
     <div class="nav">
      <router-link to="/" tag="div">首页</router-link>
      <router-link to="/Kind" tag="div">分类</router-link>
      <router-link to="/shopcart" tag="div">购物车</router-link>
      <router-link to="/Details" tag="div">我的</router-link>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
html,
body {
  height: 100%;
}
body {
  margin: 0;
  font-size: 12px;
  box-sizing: border-box;
}
</style>

<style scoped>
#app {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {

  overflow-y: scroll;
}
.nav {
  height: 40px;
  display: flex;
  border-top: 1px solid #ccc;
}
.nav > div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#444;
}
.nav > div:not(:last-child) {
  border-right: 1px solid #ccc;
}
.nav > div.router-link-exact-active {
  color:#F18741;
  font-weight:bold;
  background:#FEF5EF;
}
</style>
