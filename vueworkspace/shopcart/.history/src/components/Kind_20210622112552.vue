<template>
    <div class="">
        <div class="menu-left">
            <button v-for="item in items" :key=item.id></button>
                <span>{{item.title}}</span>
        </div>
        <div class="menu-right">

        </div>
    </div>
</template>

<script>
</script>

<style>

</style>