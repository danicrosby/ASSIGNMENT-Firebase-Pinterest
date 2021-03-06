import boardsPage from '../components/boards';
import domBuilder from '../components/domBuilder';
import loginButton from '../components/loginButton';
import logoutButton from '../components/logoutButton';
import navBar from '../components/navBar';

const startApp = () => {
  domBuilder();
  navBar();
  loginButton();
  logoutButton();
  boardsPage();
};

export default startApp;
