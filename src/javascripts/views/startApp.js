import domBuilder from '../components/domBuilder';
import logoutButton from '../components/buttons/logoutButton';
import navBar from '../components/navBar';
import loginButton from '../components/buttons/loginButton';
import getPins from '../helpers/data/pinData';
import showBoards from '../components/boards';

const startApp = (user) => {
  domBuilder(user);
  // domEvents();
  navBar();
  loginButton();
  logoutButton();
  showBoards();
  getPins();
};

export default startApp;
