import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import header from './header';
import footer from './footer';
import pages from './pages';

Vue.use(Vuex)

const createStore = () => {
  const modules = {
    header,
    footer,
    pages,
  }

  return new Vuex.Store({
    modules,
    actions: {
      async nuxtServerInit({ dispatch }, { req }) {
        await dispatch('header/GET_HEADER_DATA');
        await dispatch('footer/GET_FOOTER_DATA');
      }
    }
  })
}

export default createStore;