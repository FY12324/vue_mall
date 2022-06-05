<template>
    <div class="menu">
        <div class="search">&#xe603</div>
        <div class="menu-l" scroll-y="true" v-bind:style="{height:screenHeight+'px'}">
            <div class="dalei" v-for="(category,index) in categoryList" :key="index">{{category.title}}</div>
            
        </div>
        <div class="menu-m">

        </div>
    </div>
</template>

<script>
    import nvzhuang from '../../static/a.jpg'
    import xielei from '../../static/b.jpg'
    import caizhuang from '../../static/c.jpg'
    import meishi from '../../static/d.jpg'
    import baihuo from '../../static/e.jpg'
    import shuma from '../../static/f.jpg'
    import gengduo from '../../static/g.jpg'
    export default {
        data(){
            return{
                active: 0,
                screenHeight: 0,
                categoryList: [
                    { 'id': a, 'title': '服装', src: nvzhuang },
                    { 'id': b, 'title': '鞋类', src: xielei },
                    { 'id': c, 'title': '彩妆', src: caizhuang },
                    { 'id': d, 'title': '美食', src: meishi },
                    { 'id': e, 'title': '百货', src: baihuo },
                    { 'id': f, 'title': '数码', src: shuma },
                    { 'id': g, 'title': '更多', src: gengduo }
                ]
            }
        }
    }
</script>

<style>
    
</style>