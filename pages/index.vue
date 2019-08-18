<template>
  <div class="sidebar-wrapper">
    <div id="sidebar" class="sidebar-wrapper">
      <!-- Sidebar1  -->
      <nav id="menu" class="sidebar bg-secondary simple always">
        <mirai-menu />
      </nav>
      <!-- Sidebar3  -->
      <nav
        id="filetree"
        class="sidebar bg-dark floating-2"
        :class="{ 'none-toggle': !isFbAuthLogin }"
      >
        <mirai-file-tree />
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
        <mirai-editor
          id="edit-section"
          class="m-0 mw-100"
          style="max-height: 100%;"
        ></mirai-editor>
      </main>
      <nav class="sidebar bg-dark simple always mini pt-3">
        <div class="sticky-top">
          <ul class="list-unstyled">
            <li>
              <button
                id="link-slide-mode"
                href="#"
                class="btn-dark"
                data-url="revealjs/revealjs.html"
                data-target="#slide-modal"
              >
                <i class="mdi mdi-presentation" />
                <span style="font-size:0.5em;">Slide Mode</span>
              </button>
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
        <!--no-ssr placeholder="Loading..."-->
        <mirai-login />
        <!--/no-ssr-->
      </form>
      <!-- Modal Auth Floating Form
      <form id="auth">
        <mirai-drive-auth :user="user" :auth-url="authUrl" :gtoken="gtoken" />
      </form> -->
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
    </div>  -->
</template>

<script>
import { mapMutations } from 'vuex'

import MenuSidebar from '~/components/MenuSidebar.vue'
import FileTreeSidebar from '~/components/FileTreeSidebar.vue'
import Login from '~/components/Login.vue'
// import DriveAuth from '~/components/DriveAuth.vue'
import Editor from '~/components/Editor.vue'

import fireauth from '~/assets/js/mixins/utils/fireauth'

export default {
  components: {
    miraiMenu: MenuSidebar,
    miraiFileTree: FileTreeSidebar,
    miraiLogin: Login,
    // miraiDriveAuth: DriveAuth,
    miraiEditor: Editor
  },
  mixins: [fireauth],
  data() {
    return {
      // gtoken: 'null',
      // user: null,
      // authUrl: null
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
