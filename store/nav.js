import apiConfig from './api';

const state = () => ({
  navData: null
})

const actions = {
  async GET_NAV_DATA({ commit }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = await api.getSingle('site_header')
      doc = result.data

      if (doc) {
        commit('SET_NAV_DATA', { data: doc });
      }

      console.log({ GET_NAV_DATA: doc })
      return doc
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_NAV_DATA(state, { data }) {
    state.navData = data
  }
}

export default {
  namespaced: true,
  mutations, state, actions
}
