// PINS = pins //
// BOARDS = Authors//

import { emptyBoards, showBoards } from '../components/showBoards';
import { emptyPins, showPins } from '../components/showPins';
// import signOut from '../helpers/signOut';
import { getBoards } from '../helpers/data/boardData';
import { getPins } from '../helpers/data/pinData';

const navigationEvents = () => {
  // ALL PINS
  document.querySelector('#all-pins').addEventListener('click', () => {
    getPins().then((pinsArray) => {
      if (pinsArray.length) {
        showPins(pinsArray);
      } else {
        emptyPins();
      }
    });
  });

  // ALL BOARDS
  document.querySelector('#all-boards').addEventListener('click', () => {
    getBoards().then((boardArray) => {
      if (boardArray.length) {
        showBoards(boardArray);
      } else {
        emptyBoards();
      }
    });
  });
};

export default navigationEvents;
