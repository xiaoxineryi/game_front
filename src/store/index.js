import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).userName,
      admin: window.localStorage.getItem('admin' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('admin' || '[]')).userName
    }
  },
  mutations: {
    login (state, user) {
      state.user = user
      window.localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      window.localStorage.removeItem('user')
      delete state.user
    }
  }
})
