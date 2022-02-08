<template>
<div>
  <Navbar></Navbar>
  <router-view/> 
</div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'
import Navbar from "./components/Navbar.vue"

export default {
    setup() {
        const store = useStore();
        onBeforeMount(() => {
            store.dispatch("fetchUser");
        });
    },
    components: { Navbar }
}
</script>

<style>
body {
    background: #445c74;
    margin: 0px;
    color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
