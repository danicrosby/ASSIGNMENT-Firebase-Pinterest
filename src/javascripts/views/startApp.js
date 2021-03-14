import { showPins } from '../components/pins';
import { showBoards } from '../components/boards';
import logoutButton from '../components/buttons/logoutButton';
import domBuilder from './domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navEvents from '../events/navEvents';
import getPins from '../helpers/data/pinData';
import getBoards from '../helpers/data/boardData';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  logoutButton();
  navEvents();
  getPins().then((pins) => showPins(pins));
  getBoards().then((boards) => showBoards(boards));
};

export default startApp;
