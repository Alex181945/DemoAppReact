import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBHhn09ZLhygf1RODDSQzTlMXO8b-WaDsg",
  authDomain: "pruebapai.firebaseapp.com",
  databaseURL: "https://pruebapai.firebaseio.com",
  projectId: "pruebapai",
  storageBucket: "pruebapai.appspot.com",
  messagingSenderId: "444285501393",
  appId: "1:444285501393:web:cdd7882e2db7cfd8d2eaf0"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
