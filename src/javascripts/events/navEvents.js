// PINS = pins //
// BOARDS = Authors//

import { emptyBoards, showBoards } from '../components/boards';
import { emptyPins, showPins } from '../components/pins';
import signOut from '../helpers/signOut';
import getBoards from '../helpers/data/boardData';
import getPins from '../helpers/data/bookData';

// navigation events
const navigationEvents = (uid) => {
  // LOGOUT BUTTON
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // ALL pins
  document.querySelector('#all-pins').addEventListener('click', () => {
  // GET ALL pins on click
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  document.querySelector('#boards').addEventListener('click', () => {
    getBoards(uid).then((authorArray) => {
      if (authorArray.length) {
        showBoards(authorArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
