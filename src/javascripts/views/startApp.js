import boardsPage from '../components/boards';
import domBuilder from '../components/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import loginButton from '../components/buttons/loginButton';
import getPins from '../helpers/data/pinData';

const startApp = (user) => {
  domBuilder(user);
  // domEvents();
  navBar();
  loginButton();
  logoutButton();
  boardsPage();
  getPins();
};

export default startApp;
