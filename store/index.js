import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import nav from './nav';

Vue.use(Vuex)

const createStore = () => {
  const modules = {
    nav,
  }

  return new Vuex.Store({
    modules,
    actions: {
      async nuxtServerInit({ dispatch }, { req }) {
        await dispatch('nav/GET_NAV_DATA');
      }
    }
  })
}

export default createStore;