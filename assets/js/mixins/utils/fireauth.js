// NOTE:  >>> import firebase from '~/assets/js/mixins/utils/firebase'
import firebase from '~/assets/js/firebase' // default as firebase, db, auth
export default {
  data() {
    return { isFbAuthLogin: null }
  },
  mounted() {
    const _this = this
    this.$nextTick(() => {
      firebase.auth().onAuthStateChanged((user) => {
        //   console.log(`fireauth.onAuthStateChanged`, user)
        _this.isFbAuthLogin = !!user
        //   if (user != null) {
        //     user.getIdToken().then((accessToken) => {
        //       console.log(`accessToken`, accessToken)
        //     })
        //   }
      })
    })
  },
  computed: {},
  methods: {
    // getisFbAuthLogin() {
    //   // console.log(`firebase.auth().currentUser`, firebase.auth().currentUser)
    //   return firebase.auth().currentUser != null
    // },
    async logoutFbAuth() {
      await firebase.auth().signOut()
      alert('ログアウトに成功しました。')
      this.isFbAuthLogin = false
    }
  }
}
