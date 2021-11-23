import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'dark'
  },
  mutations: {
    changeTheme(state, target) {
      // 变更状态
      state.theme = target;
    }
  },
  actions: {},
  modules: {}
})