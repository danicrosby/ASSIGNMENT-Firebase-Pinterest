import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';
import profilePage from '../components/profilePage';

const startApp = () => {
  domBuilder();
  loginButton();
  navBar();
  profilePage();
  logoutButton();
};

export default startApp;
