<template>
  <div class="home">
    <div class="sousuo">
      <input class="text-1" type="text" placeholder="请输入商品名称"><button>搜索</button>
    </div>
    <div class="more">
      <div class="denglu">
        <router-link to='/Login'>登录</router-link>
      </div>  
      <div class="zhuce">
        <router-link to='/Register'>注册</router-link>
      </div>
      <div class="animated bounceIn">欢迎来到<br/>果仁的商店</div>
      <div class="text-2">
        <router-link to='/category'>→→→→由此进入</router-link>
      </div>
    </div>
    <div class="background">
			<img src="../../assets/img/bg-01.jpg" style="width: 100%; height: 100%">
 	  </div>
 </div>
</template>
<script>

  export default {
    //name: 'home',
    //data:{
      //return {
        
      //}
    //},
    mounted() {
            
    },
    components: {
          
    },
    methods: {

    }
  }
</script>
<style lang="scss" scoped>

 .background{
    z-index:-1;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px; 
    left: 0px; 
 }
 .sousuo{
   width: 100%;
   height: 50px;
   text-align: center;
   padding: 34px 0 8px;
   .text-1{
     border-radius: 8px;
     border-radius: 8px;
     outline: 0;
     height: 2em;
     width: 17em;
   }
 }
 .more{
   background-color: aliceblue;
   opacity: 0.7;
   width: 340px;
   height: 300px;
   margin-top: 40px;
   margin-left: 17px;
   text-align: center;
   z-index: 1;
   position: absolute;
   .denglu{
     width: 50px;
     height: 40px;
     margin-left:100px;
     font-size: 22px;
     float: left;
   }
   .denglu>a{
      color: black;
      text-decoration: none;
     }
   .zhuce{
     width: 50px;
     height: 40px;
     margin-right:100px;
     font-size: 22px;
     float: right;
   }
   .zhuce>a{
      color: black;
      text-decoration: none;
     }
   .bounceIn{
     width: 100%;
     height: 200px;
     margin-top: 100px;
     font-size: 36px;
   }
   .text-2{
     width:100%;
     height: 30px;
     margin-top: 30px;
   }
   .text-2>a{
     font-size: 20px;
     color: black;
     text-decoration: none;
   }
 }
</style>