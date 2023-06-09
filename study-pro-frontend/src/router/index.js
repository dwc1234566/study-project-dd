import {createRouter, createWebHistory} from 'vue-router'


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: () => import('@/views/WelcomeView.vue'),
            children: [
                {
                    path: '/',
                    name: 'welcome-login',
                    component: () => import('@/components/welcome/LoginPage.vue')
                },
                {
                    path:'/register',
                    name:'welcome-register',
                    component: () => import('@/components/welcome/Register.vue')
                }

            ]
        },
        {
            path:'/index',
            name:'welcome-index',
            component: () => import('@/views/IndexView.vue')


        }
    ]
})

export default router
