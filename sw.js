importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/014938beea3a510212f3.js",
    "revision": "b608f862b0dd7109e9e8a105139a8ee9"
  },
  {
    "url": "/_nuxt/39684e5c21a9f4ee8254.js",
    "revision": "cbce8adee18f036513d8861f7324d723"
  },
  {
    "url": "/_nuxt/6832088ec82224aa8284.js",
    "revision": "f2a67e7ee1d1f57443ec06f06348cf19"
  },
  {
    "url": "/_nuxt/7e12d00da2fb7935af7f.js",
    "revision": "c52a7bb91e5a2f66d59f88b2d7a8053c"
  },
  {
    "url": "/_nuxt/bfb0190781c73d1b34a8.js",
    "revision": "5b46aa2ea3505c8c138f4c02f5fc2be2"
  }
], {
  "cacheId": "mirai-notes2",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
