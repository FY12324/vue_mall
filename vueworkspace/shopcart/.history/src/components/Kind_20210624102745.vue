<template>
    <div class="menu">
        <div class="search">&#xe603</div></div>
        <div class="menu-l" ref="menu-l">
            <div class="dalei" v-for="kindone in kindones" :key="kindone.id">{{kindone.title}}</div>
            
        </div>
        <div class="menu-m">

        </div>
    </div>
</template>

<script>
    export default {
        data(){
        return{
           active:0,
           screenHeight:0,
           categoryList:[
  { 'id': a, 'title': '服装', src: nvzhuang },
  { 'id': b, 'title': '鞋类', src: xielei },
  { 'id': c, 'title': '彩妆', src: caizhuang },
  { 'id': d, 'title': '美食', src: meishi },
  { 'id': e, 'title': '配饰', src: peishi },
  { 'id': f, 'title': '百货', src: baihuo },
  { 'id': g, 'title': '数码', src: shuma },
  { 'id': h, 'title': '更多', src: gengduo}
        ]
        }
    }
</script>

<style>
    
</style>