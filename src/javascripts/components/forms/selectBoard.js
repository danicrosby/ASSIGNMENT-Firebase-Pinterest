import firebase from 'firebase/app';
import 'firebase/auth';
import { getBoards } from '../../helpers/data/boardData';

const selectBoard = (bookObject = {}) => {
  let domString = `<label for="board">Select an board</label>
    <select class="form-control" id="board" required>
    <option value="">Select an board</option>`;

  getBoards(firebase.auth().currentUser.uid).then((boardsArray) => {
    boardsArray.forEach((board) => {
      if (board.firebaseKey === bookObject.board_id) {
        domString += `<option selected value="${board.firebaseKey}">${board.board_title}</option>`;
      } else {
        domString += `<option value="${board.firebaseKey}">${board.first_name} ${board.last_name}</option>`;
      }
    });

    domString += '</select>';

    document.querySelector('#select-board').innerHTML = domString;
  });
};

export default selectBoard;
