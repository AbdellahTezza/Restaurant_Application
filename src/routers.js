import HomeView from './view/HomeView.vue';
import SignUp from './view/SignUp.vue';
import LoginView from './view/Login.vue';
import Add from './view/Add.vue';
import Update from './components/Update.vue';
import {createRouter, createWebHistory} from "vue-router";


const routes = [
    {
        name:'HomeView',
        component:HomeView,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/Sign-up'
    },
    {
        name:'LoginView',
        component:LoginView,
        path:'/login'
    },
    {
        name:'Add',
        component:Add,
        path:'/add'
    },
    {
        name:'Update',
        component:Update,
        path:'/update/:id',
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;

