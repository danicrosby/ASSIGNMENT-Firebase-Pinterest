// PINS = pins
// BOARDS = AUTHORS

import { emptyPins, showPins } from '../components/pins';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navEvents';
import { getPins } from '../helpers/data/pinData';

const startApp = (userObject) => {
  domBuilder();
  domEvents(userObject);
  navBar();
  navigationEvents(userObject);
  getPins(userObject).then((pinsArray) => {
    if (pinsArray.length) {
      showPins(pinsArray);
    } else {
      emptyPins();
    }
  });
  logoutButton();
};

export default startApp;
