import firebase from 'firebase';
 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyCOJeY0gHUMl6LwuB3HVbHgOfK0IAUl7mk",
  authDomain: "youchef-1109e.firebaseapp.com",
  databaseURL: "https://youchef-1109e.firebaseio.com",
  projectId: "youchef-1109e",
  storageBucket: "youchef-1109e.appspot.com",
  messagingSenderId: "1090571470613"
};
const fire = firebase.initializeApp(config);
export default fire;