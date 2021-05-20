import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import firebase from "firebase";


var firebaseConfig = {
  apiKey: "AIzaSyD3DJZA8VLZrZwnLfAI8LeMTwKZ97z3jgo",
  authDomain: "vueproject-708cd.firebaseapp.com",
  databaseURL: "https://vueproject-708cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vueproject-708cd",
  storageBucket: "vueproject-708cd.appspot.com",
  messagingSenderId: "554813967741",
  appId: "1:554813967741:web:985ca10b679248e7531014",
  measurementId: "G-FBZ07BFNJ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount("#app");
