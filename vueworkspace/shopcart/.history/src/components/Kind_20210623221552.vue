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
      items: state => state.shopcart.items
    }),
    ...mapGetters('shopcart', { total: 'totalPrice' })
  },
</script>

<style>
    
</style>