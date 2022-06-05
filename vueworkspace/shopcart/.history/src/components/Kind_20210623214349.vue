<template>
    <div class="menu">
        <div class="menu-left" ref="menu-l">
            <button class="dalei" v-for="kindone in kindones" :key="kindone.id">{{title}}</button>
            
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