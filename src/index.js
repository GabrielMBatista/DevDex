import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCeOqPQUYJ8sm5TL4WqxX7l8dPivzhl5SU",
    authDomain: "devdex-epps.firebaseapp.com",
    databaseURL: "https://devdex-epps-default-rtdb.firebaseio.com",
    projectId: "devdex-epps",
    storageBucket: "devdex-epps.appspot.com",
    messagingSenderId: "625378452984",
    appId: "1:625378452984:web:ebc71cd63f899dd537620d",
    measurementId: "G-GLL679Y6E9"
  };

  firebase.initializeApp(firebaseConfig)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

