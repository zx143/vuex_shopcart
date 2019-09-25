import Vue from 'vue'
import Vuex from 'vuex'
// 引入购物车
import cart from '@/stote/modules/cart'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    cart
  },

  state: {
    count: 1
  },
  mutations: {
    add: state => {
      state.count++
    },
    reduce: (state, n) => {
      state.count = state.count - n
    }
  },
  actions: {
    // 注册actions
    add: context => {
      context.commit('add')
    },
    reduce: (context, n) => {
      context.commit('reduce', n)
    }
  },
  getters: {
    // 计算属性
    getStateCount: state => {
      return state.count + 1
    }
  }
})

export default store
