<template>
  <div class="sidebar-wrapper">
    <div id="sidebar" class="sidebar-wrapper">
      <!-- Sidebar1  -->
      <nav id="menu" class="sidebar bg-secondary simple always">
        <mirai-menu :user="user" />
      </nav>
      <!-- Sidebar3  -->
      <nav
        id="filetree"
        class="sidebar bg-dark floating-2"
        :class="{ 'none-toggle': !gtoken }"
      >
        <mirai-file-tree :user="user" />
      </nav>
      <!-- Sidebar2  -->
      <nav
        id="headline"
        class="sidebar bg-dark none-toggle of-y-auto floating-2"
      >
        <div class="sticky-top of-y-auto mhp-100 hp-100">
          <ul class="list-unstyled">
            <li>
              <div class="btn-group dropdown w-100">
                <a href="#header1" class="nav-link text-light w-100">
                  <i class="oi oi-header" />
                  機能一覧
                </a>
                <a
                  href="#pageSubmenu4"
                  class="text-light dropdown-toggle dropdown-toggle-split open"
                  role="button"
                  data-toggle="collapse"
                  aria-expanded="false"
                />
              </div>
              <ul
                id="pageSubmenu4"
                class="collapse list-unstyled"
                data-parent=".sidebar"
              >
                <li>
                  <a href="#header1-1" class="nav-link text-light">
                    <i class="oi oi-header" />
                    積層サイドバー
                  </a>
                </li>
                <li>
                  <a href="#header1-2" class="nav-link text-light">
                    <i class="oi oi-header" />
                    簡略表示
                  </a>
                </li>
                <li>
                  <a href="#header1-3" class="nav-link text-light">
                    <i class="oi oi-header" />
                    常に表示
                  </a>
                </li>
                <li>
                  <a href="#header1-4" class="nav-link text-light">
                    <i class="oi oi-header" />
                    サブメニュー
                  </a>
                </li>
                <li>
                  <div class="btn-group dropright w-100">
                    <a href="#header1-5" class="nav-link text-light w-100">
                      <i class="oi oi-header" />
                      表示切り替え
                    </a>
                    <a
                      href="#"
                      class="text-light dropdown-toggle dropdown-toggle-split"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-flip="false"
                      data-offset="-21,-2"
                    />
                    <ul class="dropdown-menu bg-dark" data-parent=".sidebar">
                      <li>
                        <a href="#header1-5-1" class="nav-link text-light">
                          <i class="oi oi-header" />
                          xs以上
                        </a>
                      </li>
                      <li>
                        <a href="#header1-5-2" class="nav-link text-light">
                          <i class="oi oi-header" />
                          xs未満
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#header1-6" class="nav-link text-light">
                    <i class="oi oi-header" />
                    表示切り替え（xs以下）
                  </a>
                </li>
                <li>
                  <a href="#header1-7" class="nav-link text-light">
                    <i class="oi oi-header" />
                    パンくずリストは上部に固定
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#header2" class="nav-link text-light">
                <i class="oi oi-header" />
                開発方針
              </a>
            </li>
            <li>
              <a href="#header3" class="nav-link text-light">
                <i class="oi oi-header" />
                ライブラリ
              </a>
            </li>
            <li>
              <a href="#header4" class="nav-link text-light">
                <i class="oi oi-header" />
                推奨環境
              </a>
            </li>
            <li>
              <a href="#header5" class="nav-link text-light">
                <i class="oi oi-header" />
                開発環境
              </a>
            </li>
            <li>
              <a href="#header6" class="nav-link text-light">
                <i class="oi oi-header" />
                今後の予定
              </a>
            </li>
            <li>
              <a href="#header7" class="nav-link text-light">
                <i class="oi oi-header" />
                連絡先
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="sidebar-wrapper mw-100 w-100">
      <!-- Page Content  -->
      <main class="sidebar-content of-hidden mhv-100 hv-100 mw-100 m-0 p-0">
        <!-- デフォルトだと#appはvue.jsが有効 -->
        <div id="app" style="display: none;">
          <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
              <a class="navbar-brand" href="#">
                MiraiNotes
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>

              <div id="navbarSupportedContent" class="collapse navbar-collapse">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto" />
                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                  <!-- Top Links
                  @if (Route::has('login'))
                      @auth
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/home') }}">{{ __('Home') }}</a>
                        </li>
                      @else
                        <li class="nav-item">
                            <a class="nav-link" href="{{ url('/') }}">{{ __('Welcome') }}</a>
                        </li>
                      @endauth
                  @endif -->
                  <!-- Authentication Links
                  @guest
                      <li class="nav-item">
                        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                      </li>
                      <li class="nav-item">
                        @if (Route::has('register'))
                            <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                        @endif
                      </li>
                  @elsex
                    <li class="nav-item dropdown">
                      <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }} <span class="caret"></span>
                      </a>

                      <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route('logout') }}"
                        onclick="event.preventDefault();
                                        document.getElementById('logout-form').submit();">
                          {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                          @csrf
                        </form>
                      </div>
                    </li>
                  @endguest -->
                </ul>
              </div>
            </div>
          </nav>
          <main class="py-4">
            <!-- @yield('content') -->
          </main>
        </div>
        <div
          id="edit-section"
          class="m-0 mw-100"
          style="max-height: calc(100% - 16px);"
        />
      </main>
      <nav class="sidebar bg-light simple always mini">
        <div class="sticky-top">
          <ul class="list-unstyled">
            <li>
              <a
                id="link-slide-mode"
                href="#"
                class="text-dark"
                data-url="revealjs/revealjs.html"
                data-target="#slide-modal"
              >
                <i class="mdi mdi-presentation" />
                Slide Mode
              </a>
            </li>
            <!--li>
              <a href="#" class="text-dark active">
                <i class="oi oi-heart"></i>
                Love
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="oi oi-bold"></i>
                Bold
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="oi oi-italic"></i>
                Italic
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="oi oi-check"></i>
                Check
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="oi oi-code"></i>
                Code
              </a>
            </li>
            <li>
              <a href="#" class="text-dark">
                <i class="oi oi-grid-three-up"></i>
                Grid
              </a>
            </li-->
          </ul>
        </div>
      </nav>
      <!-- Modal Login Floating Form -->
      <form id="login">
        <mirai-login :user="user" />
      </form>
      <!-- Modal Auth Floating Form -->
      <form id="auth">
        <mirai-drive-auth :user="user" :auth-url="authUrl" :gtoken="gtoken" />
      </form>
    </div>
  </div>
  <!--
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
  -->
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
  components: {},
  data() {
    return {
      gtoken: null,
      user: null,
      authUrl: null
    }
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
