import { createStore } from 'vuex'
// import home from '/@/store/home'
import login from '/@/store/login'

// 此处和router类似
const store = createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    // home,
    login
  }
})

export default store
