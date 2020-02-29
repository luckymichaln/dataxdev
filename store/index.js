import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import header from './header';

Vue.use(Vuex)

const createStore = () => {
  const modules = {
    header,
  }

  return new Vuex.Store({
    modules,
    actions: {
      async nuxtServerInit({ dispatch }, { req }) {
        await dispatch('header/GET_NAV_DATA');
      }
    }
  })
}

export default createStore;