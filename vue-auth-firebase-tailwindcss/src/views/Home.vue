<template>
    <h1>HOME</h1>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const login_form = ref({});
        const store = useStore();

        const logout = () => {
          store.dispatch('logout', login_form.value)
        }

        return {
            logout
        }
    }
}
</script>

<style>

</style>