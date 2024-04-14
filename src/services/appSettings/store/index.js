const appSettings = {
  state: {
    bgColorGray: true,
  },
  getters: {},
  mutations: {
    bgColorGray: (state, val) => (state.bgColorGray = val),
  },
  actions: {
    bgColorGray: ({ commit }, val) => commit("bgColorGray", val),
  },
  namespaced: true
}
export default appSettings
