// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNDW9bQ4Bg3vOOm3oP8ywsrEERSUlsTLc",
    authDomain: "no-scroll-social-media.firebaseapp.com",
    projectId: "no-scroll-social-media",
    storageBucket: "no-scroll-social-media.appspot.com",
    messagingSenderId: "989141179747",
    appId: "1:989141179747:web:b5c0d6412eb0928beb8756",
    measurementId: "G-JD2FJ200MX"
  };
  
  // Initialize Firebase app
  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app(); // if already initialized, use that one
  }
  
  // Rest of your code...
  

