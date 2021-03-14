import { showPins, emptyPins } from '../components/pins';
import { showBoards, emptyBoards } from '../components/boards';
import signOut from '../helpers/auth/signOut';
import getPins from '../helpers/data/pinData';
import getBoards from '../helpers/data/boardData';

const navEvents = () => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // GET ALL PINS
  document.querySelector('#all-books').addEventListener('click', () => {
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // GET BOARDS
  document.querySelector('#authors').addEventListener('click', () => {
    getBoards().then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });

  // END NAV SECTION
};
export default navEvents;
