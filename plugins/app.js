// window._ = require('lodash');

// require('./bootstrap');

// // import es6 promise
// import 'es6-promise/auto';

// // import VeeValidate
// import VeeValidate, { Validator } from'vee-validate';

// // require Vue
// window.Vue = require('vue');

// import Vuex
// import Vue from 'vue'
// import Vuex from 'vuex';
// window.Vue.use(Vuex);

// // use VeeValidate
// window.Vue.use(VeeValidate);

// // use axios
// import { axios } from './axios/axios-base';
import { outConsole } from '~/assets/js/axios/axios-errors'

require('~/assets/js/halocontext/jquery.halocontext')
require('~/assets/js/sidebar/bootstrap-sidebar')

export default (app) => {
  // Add a request interceptor
  app.$axios.interceptors.request.use(
    (config) => {
      console.log('Request OK config.', config)
      return Promise.resolve(config)
    },
    (error) => {
      console.error('Request Error status.', error)
      outConsole(error, 'global')
      return Promise.reject(error)
    }
  )

  // Add a response interceptor
  app.$axios.interceptors.response.use(
    (response) => {
      // Do something with response data
      console.log('Response OK status.', response.status)
      return Promise.resolve(response) // responseで返す正常なPromise処理を返す
    },
    (error) => {
      // Do something with response error
      console.error('Response Error status.', error.response.status)
      outConsole(error, 'global')
      return Promise.reject(error) // errorで返す異常なPromise処理を返す
    }
  )
}

// const updateDelegateMarkdown = function() {
//   $("#delegate-markdown").val(store.state.editor.getMarkdown());
// }
// const findDelegateMarkdown = function() {
//   store.state.editor.setMarkdown($("#delegate-markdown").val(), false/*cursorToEndopt*/);
// }

// // use editor
// import { editor } from './editor';

// // use main store
// import mainStore from './store/storeopt-main';
// export const store = new Vuex.Store(mainStore);

// // set editor
// store.dispatch('setEditor', editor);

// // set editor event
// editor.on("change", function() {
//   store.dispatch('updateMarkdown');
// });
// editor.on("blur", function() {
//   store.dispatch('updateUser');
// });

// // ログインユーザ情報の監視
// store.watch(function(state, getter){
//   return getter.user;
// }, function(){
//   const user = store.state.user;
//   if(user) {
//     if (user.api_token) {
//       // auth update.
//       window.axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.api_token;
//     }
//     // Google認証を実行する
//     axios.post('/api/drive/auth', { web: true })
//       .then(function(response) {
//         //alert(JSON.stringify(response.data));
//         if(response.data.authUrl) {
//           store.dispatch('setAuthUrl', response.data.authUrl);
//         }
//       }.bind(this))// thisを使う
//       .catch(function(error) {
//         out_console(error, 'login, drive/auth');
//       }.bind(this));// thisを使う

//   } else {
//     // auth clear.
//     window.axios.defaults.headers.common['Authorization'] = null;
//   }
// }, {immediate: true, deep: true});

// import miraiMenu from './components/MenuSidebar.vue';
// import miraiFileTree from './components/FileTreeSidebar.vue';

// const sidebar = new Vue({
//   el: '#sidebar',
//   store: store,
//   computed: {
//     user: {
//       get () {
//         return this.$store.state.user;
//       },
//       set (value) {
//         this.$store.dispatch('setUser', value);
//       }
//     },
//     gtoken: {
//       get () {
//         return this.$store.getters.gtoken;
//       }
//     },
//   },
//   components: { miraiMenu, miraiFileTree },
// });

// import miraiLogin from './components/Login.vue';
// const login = new Vue({
//   el: '#login',
//   store: store,
//   computed: {
//     user: {
//       get () {
//         return this.$store.state.user;
//       },
//       set (value) {
//         this.$store.dispatch('setUser', value);
//       }
//     },
//   },
//   components: { miraiLogin },
// });

// import miraiDriveAuth from './components/DriveAuth.vue';
// const auth = new Vue({
//   el: '#auth',
//   store: store,
//   computed: {
//     authUrl: {
//       get () {
//         return this.$store.state.authUrl;
//       }
//     },
//     user: {
//       get () {
//         return this.$store.state.user;
//       },
//       set (value) {
//         this.$store.dispatch('setUser', value);
//       }
//     },
//     gtoken: {
//       get () {
//         return this.$store.getters.gtoken;
//       }
//     },
//   },
//   components: { miraiDriveAuth },
// });

// $(function(){
//   // haloContext 右クリックメニューを表示 _pthisや_peで右クリックされた要素を特定
//   // $('#filetree li').haloContext({
//   //   bindings : [
//   //     { label : "Heart0", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('0:'+$(_pe.target).html()); } },
//   //     { label : "Heart1", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('1:'+$(_pe.target).html()); } },
//   //     { label : "Heart2", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('2:'+$(_pe.target).html()); } },
//   //     { label : "Heart3", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('3:'+$(_pe.target).html()); } },
//   //     { label : "Heart4", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('4:'+$(_pe.target).html()); } },
//   //     { label : "Heart5", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('5:'+$(_pe.target).html()); } },
//   //     { label : "Heart6", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('6:'+$(_pe.target).html()); } },
//   //     { label : "Heart7", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('7:'+$(_pe.target).html()); } },
//   //     { label : "Heart8", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('8:'+$(_pe.target).html()); } },
//   //     { label : "Heart9", iconClassNames : "oi oi-heart", onclick : function(_e, _pthis, _pe) { alert('9:'+$(_pe.target).html()); } },
//   //   ],
//   //   options : {}
//   // });
//   $('#slide-modal .close').on('click', function(){
//     findDelegateMarkdown();
//   });
//   $('#link-slide-mode').on('click', function(){
//     updateDelegateMarkdown();
//   });
// });
