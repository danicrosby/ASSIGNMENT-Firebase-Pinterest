// PINS = pins //
// BOARDS = Authors//

import showPins from '../components/pins';

const domEvents = (uid) => {
  document.querySelector('body').addEventListener('click', (e) => {
    // CLICK EVENT FOR DELETING A pin
    if (e.target.id.includes('delete-pin')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const firebaseKey = e.target.id.split('--')[1];
        deletePin(firebaseKey, uid).then((pinsArray) => showPins(pinsArray));
      }
    }

    // CLICK EVENT FOR SHOWING FORM FOR ADDING A pin
    // CLICK EVENT FOR SUBMITTING FORM FOR ADDING A pin
    // CLICK EVENT FOR SHOWING MODAL FORM FOR ADDING A pi,
    // CLICK EVENT FOR EDITING A PIN
    // ADD CLICK EVENT FOR DELETING AN board
    if (e.target.id.includes('delete-board')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        const boardId = e.target.id.split('--')[1];
        console.warn(boardId);
        deleteBoardPins(boardId, uid).then((boardsArray) => showBoards(boardsArray));
      }
    }

    if (e.target.id.includes('board-name-title')) {
      const boardId = e.target.id.split('--')[1];
      boardPinInfo(boardId).then((boardInfoObject) => {
        showPins(boardInfoObject.pins);
        boardInfo(boardInfoObject.board);
      });
    }

    // ADD CLICK EVENT FOR SHOWING FORM FOR ADDING AN board
    // ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN board
    // ADD CLICK EVENT FOR EDITING AN board
  });
};

export default domEvents;
