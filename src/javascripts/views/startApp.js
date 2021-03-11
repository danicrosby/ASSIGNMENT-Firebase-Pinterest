// PINS = pins
// BOARDS = AUTHORS

import { showPins } from '../components/showPins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/showNav';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navEvents';
import { getPins } from '../helpers/data/pinData';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject.uid);
  navBar();
  navigationEvents(userObject.uid);
  getPins(userObject.uid).then((pins) => showPins(pins));
  logoutButton();
};

export default startApp;
