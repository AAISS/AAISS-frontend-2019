import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Speaker from './views/Speaker.vue'

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, {
            path: '/speaker/id/:id',
            name: 'Speaker',
            component: Speaker,
        }
    ]
})