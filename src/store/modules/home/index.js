import {getCategoryList} from "@/api";

const state = {
    categoryList: []
}

const getters = {}

const mutations = {
    GET_CATEGORY_LIST(state, data) {
        state.categoryList = data
    }
}

const actions = {
    async getCategoryList({commit}) {
        await getCategoryList().then(response => {
            commit('GET_CATEGORY_LIST', response.data)
        })
    }
}

export default {
    namespaced: true,
    state, getters, mutations, actions
}
