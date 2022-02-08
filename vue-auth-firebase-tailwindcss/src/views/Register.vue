<template>  
  <div>
    <h1>REGISTER</h1>
      <div class="flex justify-center items-center mt-20">
        <div class="w-full max-w-xs">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="register">

            <!-- FIRST NAME -->
            <div class="identity-input mb-4">
              <label
                for="identity"
                class="flex text-gray-700 text-sm font-bold mb-2"
              >
                First Name</label
              >
              <input
                id="identity"
                class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name"
                v-model="register_form.firstName"
              />
              <span class="text-xs text-red-700" id="firstName"></span>
            </div>
            
            <!-- SURNAME -->
            <div class="identity-input mb-4">
              <label
                for="identity"
                class="flex text-gray-700 text-sm font-bold mb-2"
              >
                Surname</label
              >
              <input
                id="identity"
                class="shadow appearance-none borderrounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Surname"
                v-model="register_form.surname"
              />
              <span class="text-xs text-red-700" id="surname"></span>
            </div>

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
                v-model="register_form.email"
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
                v-model="register_form.password"
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

              <button
                class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 my-2 px-4 border border-black rounded focus:shadow-outline"
                type="submit"
              >
                Sign In
              </button>
            </div>

            <div class="flex items-center justify-between ">
            <button
                class="w-full bg-transparent hover:bg-red-400 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-400 hover:border-transparent rounded"
                @click="loginWithGoogle"
              >
                Sign In With Google
              </button>
            </div>
            <div class="flex items-center justify-between">
              <router-link to="/login" class="inline-block align-baseline py-3 pb-0 font-bold text-sm text-gray-500 hover:text-black ">Already Have An Account?</router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { auth } from '../firebase'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

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
    },
    methods: {
        async loginWithGoogle() {
            const provider = new GoogleAuthProvider();
            signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user);
                router.push('/feed');
            })
            .catch((error) => {
                alert("Authentication with Google didn't work! Too bad :(", error)
            })
        }
    }
}
</script>