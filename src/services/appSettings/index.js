import store from "@/store"
export const appSettings = {
  bgColorGray: val => {
    store.dispatch("appSettings/bgColorGray", val)
  },
}
