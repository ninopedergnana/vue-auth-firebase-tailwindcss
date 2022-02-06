<script setup>

</script>

<template>
<div>
  <nav> <!-- v-if="$store.state.user"> inside nav tag 
        <button @click="$store.dispatch('logout')">Logout</button>
  -->
    <router-link to="/">Home</router-link> |
    <router-link to="/feed">Feed</router-link> | 
    <router-link to="/register">Register</router-link> | 
    <router-link to="/login">Login</router-link> 
  </nav>
  <router-view/> 
</div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
