 import firebase from 'firebase'

 const firebaseConfig = {
   apiKey: "xyz",
   authDomain: "xyz",
   projectId: "xyz",
   storageBucket: "xyz",
   messagingSenderId: "xyz",
   appId: "xyz"
 };

 const firebaseApp = firebase.default.initializeApp(firebaseConfig)
 export default firebaseApp;