/* eslint-disable vue/max-attributes-per-line */
<template>
  <div></div>
</template>

<script>
export default {
  props: {},
  data: () => {
    return { editor: null }
  },
  mounted() {
    const _this = this
    this.$nextTick(() => {
      console.log('Tick!!!')
    })
    if (process.browser) {
      window.onNuxtReady((app) => {
        console.log('Nuxt ready!', _this)
        const Editor = require('tui-editor/dist/tui-editor-Editor-all.js')
        const editor = new Editor({
          el: _this.$el, // document.querySelector('#edit-section'),
          // viewer: true,
          initialEditType: 'markdown',
          useCommandShortcut: true,
          previewStyle: 'vertical',
          height: '100%',
          initialValue: '',
          language: 'ja',
          toolbarItems: [
            'heading',
            'bold',
            'italic',
            'strike',
            'divider',
            'hr',
            'quote',
            'divider',
            'ul',
            'ol',
            'task',
            'indent',
            'outdent',
            'divider',
            'table',
            // 'image',
            'link',
            'divider',
            'code',
            'codeblock'
          ],
          exts: ['scrollSync', 'colorSyntax', 'uml', 'chart', 'mark', 'table']
        })
        _this.editor = editor
      })
    }
  },
  methods: {}
}
</script>

<style lang="stylus">
.CodeMirror
  background #343a40 !important
.tui-editor-defaultUI-toolbar
  background #343a40 !important
.tui-editor-defaultUI-toolbar button
  background-color #343a40 !important
  border 0 solid #000 !important
.tui-toolbar-icons
  filter brightness(1.825) invert(0) contrast(3) grayscale(1)
.tui-editor-defaultUI .te-mode-switch-section
  background-color #343a40 !important
.tui-editor-defaultUI .te-switch-button.active
  background-color #343a40 !important
  color white !important
.tui-editor-defaultUI .te-switch-button
  background-color #343a40 !important
  color gray !important
/*body
  background-color #343a40 !important*/
</style>
