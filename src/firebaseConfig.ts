import firebase from "firebase";
import "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDsOLr-m-KqERWx7A9ea80dgYewjL5cU0Q",
    authDomain: "oeste-financeira.firebaseapp.com",
    projectId: "oeste-financeira",
    storageBucket: "oeste-financeira.appspot.com",
    messagingSenderId: "105887972242",
    appId: "1:105887972242:web:9522554b9a4abd712bdf4b"
  };

firebase.initializeApp(firebaseConfig);
console.log()


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore()