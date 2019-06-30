// ssr/HMR ng for local-storage
// import createPersistedState from 'vuex-persistedstate'
// export default ({ store, isHMR, isClient }) => {
//   // In case of HMR, mutation occurs before nuxReady, so previously saved state
//   // gets replaced with original state received from server. So, we've to skip HMR.
//   // Also nuxtReady event fires for HMR as well, which results multiple registration of
//   // vuex-persistedstate plugin
//   if (isHMR) return
//   if (isClient) {
//     window.onNuxtReady((nuxt) => {
//       createPersistedState()(store) // vuex plugins can be connected to store, even after creation
//     })
//   }
// }
// nuxt.config.js
// plugins: [
//   { src: '~plugins/persistedstate.js' }
// ]
// ssr/HMR ok for cookie-storage
// import createPersistedState from 'vuex-persistedstate'
// import * as Cookies from 'js-cookie'
// import cookie from 'cookie'
// export default ({store, req, isDev}) => {
//   createPersistedState({
//       key: 'your_key',
//       paths: ['state1', 'state2',...so_on],
//       storage: {
//         getItem: (key) => process.client ? Cookies.getJSON(key) : cookie.parse(req.headers.cookie||'')[key],
//         setItem: (key, value) => Cookies.set(key, value, { expires: 365, secure: !isDev }),
//         removeItem: (key) => Cookies.remove(key)
//       }
//   })(store)
// }
