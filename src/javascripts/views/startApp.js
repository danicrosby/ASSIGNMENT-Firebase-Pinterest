// PINS = pins
// BOARDS = AUTHORS

import { showPins } from '../components/pins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
// import domEvents from '../events/domEvents';
import getPins from '../helpers/data/pinData';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  // domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  // navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  getPins().then((pins) => showPins(pins));
};

export default startApp;
