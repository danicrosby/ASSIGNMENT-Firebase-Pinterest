import logoutButton from '../components/buttons/logoutButton';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject);
  navBar();
  logoutButton();
};

export default startApp;
