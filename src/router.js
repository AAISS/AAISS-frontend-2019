import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Speaker from './views/Speaker.vue'
import Staff from './views/Staff'

Vue.use(Router);

export default new Router({
    mode : 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/speakers/:id',
            name: 'Speaker',
            component: Speaker,
        }, {
            path: '/staff',
            name: 'Staff',
            component: Staff
        },
        {path: "*", component: Home}
    ]
})