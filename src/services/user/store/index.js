import { accounts } from "@/common/helpers/user";

const user = {
  state: {
    userRole: null,
    searchVal: ""
  },
  getters: {},
  mutations: {
    setUserRole: (state, role) => (state.userRole = role),
    setSearchVal: (state, role) => (state.searchVal = role),
  },
  actions: {
    updateUserRole: ({ commit }, val) => {
      let userRole = ""
      accounts.forEach(acc => {
        if (acc.email == val) {
          userRole = acc.role
          return
        }
      })
      commit("setUserRole", userRole);
    },
    updateSearchVal: ({ commit }, val) => {
      commit("setSearchVal", val);
    },
  },
  namespaced: true,
};
export default user;
