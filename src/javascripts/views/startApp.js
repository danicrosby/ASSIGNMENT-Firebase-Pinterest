// PINS = pins
// BOARDS = AUTHORS

import { showPins, emptyPins } from '../components/pins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navEvents';
import { getPins } from '../helpers/data/pinData';

const startApp = (userObject) => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navigationEvents();
  getPins(userObject.uid).then((pinsArray) => {
    if (pinsArray.length) {
      showPins(pinsArray);
    } else {
      emptyPins();
    }
  });
};

export default startApp;
