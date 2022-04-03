import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from "@/store";
import TypeNav from "@/components/TypeNav";
import '@/mock/index'
// 注册全局组件
Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
