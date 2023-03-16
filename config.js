import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCkmKR_bI-a9YwQ_RlfCuHRac3N29IPCAM",
  authDomain: "ktc-app-9cbba.firebaseapp.com",
  projectId: "ktc-app-9cbba",
  storageBucket: "ktc-app-9cbba.appspot.com",
  messagingSenderId: "249877739892",
  appId: "1:249877739892:web:aecf84596794e2c2669421"
};

if(!firebase.apps.length)
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
