// PINS = pinS //
// BOARDS = AUTHORS/
import { showPins } from '../components/showPins';
import { showBoards } from '../components/showBoards';
import { deletePin } from '../helpers/data/pinData';
import { deleteBoardPins } from '../helpers/data/pinBoardData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-book')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Confirm delete this pin?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A PIN,
    // CLICK EVENT FOR EDITING A PIN
    // ADD CLICK EVENT FOR DELETING A BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Confirm delete board? All pins will be deleted too!')) {
        const boardId = e.target.id.split('--')[1];
        console.warn(boardId);
        deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    // ADD CLICK EVENT FOR EDITING A BOARD
  });
};

export default domEvents;
