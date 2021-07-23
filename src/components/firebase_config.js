import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvP-HCmFMm-VWMq5qGQ1GJ10863vLjYKs",
  authDomain: "contact-app-5fe34.firebaseapp.com",
  projectId: "contact-app-5fe34",
  storageBucket: "contact-app-5fe34.appspot.com",
  messagingSenderId: "352825505218",
  appId: "1:352825505218:web:62fd05275c02dc13b9d25b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
