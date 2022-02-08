<template>
    <h1>FEED</h1>
</template>

<script>
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();
        
        const logout = () => {
          store.dispatch('logout')
        }

        return {
            logout
        }
    }
}
</script>