<template>
    <div class="menu">
        <div class="search"></div>
        <div class="menu-l" scroll-y="true" v-bind:style="{height:screenHeight+'px'}">
            
            <div class="{menuItemOn:active===index}" v-for="(category,index) in categoryList" :key="index.id" @click="selectMenu(index)">
                <img class="menu-img" :src="category.src">{{category.title}}
            </div>
            
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
                    {  'title': '服装', src: nvzhuang },
                    {  'title': '鞋类', src: xielei },
                    {  'title': '彩妆', src: caizhuang },
                    { 'title': '美食', src: meishi },
                    {  'title': '百货', src: baihuo },
                    {  'title': '数码', src: shuma },
                    { 'title': '更多', src: gengduo }
                ]
            }
        }
    }
</script>

<style>
    
</style>