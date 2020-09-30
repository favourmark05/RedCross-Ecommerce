import firebase from 'firebase'
require('firebase/firestore')

var firebaseConfig = {
  apiKey: 'AIzaSyADdTmyXpRVreo52k7FCxc4PIkQ4L6Jl_s',
  authDomain: 'hureart-11073.firebaseapp.com',
  databaseURL: 'https://hureart-11073.firebaseio.com',
  projectId: 'hureart-11073',
  storageBucket: 'hureart-11073.appspot.com',
  messagingSenderId: '499523589924',
  appId: '1:499523589924:web:151a512d99622cfe2d45b1',
  measurementId: 'G-ZMJ08SQR89'
}
// Initialize Firebase

firebase.initializeApp(firebaseConfig)
firebase.analytics()
var db = firebase.firestore()
var st = firebase.storage()
export { db, st }
export default firebase.auth()
