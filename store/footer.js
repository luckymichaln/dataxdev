import apiConfig from './api';

const state = () => ({
  footerData: null
})

const actions = {
  async GET_FOOTER_DATA({ commit }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = await api.getSingle('site_footer')
      doc = result.data

      if (doc) {
        commit('SET_FOOTER_DATA', { data: doc });
      }

      console.log({ GET_FOOTER_DATA: doc })
      return doc
    } catch (err) {
      console.error(err)
    }
  }
}

const mutations = {
  SET_FOOTER_DATA(state, { data }) {
    state.footerData = data
  }
}

export default {
  namespaced: true,
  mutations, state, actions
}
