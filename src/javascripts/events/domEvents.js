// PINS = BOOKS //
// BOARDS = AUTHORS/
import { showPins } from '../components/showPins';
import { deletePin } from '../helpers/data/pinData';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('delete-pin')) {
      // CLICK EVENT FOR DELETING A PIN
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey).then((pinsArray) => showPins(pinsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A PIN
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A PIN
    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A PIN,
    // CLICK EVENT FOR EDITING A PIN
    // ADD CLICK EVENT FOR DELETING A BOARD
    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING A BOARD
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING A BOARD
    // ADD CLICK EVENT FOR EDITING A BOARD
  });
};

export default domEvents;
