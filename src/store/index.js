import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex)

// state：Vuex 仓库中存储数据地方
const state = {}

// getters：相当于计算属性，简化获取 state 中数据的操作
const getters = {}

// mutations：修改 state 的唯一手段
const mutations = {}

// actions：书写业务逻辑，处理异步
const actions = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
