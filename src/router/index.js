import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'HomePage',
        component: HomePage,
        children: [{
                path: '/pageone',
                name: 'pageone',
                component: () =>
                    import ('../components/RightPage/PageOne.vue')
            },
            {
                path: '/pagetwo',
                name: 'pagetwo',
                component: () =>
                    import ('../components/RightPage/PageTwo.vue')
            }

        ]


    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router