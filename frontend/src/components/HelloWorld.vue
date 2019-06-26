<template>
  <div class="hello">
    <h1>{{ msg }} Hello {{ name }}!!</h1>
    <h2>{{ apiMsg }}</h2>
    <h3>API Links</h3>
    <button @click="signOut">Sign out</button>
    <button @click="apiPublic">Public API</button>
    <button @click="apiPrivate">Private API</button>
    <button @click="test">Test env</button>
    <button @click="toMarkdown">To Markdown</button>
    <!-- markdown area -->
    <div style="display: flex;text-align: left;justify-content: space-around;">
      <div style="width: calc(50vw - 2em);">
        <textarea id="editor" placeholder="please input markdown text."></textarea>
      </div>
      <div id="preview" style="width: calc(50vw - 2em);"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import firebase from 'firebase'
import MarkdownIt from 'markdown-it'
import CodeMirror from 'codemirror'
import toMark from 'to-mark'
import hljs from 'highlight.js'

require('codemirror/mode/markdown/markdown.js')
require('codemirror/addon/selection/active-line.js')
// require('codemirror/addon/search/match-highlighter.js"')
require('codemirror/lib/codemirror.css')

require('font-awesome/css/font-awesome.css')
require('froala-editor/css/froala_editor.pkgd.css')
require('froala-editor/css/froala_style.css')

require('froala-editor/css/themes/dark.min.css')

require('froala-editor/css/plugins/code_view.min.css')

require('froala-editor/css/third_party/font_awesome.min.css')

const $ = require('jquery/dist/jquery.js')
require('froala-editor/js/froala_editor.pkgd.min.js')
require('froala-editor/js/languages/ja.js')

require('froala-editor/js/plugins/fullscreen.min.js')
require('froala-editor/js/plugins/code_view.min.js')
require('froala-editor/js/plugins/code_beautifier.min.js')

require('froala-editor/js/third_party/font_awesome.min.js')

require('highlight.js/styles/xcode.css')

const DEMO_MARKDOWN_TEXT = `
---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

\`\`\`html
<p>Code Block Test.</p>
\`\`\`

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |


## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ "title text!")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)


## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg  "The Dojocat"


## Plugins

The killer feature of \`markdown-it\` is very effective support of
[syntax plugins](https://www.npmjs.org/browse/keyword/markdown-it-plugin).


### [Emojies](https://github.com/markdown-it/markdown-it-emoji)

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

see [how to change output](https://github.com/markdown-it/markdown-it-emoji#change-output) with twemoji.


### [Subscript](https://github.com/markdown-it/markdown-it-sub) / [Superscript](https://github.com/markdown-it/markdown-it-sup)

- 19^th^
- H~2~O


### [\\<ins>](https://github.com/markdown-it/markdown-it-ins)

++Inserted text++


### [\\<mark>](https://github.com/markdown-it/markdown-it-mark)

==Marked text==


### [Footnotes](https://github.com/markdown-it/markdown-it-footnote)

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### [Definition lists](https://github.com/markdown-it/markdown-it-deflist)

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::
`;

const editorType = {
  NONE: Symbol('NONE'),
  CODEMIRROR: Symbol('CODEMIRROR'),
  FROALA: Symbol('FROALA'),
};

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      apiMsg: 'API Message',
      name: firebase.auth().currentUser ? firebase.auth().currentUser.email : "",
      editor: null,
      $preview: null,
      activeEditor: editorType.NONE,
    }
  },
  mounted () {
    // init CodeMirror.
    this.editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      lineNumbers: true,
      mode: {
        name: "markdown",
        highlightFormatting: true
      },
      matchBrackets: true,
      styleActiveLine: true,
      // highlightSelectionMatches: {showToken: /\w/, annotateScrollbar: true},
      lineWrapping: true,
      viewportMargin: Infinity,
    });
    const vm = this;
    this.editor.on("change", function(/*cm*/) {
      if(vm.activeEditor === editorType.CODEMIRROR || vm.activeEditor === editorType.NONE) vm.toHtml();
    });
    this.editor.on("focus", function(/*cm*/) {
      vm.activeEditor = editorType.CODEMIRROR;
    });
    this.editor.on("blur", function(/*cm*/) {
      vm.activeEditor = editorType.NONE;
    });
    this.editor.setSize("100%","100%");
    
    // init FroalaEditor.
    this.$preview = $('#preview');
    this.$preview.froalaEditor({
      language: 'ja',
      toolbarInline: true,
      // charCounterCount: false,
      codeMirror: CodeMirror,
      codeMirrorOptions: {
        indentWithTabs: true,
        lineNumbers: true,
        lineWrapping: true,
        mode: 'text/html',
        tabMode: 'indent',
        tabSize: 2
      },
      theme: "dark",
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'fontFamily', 'fontSize', 'color', 'inlineClass', 'inlineStyle', 'paragraphStyle', 'lineHeight', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '-', 'emoticons', 'fontAwesome', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '-', 'print', 'getPDF', 'spellChecker', 'help', 'html', '-', 'undo', 'redo'],
      // ['fullscreen', 'fontAwesome', '-', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '-', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'indent', 'outdent', '-', 'insertImage', 'insertLink', 'insertFile', 'insertVideo', 'undo', 'redo'],
      toolbarVisibleWithoutSelection: true,
      pastePlain: true,
      // heightMin: 100,
      // heightMax: 200
    });
    this.$preview.on('froalaEditor.contentChanged', function (/*_e, _editor*/) {
      if(vm.activeEditor === editorType.FROALA || vm.activeEditor === editorType.NONE) vm.toMarkdown();
    });
    this.$preview.on('froalaEditor.focus', function (/*e, editor*/) {
      vm.activeEditor = editorType.FROALA;
    });
    this.$preview.on('froalaEditor.blur', function (/*e, editor*/) {
      vm.activeEditor = editorType.NONE;
    });

    // set init Markdown Text.
    this.editor.setValue(DEMO_MARKDOWN_TEXT.toString());
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        localStorage.removeItem('jwt')
        this.$router.push('/signin')
      })
    },
    apiPublic: async function () {
      let res = await axios.get('/v1/object/')
      this.apiMsg = res.data
    },
    apiPrivate: async function () {
      // alert(localStorage.getItem('jwt'));
      let res = await axios.get('/v1/user/', { headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}})
      this.apiMsg = res.data
    },
    test: function () {
      alert(process.env.VUE_APP_NAME) // test env
      alert(process.env.VUE_APP_FB_API_KEY)
    },
    toHtml: function() {
      const md = new MarkdownIt({
        html:         true,         // Enable HTML tags in source
        xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                    // This is only for full CommonMark compatibility.
        breaks:       true,         // Convert '\n' in paragraphs into <br>
        langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                    // useful for external highlighters.
        linkify:      true,         // Autoconvert URL-like text to links

        // Enable some language-neutral replacement + quotes beautification
        typographer:  true,

        // Double + single quotes replacement pairs, when typographer enabled,
        // and smartquotes on. Could be either a String or an Array.
        //
        // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
        // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
        quotes: '“”‘’',

        // Highlighter function. Should return escaped HTML,
        // or '' if the source string is not changed and should be escaped externaly.
        // If result starts with <pre... internal wrapper is skipped.
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            return '<pre><code data-language="'+lang+'" class="language-'+lang+'">' +
                    hljs.highlight(lang, str).value +
                    '</code></pre>';
          }
          return '<pre><code class="nohighlight">' + md.utils.escapeHtml(str) + '</code></pre>';
        }
      })
      this.$preview.froalaEditor('html.set', md.render(this.editor.getValue()))
    },
    toMarkdown: function() {
      const html = this.$preview.froalaEditor('html.get', true)
      const docmentsTemp = new DOMParser().parseFromString(html , "text/html");

      // eslint-disable-next-line
      // console.log(html)
      $("pre code[data-language]", docmentsTemp).each(function(index, element){
        // eslint-disable-next-line
        // console.log(index + ':' + $(element).text())
        //html = html.replace(/(<pre><code class="language-[a-z]+" data-language="[a-z]+">).+(<\/code><\/pre>)/, "$1"+$(element).text()+"$2")
        // eslint-disable-next-line
        console.log($(element).text().replace(/^\n/gm, ''))
        $(element).html($(element).text().replace(/^\n/gm, ''))
        // <pre><code class="language-html" data-language="html"></code></pre>
      })
      // eslint-disable-next-line
      // console.log(docmentsTemp.body.innerHTML)
      const md = toMark(docmentsTemp.body.innerHTML/*html*//*.replace(/<span class="hljs-[a-z]+">(.+)<\/span>/g, "$1")*/)
      this.editor.setValue(md)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983

button
  margin 10px 0
  padding 10px

</style>