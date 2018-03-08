import * as firebase from 'firebase'
import config from './config'

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default (context) => {
  const {
    store
  } = context

  store.dispatch('setPostsRef', dbPostsRef)
  store.dispatch('setCommentsRef', dbCommentsRef)
  sotre.dispatch('setUsersRef', dbUsersRef) // ref to user db
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged(user => {
      store.commit('setUser', user);
      resolve()
    })
  })
}

export const db = firebase.database();
export const dbPostsRef = db.ref('posts');
export const dbCommentsRef = db.ref('comments');
export const dbUsersRef = db.ref('users');
/* store.dispatch('setPostsRef', dbPostsRef) // will bind our store to firebase, calls setMenuRef action in the menu store */
