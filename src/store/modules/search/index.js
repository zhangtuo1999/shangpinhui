import {getSearchInfo} from "@/api";

const state = {
    searchList: {}
}

const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

const mutations = {
    GET_SEARCH_INFO(state, data) {
        state.searchList = data
    }
}

const actions = {
    async getSearchInfo({commit}, data = {}) {
        await getSearchInfo(data).then(response => {
            if (response.code === 200) {
                commit('GET_SEARCH_INFO', response.data)
            }
        })
    }
}

export default {
    namespaced: true,
    state, getters, mutations, actions
}
