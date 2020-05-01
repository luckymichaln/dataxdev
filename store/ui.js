const state = () => ({
  mobileMenuOpened: false,
  modalOpened: {
    contact: false,
    project: false
  },
  projectName: null,
})

const mutations = {
  SET_MODAL_OPEN(state, { modalOpened, name, projectName }) {
    state.modalOpened[name] = modalOpened
    if (projectName) {
      state.projectName = projectName
    }
  },

  SET_MOBILE_MENU_OPEN(state, { mobileMenuOpened }) {
    console.log('object')
    state.mobileMenuOpened = mobileMenuOpened
  }
}

export default {
  namespaced: true,
  mutations, state
}
