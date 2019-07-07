/**
 * Usage
 * // fetch
 * async fetch({ app, store, params }) {
 *    await store.dispatch('listings/GET_LISTING', params)
 * }
 * // mutations
 * this.$store.commit('search/add', { id: 22, price: 110 })
 * // actions
 * this.$store.dispatch('listings/doAction', 11)
 */
export const actions = {
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
