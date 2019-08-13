const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const express = require('express')
const { Nuxt } = require('nuxt')

const app = express()

const config = {
  dev: false,
  buildDir: 'nuxt' // ,
  // build: {
  //   publicPath: '/'
  // }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  // res.set('Cache-Control', 'public, max-age=600, s-maxage=1200')
  nuxt
    .renderRoute('/')
    .then((result) => {
      res.send(result.html)
    })
    .catch((e) => {
      res.send(e)
    })
}
app.get('*', handleRequest)
// リージョン指定は、Hostingが非対応のため、不可 exports.nuxtApp = functions.region('asia-northeast1').https.onRequest(app)
exports.nuxtApp = functions.https.onRequest(app)
