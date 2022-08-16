import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'

const store = createStore({
  state() {
    return {
      counter: 0,
      history: [0]
    }
  },
  mutations: {
    // mutations should never contain asynchronous code
    addToCounter(state, payload) {
      state.counter = state.counter + payload
      state.history.push(state.counter)
    },
    subtractFromCounter(state, payload) {
      state.counter = state.counter - payload
      state.history.push(state.counter)
    }
  },
  actions: {
    async addRandomNumber(context) {
      const res = await fetch("https://www.randomnumberapi.com/api/v1.0/random?min=-1000&max=1000")
      const data = await res.text()
      const randomNumber = JSON.parse(data)[0]
      context.commit("addToCounter", randomNumber)
    }
  },
  getters: {
    matchingIndexes: (state) => (payload) => {
      let indexes = [];
      state.history.forEach((num, idx) => {
        if (num === payload) {
          indexes.push(idx)
        }
      })
      return indexes
    }
  }
})

createApp(App).use(store).mount('#app')
