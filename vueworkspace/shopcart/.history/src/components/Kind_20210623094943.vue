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
        <div class="menu-right" ref="itemList">
            <ul>
                <li class="cate" v-for="(menu, index1) in menus" :key="index1">
                  <h4 class="cate-title">{{ menu.name }}</h4>
                  <ul class="cate-item">
                    <li v-for="(item, index2) in menu.sub" :key="index2">
                      <router-link class="cate-item-wrapper" :to="{name: 'goods_list', params: {category_id: item.id}}">
                        <div class="cate-item-img">
                          <img :src="item.image" alt />
                        </div>
                        <span>{{ item.name }}</span>
                      </router-link>
                    </li>
                  </ul>
                </li>
                <li class="cate-bottom"></li>
              </ul>
        </div>
    </div>
</template>

<script>
        
</script>

<style>

</style>