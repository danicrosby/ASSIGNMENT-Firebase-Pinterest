// PINS = pins //
// BOARDS = Authors//

import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins } from '../components/pins';
import signOut from '../helpers/signOut';
import { getBoards } from '../helpers/data/boardData';
import getPins from '../helpers/data/bookData';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
  // GET ALL PINS ON CLICK
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  document.querySelector('#boards').addEventListener('click', () => {
    getBoards(uid).then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
