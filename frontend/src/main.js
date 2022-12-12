import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HousesOverview from "@/components/Houses-Overview";
import AboutPage from "@/components/AboutPage";
import NotFound from "@/components/NotFound";


const routes = [
    {path: '/', component: HousesOverview},
    {path: '/About', component: AboutPage},
    {path: '/:pathMatch(.*)*', component: NotFound}

]

const router = createRouter({history: createWebHistory(), routes, linkActiveClass: 'active-link'})


createApp(App).use(router).mount('#app')
