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
    import { mapGetters, mapState} from 'vuex'
    export default {
    computed: {
    ...mapState({
      menu-l: state => state.shopcart.menu-l
    }),
    ...mapGetters('shopcart', { total: 'totalPrice' })
  },
</script>

<style>
    
</style>