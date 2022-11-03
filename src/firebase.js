
import { initializeApp } from "firebase/app";
import {
  getStorage,
} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAlpxlaEeLy3SGqIRaSzIK_Mt1riZmun4g",
    authDomain: "houseplantdirect.firebaseapp.com",
    databaseURL: "https://houseplantdirect-default-rtdb.firebaseio.com",
    projectId: "houseplantdirect",
    storageBucket: "houseplantdirect.appspot.com",
    messagingSenderId: "37025394864",
    appId: "1:37025394864:web:0975e68ce6e493ab8ecb75",
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Cloud Storage and get a reference to the service
  export const storage = getStorage(app);
