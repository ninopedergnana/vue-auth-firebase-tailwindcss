import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default createStore({
    state: {
        user: null
    },
    mutations: {
        SET_USER (state, user) {
            state.user = user
        },
        CLEAR_USER (state) {
            state.user = null
        }
    },
    actions: {
        async register({commit}, details) {
            const { email, password } = details
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch(error.code) {
                    case 'auth/email-already-in-use':
                        alert("Email already in use!")
                        break
                    case 'auth/invalid-email':
                        alert("Invalid Email")
                        break
                    case 'auth/operation-not-allowed':
                        alert("Operation not allowed")
                        break
                    case 'auth/weak-password':
                        alert("Weak password, must be at least 6 symbols long!")
                    default:
                        alert("Something went wrong")
                }
                return
            }
            commit('SET_USER', auth.currentUser)
            router.push('/')
        },

        fetchUser ({ commit }) {
            auth.onAuthStateChanged(async user => {
                if (user === null) {
                    commit('CLEAR_USER')
                } else {
                    commit('SET_USER', user) 

                    if(router.isReady() && router.currentRoute.value.path === '/login') {
                        router.push('/')
                    }
                }
            })
        }
    },
})