// import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '~/firebase.app.json'
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
  // Vue.prototype.$firebase = firebase
  // console.log(`firebase initializeApp!!!`, firebase)
}
export default firebase
export const auth = firebase.auth()
export const db = firebase.firestore()
