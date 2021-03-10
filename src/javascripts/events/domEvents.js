// PINS = pinS //
// BOARDS = boardS/
import boardInfo from '../components/boardInfo';
import { showBoards } from '../components/showBoards';
import { showPins } from '../components/showPins';
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
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        board_id: document.querySelector('#board').value,
      };

      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }

    // EVENT FOR MODAL TO ADD PIN
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
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        price: document.querySelector('#price').value,
        sale: document.querySelector('#sale').checked,
        board_id: document.querySelector('#board').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // EVENT TO DELETE BOARD & PINS
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are You Sure?')) {
        const boardId = e.target.id.split('--')[1];
        deleteBoardPins(boardId).then((boardsArray) => showBoards(boardsArray));
      }
    }
    // EVENT TO DELETE BOARD
    if (e.target.includes('board-name-title')) {
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

    // SHOW FORM TO ADD BOARD
    if (e.target.id.includes('add-board-btn')) {
      addPinForm();
    }

    // SUBMIT EVENT TO ADD BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        first_name: document.querySelector('#board-first-name').value,
        last_name: document.querySelector('#board-last-name').value,
      };
      createPin(boardObject).then((boardArray) => showBoards(boardArray));
    }
  });
};

export default domEvents;
