<template>
    <div class="menu">
        <div class="menu-l" ref="menu-l">
            <button class="dalei" v-for="kindone in kindones" :key="kindone.id">{{title}}</button>
            
        </div>
        <div class="menu-m">

        </div>
    </div>
</template>

<script>
        import BScroll from 'better-scroll'
</script>

<style>
    
</style>