import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    currentDieNum: []
  },
  mutations: {
    setDieNum(state, dice) {
      state.currentDieNum = dice
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    chooseDieNum({ commit }, num) {
      let res = []
      let i = 0
      while (i < num) {
        let die = {
          index: i,
          output: ""
        }
        res.push(die)
        i++
      }
      commit("setDieNum", res)
    },
    setDiceImages({ commit }, dice) {
      commit("setDieNum", dice)
    }
  }
})
