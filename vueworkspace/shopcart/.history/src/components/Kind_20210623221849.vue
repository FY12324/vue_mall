<template>
    <div class="menu">
        <div class="menu-l" ref="menu-l">
            <button class="dalei" v-for="kindone in kindones" :key="kindone.id">{{kindone.title}}</button>
            
        </div>
        <div class="menu-m">

        </div>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    export default {
    computed: {
    ...mapState({
      kindone: state => state.shopcart.kindone
    }),
    }
    }
</script>

<style>
    
</style>