import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
const firebaseConfig = {
    // apiKey: "AIzaSyCggZCcBun0cwNfOWGC2K8pZcgIRWMfqwY",
    // authDomain: "olx-sijeesh.firebaseapp.com",
    // projectId: "olx-sijeesh", 
    // storageBucket: "olx-sijeesh.appspot.com",
    // messagingSenderId: "767411886432",
    // appId: "1:767411886432:web:2ef6862afc88f2c423a605",
    // measurementId: "G-4ELNR9DJHL"
    apiKey: "AIzaSyCyD41EzKmdEVCkVnhDZW-fYa_QMAkWzNU",
    authDomain: "flora4u-7ee20.firebaseapp.com",
  
    projectId: "flora4u-7ee20",
    storageBucket: "flora4u-7ee20.appspot.com",
    messagingSenderId: "740006324843",
    appId: "1:740006324843:web:c522e3e06c87ed64fe5f2e",
    measurementId: "G-E4RGTY3CXF"
  };


  export const Firebase= firebase.initializeApp(firebaseConfig)//named export