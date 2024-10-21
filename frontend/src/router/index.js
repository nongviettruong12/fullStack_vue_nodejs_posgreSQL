import ItemListView from "@/view/ItemListView.vue";
import UserListView from "@/view/UserListView.vue";
import ItemForm from "@/components/ItemForm.vue";
import UserForm from "@/components/UserForm.vue";
import LayoutAdmin from '../layout/LayoutAdmin.vue'
import LayoutClient from '../layout/LayoutClient.vue';
import LoginForm from '../components/LoginForm.vue';
import RegisterForm from "../components/RegisterForm.vue";
import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: "/",
    name: "LayoutClient",
    component: LayoutClient,
  },
  {
    path: "/admin",
    name: "LayoutAdmin",
    component: LayoutAdmin,
    children:[
      {
        path: 'login',
        component: LoginForm,
        name: 'LoginForm',
      },
      {
        path:'register',
        component: RegisterForm,
        name: 'RegisterForm',
      }
    ]
  },
  {
    path: "/items",
    name: "ItemList",
    component: ItemListView,
  },
  {
    path: "/items/add",
    name: "ItemForm",
    component: ItemForm,
  },
  {
    path: '/items/edit/:id',
    name: 'ItemEdit',
    component: ItemForm,
    props: true,
},
{
    path: '/users',
    name: 'UserList',
    component: UserListView,
},
{
    path: '/users/add',
    name: 'UserAdd',
    component: UserForm,
},
{
    path: '/users/edit/:id',
    name: 'UserEdit',
    component: UserForm,
    props: true,
},
];
const router = createRouter({
  history: createWebHistory(), // Sử dụng createWebHistory cho Vue 3
  routes,
})

export default router;
