import { createRouter, createWebHistory } from "vue-router";
import { auth } from '../firebase'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/", 
            name: 'Home',
            component: () => import("../views/Home.vue"),
        },
        {
            path: "/register", 
            name: 'Register',
            component: () => import("../views/Register.vue"),
        },
        {
            path: "/feed", 
            name: 'Feed',
            component: () => import("../views/Feed.vue"),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: "/login", 
            name: 'Login',
            component: () => import("../views/Login.vue"),
        }
    ],
});


router.beforeEach((to, from, next) => {
    if(to.path === '/login' && auth.currentUser) {
        next('/feed')
        return
    }

    if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
        next('/login')
        return
    }

    next();
})
export default router;