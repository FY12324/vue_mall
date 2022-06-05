<template>
    <div class="menu">
        <div class="menu-l" ref="menu-l">
            <div class="dalei" v-for="kindone in kindones" :key="kindone.id">{{kindone.title}}</div>
            
        </div>
        <div class="menu-m">

        </div>
    </div>
</template>

<script>
    import { mapState} from 'vuex'
    export default {
   
    
    }
</script>

<style>
    
</style>