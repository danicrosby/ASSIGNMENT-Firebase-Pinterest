// PINS = pins
// BOARDS = AUTHORS

import { showPins } from '../components/showPins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/showNav';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navEvents';
import { getPins } from '../helpers/data/pinData';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  navigationEvents();
  getPins().then((pins) => showPins(pins));
  logoutButton();
};

export default startApp;
