import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 重写 push 和 replace 方法，以解决多次访问相同参数的路由时出现的 NavigationDuplicated 错误
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location,
            () => {
            },
            () => {
            }
        )
    }
}

VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location,
            () => {
            },
            () => {
            }
        )
    }
}


import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

export default new VueRouter({
    routes: [
        // 重定向
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home,
            meta: {showFooter: true}
        },
        {
            // 1. params 模式     '?'代表 keyword 可传可不传
            path: '/search/:keyword?',
            name: 'search',
            component: Search,
            // 布尔模式
            // props: true,
            // 对象模式
            // props: {a: 100, b: 'foo'},
            // 函数模式
            props: route => ({keyword: route.params.keyword}),
            meta: {showFooter: true}

            // 2. query 模式
            // path: '/search',
            // name: 'search',
            // component: Search,
            // meta: {showFooter: true}
        },
        {
            path: '/login',
            component: Login,
            meta: {showFooter: false}
        },
        {
            path: '/register',
            component: Register,
            meta: {showFooter: false}
        }
    ]
})
