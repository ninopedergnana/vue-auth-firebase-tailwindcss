<template>
  <div>
    <h1>LOGIN</h1>
    <div class="flex justify-center items-center mt-20">
      <div class="w-full max-w-xs">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="login">

          <!-- EMAIL -->
          <div class="identity-input mb-4">
            <label
              for="identity"
              class="flex text-gray-700 text-sm font-bold mb-2"
            >
              Email</label
            >
            <input
              id="identity"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Email"
              aria-describedby="emailHelp"
              v-model="login_form.email"
            />
            <span class="text-xs text-red-700" id="emailHelp"></span>
          </div>

          <!-- PASSWORD -->
          <div class="password-input mb-6">
            <label
              for="identity"
              class="flex text-gray-700 text-sm font-bold mb-2"
              >Password</label
            >

            <input
              aria-describedby="passwordHelp"
              v-model="login_form.password"
              class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="*******"
            />

            <span class="text-xs text-red-700" id="passwordHelp"></span>
          </div>

          <div class="flex items-center justify-between">

            <a
              class="inline-block align-baseline py-4 font-bold text-sm text-gray-500 hover:text-black "
              href="#"
            >
              Forgot Password?
            </a>

            <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-4 border border-black rounded focus:shadow-outline">
              Sign In
            </button>
          </div>
          <div class="flex items-center justify-between">
            <router-link to="/register" class="inline-block align-baseline py-3 pb-0 font-bold text-sm text-gray-500 hover:text-black ">Register A New Account</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const login_form = ref({});
        const store = useStore();
        
        const login = () => {
          console.log(login_form.value);
          store.dispatch('login', login_form.value)
        }

        return {
            login_form,
            login
        }
    }
}
</script>