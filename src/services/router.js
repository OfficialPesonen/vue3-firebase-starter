import { watch } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { user, initialised } from "@/services/auth";

import Index from "@/views/Index";
import Login from "@/views/Login";

const routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            public: true,
        },
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach((to, from, next) => {
    const checkRoute = () => {
        if (!to.matched.some(record => record.meta.public) && !user.value) {
            return next("/login");
        }

        next();
    };

    if (initialised.value) {
        checkRoute();
    } else {
        watch(
            () => initialised.value,
            newValue => {
                if (newValue) {
                    checkRoute();
                }
            }
        );
    }
});

export default router;
