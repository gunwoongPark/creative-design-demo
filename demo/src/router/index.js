import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/Home"
import Login from "../views/Login"
import SignUp from "../views/SignUp"
import Detail from "../views/Detail"

Vue.use(VueRouter)

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/SignUp",
        component: SignUp
    },
    {
        path: "/detail",
        component: Detail
    }
]

export default new VueRouter({
    routes
})