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
        var vm=new Vue({
            methods:{
                mounted(){
              this.$nextTick(()=>{
                this.scroll = new BScroll(this.$refs.menu-length, options)
              })
            }
            }
        })
</script>

<style>
    
</style>