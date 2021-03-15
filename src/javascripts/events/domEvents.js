/* eslint-disable no-alert */
import addPinForm from '../components/forms/addPinForm';
import { showPins } from '../components/pins';
import { createPin } from '../helpers/data/pinData';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
  // DELETE PIN
    if (e.target.id.includes('delete-pin')) {
      if (window.confirm('Are you sure you want to delete this pin?')) {
        console.warn('CLICKED DELETE PIN BUTTON', e.target.id);
      }
    }

    // SHOW ADD PIN FORM
    if (e.target.id.includes('add-pin-btn')) {
      addPinForm();
    }

    // SUBMIT PIN FORM
    if (e.target.id.includes('submit-pin')) {
      e.preventDefault();
      const pinObject = {
        title: document.querySelector('#title').value,
        image: document.querySelector('#image').value,
        description: document.querySelector('#description').value,
        board_id: document.querySelector('#board').value,
        uid
      };

      createPin(pinObject).then((pinsArray) => showPins(pinsArray));
    }

    // SHOW MODAL FOR ADD PIN
    if (e.target.id.includes('edit-pin-btn')) {
      console.warn('CLICKED SUBMIT PIN', e.target.id);
    }

    // SUBMIT UPDATE FOR PIN
    if (e.target.id.includes('update-pin-btn')) {
      console.warn('CLICKED SUBMIT PIN', e.target.id);
    }

    // DELETE BOARD
    if (e.target.id.includes('delete-board')) {
      if (window.confirm('Are you sure you want to delete this board?')) {
        console.warn('CLICKED DELETE BOARD BUTTON', e.target.id);
      }
    }

    // SHOW ADD BOARD FORM
    if (e.target.id.includes('add-pin-btn')) {
      console.warn('CLICKED ADD BOARD BUTTON', e.target.id);
    // addBoardForm();
    }

    // SUBMIT BOARD FORM
    if (e.target.id.includes('submit-board')) {
      console.warn('CLICKED SUBMIT BOARD', e.target.id);
    }

    // SHOW MODAL FOR ADD BOARD
    if (e.target.id.includes('edit-board-btn')) {
      console.warn('CLICKED EDIT BOARD BUTTON', e.target.id);
    }

    // SUBMIT UPDATE FOR BOARD
    if (e.target.id.includes('update-board-btn')) {
      console.warn('CLICKED UPDATE BOARD', e.target.id);
    }
  });
};

export default domEvents;
