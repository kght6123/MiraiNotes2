<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        MiraiNotes2
      </h1>
      <h2 class="subtitle">
        My super-excellent Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <div>
      <button @click="increment">
        Store Increment
      </button>
      <button @click="setItem">
        Set $localForage Item
      </button>
      <button @click="getItem">
        Get $localForage Item
      </button>
    </div>
    <div id="firebaseui-auth-container" />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/database'

// import firebaseui from 'firebaseui'
import firebaseConfig from '~/firebase.json'

import Logo from '~/components/Logo.vue'

import 'firebaseui/dist/firebaseui.css'

if (process.browser) {
  window.onNuxtReady((app) => {
    console.log('Nuxt ready!')
    // Require.
    const firebaseui = require('firebaseui')
    // Firebase config.
    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
    }
    // FirebaseUI config.
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.GithubAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
        // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
      ]
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      // tosUrl: '<your-tos-url>',
      // Privacy policy url/callback.
      // privacyPolicyUrl: function() {
      //   window.location.assign('<your-privacy-policy-url>')
      // }
    }
    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    // if (ui.isPendingRedirect()) {
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
    // }
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          // User is signed in.
          // const displayName = user.displayName
          // const email = user.email
          // const emailVerified = user.emailVerified
          // const photoURL = user.photoURL
          // const uid = user.uid
          // const phoneNumber = user.phoneNumber
          // const providerData = user.providerData
          user.getIdToken().then((accessToken) => {
            // document.getElementById('sign-in-status').textContent = 'Signed in'
            // document.getElementById('sign-in').textContent = 'Sign out'
            // document.getElementById(
            //   'account-details'
            // ).textContent = JSON.stringify(
            //   {
            //     displayName: displayName,
            //     email: email,
            //     emailVerified: emailVerified,
            //     phoneNumber: phoneNumber,
            //     photoURL: photoURL,
            //     uid: uid,
            //     accessToken: accessToken,
            //     providerData: providerData
            //   },
            //   null,
            //   '  '
            // )
          })
        } else {
          // User is signed out.
          // document.getElementById('sign-in-status').textContent = 'Signed out'
          // document.getElementById('sign-in').textContent = 'Sign in'
          // document.getElementById('account-details').textContent = 'null'
        }
      },
      (error) => {
        console.log(error)
      }
    )
  })
}
export default {
  components: {
    Logo
  },
  methods: {
    ...mapMutations({
      increment: 'increment'
    }),
    async getItem(e) {
      const item = await this.$localForage.getItem('key')
      console.log(item)
      const keys = await this.$localForage.keys()
      console.log(keys)
    },
    async setItem(e) {
      await this.$localForage.setItem('key', 'value')
    },
    async removeItem(e) {
      await this.$localForage.removeItem('key')
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
