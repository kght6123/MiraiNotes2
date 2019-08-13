<template>
  <div class="sticky-top">
    <ul class="list-unstyled mt-5">
      <li>
        <a
          id="link-login"
          href="#"
          class="text-light"
          data-toggle="modal"
          data-target="#login-modal"
        >
          <i class="oi oi-person" /><i
            class="mdi mdi-tr font-weight-bold"
            :class="{
              'mdi-check-circle': user,
              'text-success': user,
              'mdi-close-circle': !user,
              'text-danger': !user
            }"
          />
          ログイン
        </a>
      </li>
      <li>
        <a
          id="link-login-google"
          href="#"
          class="text-light"
          :class="{ 'd-none': !user }"
          data-toggle="modal"
          data-target="#auth-modal"
        >
          <i class="mdi mdi-google" /><i
            class="mdi mdi-tr font-weight-bold"
            :class="{
              'mdi-check-circle': gtoken,
              'text-success': gtoken,
              'mdi-close-circle': !gtoken,
              'text-danger': !gtoken
            }"
          />
          Google
        </a>
      </li>
      <li>
        <nuxt-link to="/" class="text-light active" no-prefetch>
          <i class="oi oi-home" />
          ホーム
        </nuxt-link>
      </li>
      <li>
        <a
          href="#"
          class="text-light sidebar-toggle"
          :class="{ 'd-none': !gtoken, 'reserve active': gtoken }"
          data-target="#filetree"
        >
          <i class="mdi mdi-folder-multiple-outline" />
          フォルダ
        </a>
      </li>
      <!--li>
        <a href="#" class="text-light sidebar-toggle" data-target="#headline">
          <i class="oi oi-list"></i>
          目次
        </a>
      </li-->
      <!--li>
        <a href="#" class="text-light sidebar-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="oi oi-question-mark"></i>
          問合せ
        </a>
        !- ドロップメニューの設定 -
        <div class="dropdown-menu bg-dark text-light" style="min-width: 20em;">
          <form class="px-4 py-3">
            <div class="form-group">
              <label for="exampleDropdownFormEmail1">タイトル</label>
              <input type="text" class="form-control bg-dark text-light" placeholder="～について">
            </div>
            <div class="form-group">
              <label for="exampleDropdownFormPassword1">本文</label>
              <textarea class="form-control bg-dark text-light" rows="5" placeholder="お問合せ内容の詳細を入力してください。"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">送信</button>
          </form>
        </div>!- /.dropdown-menu -
      </li-->
    </ul>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase' // default as firebase, db, auth

export default {
  props: {
    // user: { type: Object, default: null },
    gtoken: { type: String, default: null }
  },
  data: () => {
    return {
      // user: null
    }
  },
  // computed: {
  //   gtoken () {
  //     return this.$store.state.gtoken;
  //   },
  // },
  mounted() {
    if (process.browser) {
      // const _this = this
      // window.onNuxtReady((app) => {
      //   // const app = this
      //   console.log(
      //     'Nuxt ready!',
      //     this,
      //     firebase,
      //     app.$fireAuth,
      //     app.$fireStore,
      //     app.$localForage
      //   )
      //   firebase.auth().onAuthStateChanged(
      //     (user) => {
      //       console.log(`onAuthStateChanged`, user, firebase.auth().currentUser)
      //       if (user) {
      //         // User is signed in.
      //         _this.user = user
      //       } else {
      //         // User is signed out.
      //       }
      //     },
      //     (error) => {
      //       console.log(error)
      //     }
      //   )
      // })
    }
  },
  methods: {
    user() {
      return firebase.auth().currentUser
    }
  }
}
</script>

<style lang="stylus" scoped></style>
