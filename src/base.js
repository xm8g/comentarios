import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBFdxqFx6q0kvyEyVFjFvTkn54xKGhlFow",
    authDomain: "reactjsalex.firebaseapp.com",
    databaseURL: "https://reactjsalex.firebaseio.com",
    projectId: "reactjsalex",
    storageBucket: "",
    messagingSenderId: "240706396300"
 })
 const db = firebase.database(firebaseApp)
 const base = Rebase.createClass(db)

 export const providers = {
     //'facebook' : new firebase.auth.FacebookAuthProvider()
     'google' : new firebase.auth.GoogleAuthProvider()
 }

 export const auth = firebaseApp.auth()
 export default base