import {createRouter, createWebHistory} from "vue-router";
import ProductsComponent from "@/components/ProductsComponent.vue";
import DashboardComponent from "@/components/Task11/DashboardComponent.vue";
import LoginComponent from "@/components/Task11/LoginComponent.vue";
import NotFound from "@/components/Task11/NotFound.vue";
import {useUserStore} from "@/stores/userAuth";


const routes = [
    {
        path: '/products',
        name: 'Products',
        component: ProductsComponent,
        meta: { requiresAuth: true },
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        meta: { requiresAuth: true },
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginComponent,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/products/:id',
        name: 'single-product',
        component: () => import('@/components/SingleProduct.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const userStore = useUserStore();

    if (to.meta.requiresAuth && !userStore.isLoggedIn) {
        next({ name: 'Login' });
    } else {
        next();
    }
});

export default router