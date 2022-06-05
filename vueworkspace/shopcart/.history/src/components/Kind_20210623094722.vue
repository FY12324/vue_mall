<template>
    <div class="menu">
        <div class="menu-left">
            <button @click="leibie" v-for="item in items" :key="item.id">{{item.title}}</button>
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