import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCGoEMlQltiCEgm9YM5Wa7DIrDDrLL5Nxo',
  authDomain: 'discord-26aa3.firebaseapp.com',
  projectId: 'discord-26aa3',
  storageBucket: 'discord-26aa3.appspot.com',
  messagingSenderId: '191320154552',
  appId: '1:191320154552:web:9cdb9a965488e6a8e52f4d',
  measurementId: 'G-6VJKFDP7PW',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
