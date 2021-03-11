// PINS = BOOKS //
// BOARDS = AUTHORS/
import boardInfo from '../components/boardInfo';
import { showBoards } from '../components/boards';
import { showPins } from '../components/pins';
import { createBoard } from '../helpers/data/boardData';
import addBoardForm from '../components/forms/addBoardForm';
import addPinForm from '../components/forms/addPinForm';
import editPinForm from '../components/forms/editPinForm';
import formModal from '../components/forms/formModal';
import { boardPinInfo, deleteBoardPins } from '../helpers/data/boardPinData';
import {
  createPin,
  deletePin,
  getSinglePin,
  updatePin
} from '../helpers/data/pinData';

// CLICK EVENTS

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are You Sure?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // EVENT TO SHOW FORM TO ADD PIN
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // EVENT TO SUBMIT FORM TO ADD PIN
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        pin_image: document.querySelector('#image').value,
        pin_description: document.querySelector('#description').value,
      };

      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }

    // EVENT FOR MODAL TO ADD SINGLE PIN
    if (e.target.id.includes('edit-pin-btn')) {
      const firebaseKey = e.target.id.split('--')[1];
      formModal('Update Pin');
      getSinglePin(firebaseKey).then((pinObject) => editPinForm(pinObject));
    }

    // EVENT TO EDIT PIN
    if (e.target.id.includes('update-pin')) {
      const firebaseKey = e.target.id.split('--')[1];
      e.preventDefault();
      const pinObject = {
        pin_title: document.querySelector('#title').value,
        pin_image: document.querySelector('#image').value,
        pin_description: document.querySelector('#description').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // EVENT TO DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are You Sure?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // EVENT TO DELETE BOARD
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        boardInfo(boardInfoObject.board);
        showPins(boardInfoObject.pins);
      });
    }

    // EVENT TO DELETE BOARD
    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardPinInfo(boardInfoObject.board);
      });
    }

    // SUBMIT EVENT TO ADD BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUMBIT FORM FOR ADDING BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
        board_description: document.querySelector('#description').value,
      };
      createBoard(boardObject).then((boardArray) => showBoards(boardArray));
    }
  });
};

export default domEvents;
