import Vue from 'vue';
import Router from 'vue-router';
import loginComponent from '../views/loginView/index.vue';


Vue.use(Router);

export default new Router({
    linkExactActiveClass: 'active',
    routes: [{
            path: "/login",
            name: "login",
            component: loginComponent
        },
        {

        },
        {

        },
        {

        }
    ],
});