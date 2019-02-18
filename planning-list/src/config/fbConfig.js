import firebase from " firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDzTH4KVk6z69KwtdkgZA7rbSq-1JRSS4Q",
  authDomain: "planning-list.firebaseapp.com",
  databaseURL: "https://planning-list.firebaseio.com",
  projectId: "planning-list",
  storageBucket: "",
  messagingSenderId: "474631716355"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
