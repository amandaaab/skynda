import * as firebase from 'firebase';

import 'firebase/firestore';

// Intialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBHdEu5KIZzY98_aW0s-Stln-KoC3HUF2E",
  authDomain: "wordgame-app.firebaseapp.com",
  databaseURL: "https://wordgame-app.firebaseio.com",
  projectId: "wordgame-app",
  storageBucket: "wordgame-app.appspot.com",
  messagingSenderId: "908666592559"
};
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

db.settings({
    timestampsInSnapshots: true
  });

export default db 