/* eslint-disable vue/max-attributes-per-line */
<template>
  <div
    id="login-modal"
    tabindex="-1"
    class="modal fade"
    role="dialog"
    aria-hidden="true"
    aria-labelledby="login-title"
    style="display: none;"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content bg-dark text-light shadow-lg">
        <div class="modal-header p-2 pl-3">
          <h4 id="login-title" class="modal-title">
            ログイン
          </h4>
          <button
            class="close"
            aria-label="Close"
            type="button"
            data-dismiss="modal"
            style="margin-top: -0.55em; margin-right: -0.25em;"
          >
            <span class="text-light" aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">
          <div id="firebaseui-auth-container"></div>
          <!--
          <div class="form-group mb-2" :class="{ 'd-none': !regist }">
            !-- registがfalseの時は、d-none(非表示) --
            <label for="name">名前</label>
            <input
              id="name"
              v-model="name"
              v-validate="'required'"
              type="text"
              class="form-control form-control-lg bg-dark text-light"
              name="name"
              placeholder="名前"
              :class="{ 'is-invalid': errors.has('name') }"
              required
            />
            <div v-if="errors.has('name')" class="invalid-feedback">
              名前を入力してください。
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="email">メールアドレス</label>
            <input
              id="email"
              v-model="email"
              v-validate="'required|email'"
              type="email"
              class="form-control form-control-lg bg-dark text-light"
              name="email"
              placeholder="メールアドレス"
              aria-describedby="email-help"
              :class="{ 'is-invalid': errors.has('email') }"
              required
            />
            <div v-if="errors.has('email')" class="invalid-feedback">
              登録したメールアドレスを入力してください。
            </div>
          </div>
          <div class="form-group mb-2">
            <label for="password">パスワード</label>
            <input
              id="password"
              ref="password"
              v-model="password"
              v-validate="'required|min:8'"
              type="password"
              class="form-control form-control-lg bg-dark text-light mb-1"
              name="password"
              placeholder="パスワード"
              aria-describedby="password-help"
              :class="{
                'is-invalid': errors.has('password') || errors.has('unmatch')
              }"
              required
            />
            <input
              id="password_confirmation"
              v-model="password_confirmation"
              v-validate="'required|min:8|confirmed:password'"
              type="password"
              class="form-control form-control-lg bg-dark text-light"
              name="password_confirmation"
              placeholder="パスワードを再度、入力してください"
              aria-describedby="password-help"
              :class="{
                'is-invalid':
                  errors.has('password_confirmation') || errors.has('unmatch'),
                'd-none': !regist
              }"
              data-vv-as="password"
              required
            />!-- registがfalseの時は、d-none(非表示) --
            <div
              v-if="errors.has('password_confirmation') && regist"
              class="invalid-feedback"
            >
              パスワードが一致しません。
            </div>
            <div v-if="errors.has('unmatch')" class="invalid-feedback">
              パスワード又はメールアドレスが誤っています。
            </div>
            <div v-if="errors.has('password')" class="invalid-feedback">
              パスワードは8文字以上で入力してください。
            </div>
            <div
              id="password-help"
              class="form-text text-muted"
              :class="{ 'd-none': regist }"
            >
              <a href="#">パスワードを忘れた？？</a>
            </div>
          </div>
          <div class="form-check custom-control custom-checkbox">
            <input
              id="save"
              v-model="save"
              type="checkbox"
              class="custom-control-input"
            />
            <label class="custom-control-label" for="save"
              >ログイン情報を保持</label
            >
          </div>
          <div class="form-check custom-control custom-checkbox">
            !-- custom-control-inline --
            <input
              id="regist"
              v-model="regist"
              type="checkbox"
              class="custom-control-input dropdown-toggle"
              :class="{ 'is-invalid': errors.has('unregist') }"
              role="button"
              data-toggle="collapse"
              aria-expanded="false"
            />
            <label class="custom-control-label" for="regist">新規登録</label>
            !-- eslint-disable-next-line vue/max-attributes-per-line --
            <span class="invalid-tooltip"
              >登録できませんでした、既に登録されている可能性があります。</span
            >
          </div>
          -->
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">
            閉じる
          </button>
          <!--button
            class="btn btn-primary"
            type="button"
            :class="{
              'is-invalid':
                errors.has('notification') || errors.has('regist_error'),
              'd-none': user
            }"
            @click="login"
          >
            ログイン
          </button>
          <button
            class="btn btn-secondary"
            type="button"
            :class="{ 'd-none': !user }"
            @click="unregist"
          >
            ユーザ消去
          </button>
          <button
            class="btn btn-primary"
            type="button"
            :class="{ 'd-none': !user }"
            @click="logout"
          >
            ログアウト
          </button>
          !-- eslint-disable-next-line vue/max-attributes-per-line --
          <span v-show="errors.has('notification')" class="invalid-tooltip"
            >入力エラーがあります。</span
          >
          !-- eslint-disable-next-line vue/max-attributes-per-line --
          <span v-show="errors.has('regist_error')" class="invalid-tooltip"
            >@{{ errors.first('regist_error') }}</span
          >-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Firebase App (the core Firebase SDK) is always required and must be listed first
// import * as firebase from 'firebase/app'

// Add the Firebase products that you want to use
// import 'firebase/auth'
// import 'firebase/database'

// import firebaseui from 'firebaseui'
// import firebaseConfig from '~/firebase.json'

import 'firebaseui/dist/firebaseui.css'

if (process.browser) {
  window.onNuxtReady((app) => {
    console.log('Nuxt ready!', app.$fireAuth, app.$fireStore)
    // Require.
    const firebaseui = require('firebaseui')
    // // Firebase config.
    // if (!firebase.apps.length) {
    //   // Initialize Firebase
    //   firebase.initializeApp(firebaseConfig)
    // }
    // FirebaseUI config.
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        app.$fireAuthObj.GoogleAuthProvider.PROVIDER_ID,
        // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        app.$fireAuthObj.GithubAuthProvider.PROVIDER_ID,
        app.$fireAuthObj.EmailAuthProvider.PROVIDER_ID
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
    const ui = new firebaseui.auth.AuthUI(app.$fireAuth)
    // if (ui.isPendingRedirect()) {
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
    // }
    app.$fireAuth.onAuthStateChanged(
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

// import js-cookie
// import Cookies from 'js-cookie';
// import { out_console } from '../axios/axios-errors';

export default {
  // watch: {
  //   regist: function(_new, _old) {
  //     if (_new) {
  //       // 新規登録のとき
  //     }
  //   }
  // },
  // methods: {
  //   saveCookie: function() {
  //     if($('#save').is(':checked')) {
  //       // FIXME かり処理
  //       Cookies.set('email', this.email, { path: '/', expires: 365 });
  //       Cookies.set('password', this.password, { path: '/', expires: 365 });
  //     }
  //   },
  //   login: function() {
  //     // alert("email="+this.email+",password="+this.password+",save="+this.save+",regist="+this.regist);
  //     // バリデーションする
  //     this.$validator.errors.remove('notification');
  //     this.$validator.errors.remove('unmatch');
  //     this.$validator.errors.remove('unregist');
  //     this.$validator.validateAll().then((result) => {
  //       if ( this.regist && !result ) {
  //         // 新規登録で入力エラー
  //         this.$validator.errors.add({field: 'notification', msg: 'msg'});
  //         return false;
  //       } else if ( !this.regist && (this.$validator.errors.has('email') || this.$validator.errors.has('password')) ) {
  //         // ログインで入力エラー
  //         this.$validator.errors.add({field: 'notification', msg: 'msg'});
  //         return false;
  //       }
  //     });
  //     if (this.regist) {
  //       // ユーザ登録する
  //       axios.post('/api/register', { name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation })
  //         .then(function(response) {
  //           // alert(JSON.stringify(response.data));
  //           if(response.data.register) {
  //             $('#login-modal').modal('hide');
  //             this.$store.dispatch('setUser', response.data.user);
  //             this.saveCookie();
  //           } else {
  //             this.$validator.errors.add({field: 'unregist', msg: 'msg'});
  //           }
  //         }.bind(this))// thisを使う
  //         .catch(function(error) {
  //           out_console(error, 'user, register');
  //           // errorを展開する alert(error.response.data.errors.email[0]);
  //           Object.keys(error.response.data.errors).forEach(function(errorObjKey){
  //             error.response.data.errors[errorObjKey].forEach(function(errorObj, index, ar){
  //               this.$validator.errors.add({field: 'regist_error', msg: errorObj});
  //             }, this);
  //           }, this);
  //         }.bind(this));// thisを使う
  //     } else {
  //       // ユーザ認証する
  //       axios.post('/api/login', { email: this.email, password: this.password })
  //         .then(function(response) {
  //           //alert(JSON.stringify(response.data));
  //           if(response.data.auth) {
  //             $('#login-modal').modal('hide');
  //             this.$store.dispatch('setUser', response.data.user);
  //             this.$store.dispatch('setMarkdown', response.data.user.markdown);
  //             this.saveCookie();
  //           } else {
  //             this.$validator.errors.add({field: 'unmatch', msg: 'msg'});
  //           }
  //         }.bind(this))// thisを使う
  //         .catch(function(error) {
  //           out_console(error, 'user, login');
  //         }.bind(this));// thisを使う
  //     }
  //   },
  //   logout: function() {
  //     axios.post('/api/logout')
  //       .then(function(response) {
  //         //alert(JSON.stringify(response.data));
  //         if(response.data.check) {
  //           $('#login-modal').modal('hide');
  //           this.$store.dispatch('setUser', null);
  //         } else {
  //           this.$validator.errors.add({field: 'unmatch', msg: 'msg'});
  //         }
  //       }.bind(this))// thisを使う
  //       .catch(function(error) {
  //         out_console(error, 'user, logout');
  //       }.bind(this));// thisを使う
  //   },
  //   unregist: function() {
  //     axios.post('/api/unregister')
  //       .then(function(response) {
  //         //alert(JSON.stringify(response.data));
  //         if(response.data.unregister) {
  //           $('#login-modal').modal('hide');
  //           this.$store.dispatch('setUser', null);
  //         } else {
  //           this.$validator.errors.add({field: 'unmatch', msg: 'msg'});
  //         }
  //       }.bind(this))// thisを使う
  //       .catch(function(error) {
  //         out_console(error, 'user, unregister');
  //       }.bind(this));// thisを使う
  //   }
  // },
  props: {
    // user: { type: Object, default: null }
  },
  // created() {
  //   // メッセージを日本語に設定する
  //   this.$validator.localize('ja');
  //   // Cookieに保存されていた情報を取得する
  //   this.email = Cookies.get("email");
  //   this.password = Cookies.get("password");
  // },
  data: () => {
    return {
      // name: null,
      // email: null,
      // password: null,
      // password_confirmation: null,
      // save: true,
      // regist: false
    }
  },
  methods: {
    // login(event) {},
    // logout(event) {},
    // unregist(event) {},
    // backHome(event) {},
    // backFolder(event) {},
    // refresh(event) {}
  }
}
</script>

<style lang="stylus" scoped></style>
