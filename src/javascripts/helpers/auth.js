import firebase from 'firebase/app';
import 'firebase/auth';
import home from '../components/home';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import startApp from '../views/startApp';
import firebaseConfig from './apiKeys';

const checkLoginStatus = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      startApp(user); // person is logged in do something...
      logoutButton();
    } else {
      home();
      loginButton(); // person is NOT logged in
    }
  });
};

export default checkLoginStatus;
