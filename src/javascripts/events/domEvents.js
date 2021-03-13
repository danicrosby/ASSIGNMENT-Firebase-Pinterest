// PINS = BOOKS //
// BOARDS = boardS/
import boardInfo from '../components/boardInfo';
import { showBoards } from '../components/boards';
import { showPins } from '../components/pins';
import formModal from '../components/forms/formModal';
import addBoardForm from '../components/forms/addBoard';
import { createBoard, deleteBoard, getSingleBoard } from '../helpers/data/boardData';
import addPinForm from '../components/forms/addPin';
import {
  createPin,
  getPins,
  deletePin,
  getSinglePin,
  updatePin
} from '../helpers/data/pinData';
import editPinForm from '../components/forms/editPin';

// CLICK EVENTS

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this pin?')) {
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
        board_id: document.querySelector('#board').value,
      };

      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }

    // EVENT FOR MODAL PIN
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
        board_id: document.querySelector('#select-board').value,
      };

      updatePin(firebaseKey, pinObject).then((pinsArray) => showPins(pinsArray));

      $('#formModal').modal('toggle');
    }

    // EVENT TO DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Are you sure you want to delete this board?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deleteBoard(firebaseKey).then((boardsArray) => showBoards(boardsArray));
      }
    }

    if (e.target.id.includes('view-boards')) {
      const firebaseKey = e.target.id.split('--')[1];
      getPins(firebaseKey).then((pins) => showPins(pins));
      getSingleBoard(firebaseKey).then((board) => boardInfo(board));
    }

    // EVENT TO SHOW FORM TO ADD BOARD
    if (e.target.id.includes('add-board-btn')) {
      addBoardForm();
    }

    // SUMBIT FORM FOR ADDING BOARD
    if (e.target.id.includes('submit-board')) {
      e.preventDefault();
      const boardObject = {
        board_title: document.querySelector('#title').value,
        board_image: document.querySelector('#image').value,
      };
      createBoard(boardObject).then((boardArray) => showBoards(boardArray));
    }

    // EVENT FOR MODAL BOARD
    // if (e.target.id.includes('edit-board-btn')) {
    //   console.warn('modal running');
    //   const firebaseKey = e.target.id.split('--')[1];
    //   formModal('Update Board');
    //   getSingleBoard(firebaseKey).then((boardObject) => editBoardForm(boardObject));
    // }

    // EVENT TO EDIT BOARD
    // if (e.target.id.includes('update-board')) {
    //   const firebaseKey = e.target.id.split('--')[1];
    //   e.preventDefault();
    //   const boardObject = {
    //     board_title: document.querySelector('#title').value,
    //     board_image: document.querySelector('#image').value,
    //   };

    //   updateBoard(firebaseKey, boardObject).then((boardsArray) => showBoards(boardsArray));

    //   $('#formModal').modal('toggle');
    // }
  });
};

export default domEvents;
