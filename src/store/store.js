
export default {
  state: {
    margetData: {}
  },
  getters: {
    margetData: state => state.margetData
  },
  mutations: {
    GET_MARGET_DATA (state, data) {
      state.margetData = data
    }
  },
  actions: {
    getMargetData ({commit}) {
      fetch('//bx.in.th/api/').then((res) => res.json()).then((res) => {
        commit('GET_MARGET_DATA', res)
      })
    }
  }
}
