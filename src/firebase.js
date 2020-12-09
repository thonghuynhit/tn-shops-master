import Firebase from 'firebase'

const app = Firebase.initializeApp({
    apiKey: "AIzaSyAHs8VJyrAmjxwa8vz3OBgnxOzSBLAcg2k",
    authDomain: "tnshop-reactjs.firebaseapp.com",
    databaseURL: "https://tnshop-reactjs.firebaseio.com",
    projectId: "tnshop-reactjs",
    storageBucket: "tnshop-reactjs.appspot.com",
    messagingSenderId: "911647480107",
    appId: "1:911647480107:web:c65a3f3386be8df5768d6e",
    measurementId: "G-MKMBH6RPBR"
})
const db = app.firestore()
const auth = Firebase.auth()
const storage = Firebase.storage()
export { db, auth, storage }