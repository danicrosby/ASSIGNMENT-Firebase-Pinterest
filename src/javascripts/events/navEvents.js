// PINS = pins //
// BOARDS = Authors//

import { emptyBoards, showBoards } from '../components/showBoards';
import { emptyPins, showPins } from '../components/showPins';
// import signOut from '../helpers/signOut';
import { getBoards } from '../helpers/data/boardData';
import { getPins } from '../helpers/data/pinData';

const navigationEvents = (uid) => {
  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins(uid).then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
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
