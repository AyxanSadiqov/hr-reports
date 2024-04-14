import store from "@/store"

export const userService = {
  pullUserRole: (val) => {
    store.dispatch("user/updateUserRole", val)
  },
  userRole: () => {
    return store.state.user.userRole
  },
  isAuthenticated: () => {
    let isAuthenticated = true
    !store.state.user.userRole ? (isAuthenticated = false) : null
    return isAuthenticated
  },
}
