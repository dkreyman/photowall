import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA-3vvi56ONK_W9nQcjGp1haZFQKIV5eTs",
  authDomain: "photowall-db62d.firebaseapp.com",
  databaseURL: "https://photowall-db62d.firebaseio.com",
  projectId: "photowall-db62d",
  storageBucket: "photowall-db62d.appspot.com",
  messagingSenderId: "897240793336",
  appId: "1:897240793336:web:193431e86a99b1634d3b0d",
  measurementId: "G-3GXRCY53FV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebase.database();

export { database };
