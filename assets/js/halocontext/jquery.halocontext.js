/* eslint no-undef:0,space-before-function-paren:0,no-unused-vars:0,no-var:0 */
/*
 * HaloContext - jQuery plugin for right-click halo context menus
 *
 * Author: Josh Hundley
 * Parts inspired by Chris Domigan
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */

;(function($) {
  let active = false
  const ua = navigator.userAgent

  $.fn.haloContext = function(bindings) {
    $(this).bind(isMobile() ? 'click' : 'contextmenu', function(e) {
      if (active) hide()
      display(this, bindings, e)

      return false
    })
    return this
  }

  function display(trigger, binds, e) {
    active = true // context active

    const x = e.pageX - 24
    const y = e.pageY - 24
    const c = binds.bindings.length // bind count

    const r = (48 * (1 / Math.tan(Math.PI / c))) / 2 + 60 /* 18 */ // fun math! 半径っぽい
    const ang = 360 / c

    for (let i = 0; i < c; i++) {
      var binding = binds.bindings[i]

      const iconHtml = binding.iconClassNames
        ? '<i class="' + binding.iconClassNames + '"></i>'
        : ''
      const labelClassNames = binding.labelClassNames
        ? binding.labelClassNames
        : 'hct bg-primary text-light shadow text-center'

      $('body').append(
        '<div id="hb' +
          i +
          '" class="' +
          labelClassNames +
          '">' +
          iconHtml +
          binding.label +
          '</div>'
      ) // change bootstrap style

      const left = x + Math.cos((ang * i * Math.PI) / 180) * r
      const top = y + Math.sin((ang * i * Math.PI) / 180) * r
      const $temp = $('#hb' + i)

      $temp
        .click(function(_e) {
          return binding.onclick(_e, trigger, e)
        })
        .css('left', left)
        .css('top', top)
      $temp.css('display', 'block')
    }
    // all click hide.
    $('body').one('click', hide)
  }
  function hide() {
    $('div').remove('.hct')
    active = false
    return false
  }
  function isSmartPhone() {
    return (
      ua.indexOf('iPhone') > 0 ||
      (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
    )
  }
  function isTablet() {
    return ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0
  }
  function isOther() {
    return !isSmartPhone() && !isTablet()
  }
  function isMobile() {
    return isSmartPhone() || isTablet()
  }
})(jQuery)
