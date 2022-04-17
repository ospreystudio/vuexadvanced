import { createRouter, createWebHistory } from 'vue-router'
import Home from "./components/views/Home";
import Product from "./components/views/Product";



const routes = [
    {
        path: "/",
        name: 'Home',
        component: Home
    },
    {
        path: '/product/:id',
        component: Product,
        name: 'product',
        props: true
    }
]


const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router
