import Vue from 'vue'
import Vuex from 'vuex'
import appSettings from "../services/appSettings/store/index"
import user from "../services/user/store/index"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    appSettings,
    user
  }
})
