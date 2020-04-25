const state = () => ({
  modalOpened: {
    contact: false,
    project: false
  },
  projectName: null
})

const mutations = {
  SET_MODAL_OPEN(state, { modalOpened, name, projectName }) {
    state.modalOpened[name] = modalOpened
    if (projectName) {
      state.projectName = projectName
    }
  }
}

export default {
  namespaced: true,
  mutations, state
}
