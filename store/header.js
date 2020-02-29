import apiConfig from './api';

const state = () => ({
  headerData: null
})

const actions = {
  async GET_HEADER_DATA({ commit }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = await api.getSingle('site_header')
      doc = result.data

      if (doc) {
        commit('SET_HEADER_DATA', { data: doc });
      }

      console.log({ GET_HEADER_DATA: doc })
      return doc
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_HEADER_DATA(state, { data }) {
    state.headerData = data
  }
}

export default {
  namespaced: true,
  mutations, state, actions
}
