import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  // 有些类似于计算属性
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
