/**
 * Usage
 * this.$store.commit('search/add', { id: 22, price: 110 })
 * store.commit('search/add', { id: 22, price: 110 })
 */
export const state = () => ({
  list: [],
  current: {}
})
export const mutations = {
  set(state, listings) {
    state.list = listings
  },
  add(state, item) {
    state.list.push(item)
  },
  remove(state, { item }) {
    state.list.splice(state.list.indexOf(item), 1)
  },
  setCurrent(state, item) {
    state.current = item
  },
  updateCurrent(state, item) {
    state.current = { ...state.current, ...item }
  }
}
