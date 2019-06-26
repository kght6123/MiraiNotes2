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
      <modal
        name="hello-world"
        :resizable="true"
        :adaptive="true"
        :draggable="true"
        :scrollable="true"
        height="auto"
      >
        <div class="modal-header">
          <div class="modal-header-icon" @click="hide">
            <font-awesome-icon
              icon="times"
              size="2x"
              :style="{ color: 'rgba(0,0,0,0.50)' }"
            />
          </div>
        </div>
        <iframe
          id="feedback"
          src="https://docs.google.com/forms/d/e/1FAIpQLSeB5JTxpbVDRKkkTlpatHvzysWQAa1RHBIdSvGsygvxhyhIwQ/viewform?embedded=true"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        />
      </modal>
      <button @click="show">
        Show modal!!!
      </button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  methods: {
    show() {
      this.$modal.show('hello-world')
    },
    hide() {
      this.$modal.hide('hello-world')
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
.v--modal-overlay[data-modal='hello-world'] {
  backdrop-filter: blur(10px);
}
.v--modal {
  background-color: rgba(0, 0, 0, 0.5);
  box-shadow: none;
}
.modal-header {
  position: relative;
  height: 2em;
}
.modal-header-icon {
  position: absolute;
  top: 0.15em;
  right: 1.2em;
  width: 1em;
  height: 1em;
}
#feedback {
  width: 100%;
  height: 75vh;
}
</style>
