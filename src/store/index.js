import Vue from "vue";
import Vuex from 'vuex';
import home from "@/store/modules/home";
import search from "@/store/modules/search";

Vue.use(Vuex)


export default new Vuex.Store({
    modules: {home, search}
})
