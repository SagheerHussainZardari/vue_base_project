import { createWebHistory, createRouter } from "vue-router";

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';


const history = createWebHistory();

const routes = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'about',
        path: '/about',
        component:About
    },
];

const router = createRouter({
    history,
    routes 
});


export default router;
