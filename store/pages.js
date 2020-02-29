import apiConfig from './api';

const state = () => ({
  pageData: {
    home_page: null,
    career: null,
    about_us: null,
    projects_page: null,
    service_page: null,
  }
})

const actions = {
  async GET_SINGLE_PAGE_DATA({ commit }, { pageType, uid }) {
    try {
      const api = await apiConfig()
      let doc = {}
      const result = uid ? await api.getByUID(`${pageType}`, `${uid}`) : await api.getSingle(`${pageType}`)
      doc = result.data

      if (doc) {
        commit('SET_SINGLE_PAGE_DATA', { data: doc, pageType });
      }

      console.log({ GET_SINGLE_PAGE_DATA: doc, pageType })
      return doc
    } catch (err) {
      console.error({ err, pageType })
    }
  }
}

const mutations = {
  SET_SINGLE_PAGE_DATA(state, { data, pageType }) {
    state.pageData[`${pageType}`] = data
  }
}

const getters = {
  homePageData: state => state.pageData.home_page ? state.pageData.home_page : null,
  careerPageData: state => state.pageData.career ? state.pageData.career : null,
  projectsPageData: state => state.pageData.projects_page ? state.pageData.projects_page : null,
  aboutPageData: state => state.pageData.about_us ? state.pageData.about_us : null,
  servicesPageData: state => state.pageData.service_page ? state.pageData.service_page : null,
}

export default {
  namespaced: true,
  state, actions, mutations, getters
}
