<template>
    <div class="menu">
        <div class="menu-left">
            <ul>
                <li class="menu-item" v-for="(menu,index) in menus" :key="index" :class="{current: index === currentIndex}"
                  @click="clickList(index)" ref="menuList">
                  <p class="text">{{ menu.name }}</p>
                </li>
              </ul>
        </div>
        <div class="menu-right">
           
        </div>
    </div>
</template>

<script>
       import BScroll from 'better-scroll' 
</script>

<style>

</style>