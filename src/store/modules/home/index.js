import {getBannerList, getCategoryList} from "@/api";

const state = {
    categoryList: [],
    bannerList: []
}

const getters = {}

const mutations = {
    GET_CATEGORY_LIST(state, data) {
        state.categoryList = data
    },
    GET_BANNER_LIST(state, data) {
        state.bannerList = data
    }
}

const actions = {
    async getCategoryList({commit}) {
        await getCategoryList().then(response => {
            commit('GET_CATEGORY_LIST', response.data)
        })
    },

    async getBannerList({commit}) {
        await getBannerList().then(response => {
            commit('GET_BANNER_LIST', response.data)
        })
    }
}

export default {
    namespaced: true,
    state, getters, mutations, actions
}
