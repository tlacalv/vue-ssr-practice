<template>
    <div>App
        <header><p>Vue.js SSR</p> <router-link to="/">Home</router-link> <router-link to="/item/1">Item 1</router-link> </header>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    
}
</script>