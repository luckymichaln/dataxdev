const state = () => ({
  modalOpened: false
})

const mutations = {
  SET_MODAL_OPEN(state, { modalOpened }) {
    state.modalOpened = modalOpened
  }
}

export default {
  namespaced: true,
  mutations, state
}
