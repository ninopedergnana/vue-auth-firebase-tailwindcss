<template>
  <div class="flex justify-center items-center mt-52">
    <div class="w-full max-w-xs">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">

        <!-- EMAIL -->
        <div class="identity-input mb-4">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
          >
            Email</label
          >
          <input
            id="identity"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Email"
            aria-describedby="emailHelp"
            v-model="register_form.email"
          />
          <span class="text-xs text-red-700" id="emailHelp"></span>
        </div>

        <!-- PASSWORD -->
        <div class="password-input mb-6">
          <label
            for="identity"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Password</label
          >

          <input
            aria-describedby="passwordHelp"
            v-model="register_form.password"
            class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
          />

          <span class="text-xs text-red-700" id="passwordHelp"></span>
        </div>

        <div class="flex items-center justify-between">
          <button
            class="bg-blue-600 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>

          <a
            class="inline-block align-baseline py-4 font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
          
          
        </div>

        <div class="flex items-center justify-between ">
        <button
            class=" w-full bg-red-400 hover:bg-black text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In With Google
          </button>

        </div>
        <div class="flex items-center justify-between ">
        <button
            class=" w-full bg-gray-300 hover:bg-black text-white font-bold py-2 my-2 px-2 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login As Guest
          </button>

        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const register_form = ref({});
        const store = useStore();

        const register = () => {
          store.dispatch('register', register_form.value)
        }

        return {
            register_form,
            register
        }
    }
}
</script>