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
  background #495159 !important
  color #f8f9fa !important
.tui-editor-defaultUI-toolbar
  background #929CA4 !important
.tui-editor-defaultUI-toolbar button
  background-color #929CA4 !important
  border 0 solid #000 !important
.te-toolbar-section
  border-bottom 1px solid #929CA4 !important
.tui-toolbar-icons
  // filter brightness(1.5) invert(0) contrast(100) grayscale(1)
.tui-editor-defaultUI
  border 0 solid #000 !important
.tui-editor-defaultUI .te-mode-switch-section
  background-color #929CA4 !important
  border-top 0 solid #000 !important
.tui-editor-defaultUI .te-switch-button.active
  background-color #495159 !important
  color #f8f9fa !important
.tui-editor-defaultUI .te-switch-button
  background-color #76828D !important
  color #D8DDE3 !important
  border-left 0 solid #000 !important
  border-right 0 solid #000 !important
/*body
  background-color #495159 !important*/
</style>
