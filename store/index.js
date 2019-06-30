// import createPersistedState from 'vuex-persistedstate'
export const state = () => ({
  // Vuexストアの状態
  counter: 0
})
export const mutations = {
  // Vuexストアの状態を変更
  increment(state) {
    state.counter++
  }
}
export const getters = {
  // Vuexストアの状態を加工して返す
  getPlusCounter: (state) => (val) => {
    return state.counter + val
  }
}
export const actions = {
  // ミューテーションのコミットや、任意の非同期処理を行う
  nuxtServerInit({ commit }, { req }) {
    // サーバーサイドからクライアントサイドに直接渡したいデータを書く
    // if (req.session.user) {
    //   commit('user', req.session.user)
    // }
  },
  async GET_LISTING({ commit }, id) {
    await this.$axios
      .get('/listings/' + id, {
        // baseURL: `https://${
        //   APISERVERS[Math.floor(Math.random() * APISERVERS.length)]
        // }/api/v1`,
        // headers: headers
      })
      .then((res) => {
        console.info('GET_LISTING INFO', id, res.data)
        if (res.status === 200) {
          commit('addOne', res.data)
          commit('setListing', res.data)
        }
      })
      .catch((error) => {
        console.log('GET_LISTING - ERROR', error)
      })
      .finally(() => {
        console.info('GET_LISTING', 'DONE')
      })
  },
  async show({ commit }, params) {
    await this.$axios.get(`cars/${params.car_id}`).then((res) => {
      if (res.status === 200) {
        commit('setCar', res.data)
      }
    })
  },
  async set({ commit }, car) {
    await commit('set', car)
  }
}
// const myPlugin = (store) => {
//   // ストアが初期化されたときに呼ばれます
//   store.subscribe((mutation, state) => {
//     // それぞれのミューテーションの後に呼ばれます
//     // ミューテーションは `{ type, payload }` の形式で提供されます
//     console.log(store)
//   })
// }
// export const plugins = [myPlugin]
