import Vue from "vue";
import VueRouter from "vue-router";
import ItemListView from "@/view/ItemListView.vue";
import UserListView from "@/view/UserListView.vue";
import ItemForm from "@/components/ItemForm.vue";
import UserForm from "@/components/UserForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemListView,
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
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router;
