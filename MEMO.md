# Memo

## Firestore

```js
  getEditAAABBBInfo(context, payload) {
    const _this = this
    // if (process.browser) {
    return new Promise((resolve, reject) => {
      _this.$axios
        .get('/api/AAA/index', {
          // id: params.id,
          params: {
            categoryId: payload.AAA.categoryId,
            id: payload.AAA.id,
            fbUid: payload.AAA.fbUid,
            token: payload.token
          }
        })
        .then((response) => {
          // console.log('setEditAAABBBInfo', response.data)
          context.state.edit_AAA = payload
          context.commit('setEditAAABBBInfo', response.data)
          resolve(response.data)
        })
        .catch((error) => {
          console.log('/api/AAA/index error:', error)
        })
    })
  },

export const db = admin.firestore()
db.settings({
  timestampsInSnapshots: true
})
export const { increment } = admin.firestore.FieldValue
export const serverTimestamp = admin.firestore.FieldValue.serverTimestamp()

db.collection('version')
  .doc('1')
  .collection('public_AAA')
  .doc(id)
  .set({ views: increment(1) }, { merge: true })
  .then(docRef => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(docRef))
  })
  .catch(err => {
    console.log('err:', err)
  })

const AAAData = {
  fbUid: json.fbUid,
  updatedAt: serverTimestamp
}
AAAColRef.add(AAAData, { merge: true })

db.collection('version')
  .doc('1')
  .collection('AAA_type')
  .listDocuments()
  .then(documentRefs => {
    return db.getAll(...documentRefs)
  })
  .then(documentSnapshots => {
    const results = documentSnapshots.map(documentSnapshot => {
      const result = documentSnapshot.data()
      result.id = documentSnapshot.id
      return result
    })
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(results))
  })
  .catch(err => {
    console.log('/api/AAA/type/index:', err)
  })

const publicAAARef = db
    .collection('version')
    .doc('1')
    .collection('public_AAA')
query = publicAAARef
if (AAATypeId && AAATypeId !== '_')
  query = query.where('AAATypeId', '==', AAATypeId)
if (regulationId && regulationId !== '_')
  query = query.where('BBBId', '==', regulationId)
query = query
  .where('CCC', '==', legendInt)
  .where('DDDId', '==', categoryIdInt)
  .orderBy('views', 'desc')
  .orderBy('updatedAt', 'desc')
  .startAt(lastViewsInt, lastUpdateDate)
  .limit(limitInt)
query
    .get()
    .then((querySnapshot) => {
      if (querySnapshot.docs) {
      const results = querySnapshot.docs.map(queryDocumentSnapshot => {
          const result = queryDocumentSnapshot.data()
          return result
        })
      res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(results))
      }
    })
  .catch(err => {
      console.log('/api/AAA/list/index:', err)
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify([]))
    })
```

## Firebase functions

```sh
nodebrew use v10 # 1. node10を使う
sudo npm i -g firebase-tools # 1. (初回のみ) firebase-toolsのインストール
firebase login # 1. (初回のみ) firebaseへログイン
firebase use --add #  # 1. (初回のみ) mirainotes2のaliasを追加
yarn build # 2. nuxtをビルド
cd ./functions # 3. functionsフォルダへ移動
yarn serve # 4. 動作確認
yarn deploy # 5. デプロイ
# firebase.jsonのpredeployのlintを無効化した
firebase functions:delete nuxtApp # 9. 削除
```

Firebase公式動画を参考にFirebaseとNuxt.jsを使ってSSRをServerlessで実現する
https://qiita.com/wataruoguchi/items/fa9b59e21c4212293c04#はじめに

タイムアウトとメモリ割り当てを設定する
https://firebase.google.com/docs/functions/manage-functions?hl=ja#set_timeout_and_memory_allocation

Firebase Functionでregionを'asia-northeast1'などに指定すると、Hostingのrewritesがうまくいかない件
https://qiita.com/qoAop/items/249c1f60b4ec2dd286b9

https://github.com/firebase/firebase-tools/issues/842#issuecomment-408948181
