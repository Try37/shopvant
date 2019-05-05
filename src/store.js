import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeBarIndex: localStorage.getItem('actbaridx') ? parseInt(localStorage.getItem('actbaridx')) : 0
  },
  mutations: {
    // 设置当前导航索引：mutations中的方法只能同步执行
    setIndex (state, payload) {
      state.activeBarIndex = payload
      localStorage.setItem('actbaridx', payload)
    }
  },
  actions: {
    // 设置当前索引：actions中的方法可以异步执行，调用接口之类的需要在actions中进行操作
    setIndex ({ commit }, data) {
      commit('setIndex', data)
    }
  }
})
