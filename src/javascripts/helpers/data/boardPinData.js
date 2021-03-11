import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

// DELETE board AND ALL THEIR pinS
const deleteBoardPins = (boardId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((boardPinsArray) => {
    const deletePins = boardPinsArray.map((pin) => deletePin(pin.firebaseKey));
    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId)));
  }).catch((error) => reject(error));
});

const boardPinInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardpins = getBoardPins(boardId);
  Promise.all([board, boardpins]);

  Promise.all([getSingleBoard(boardId), getBoardPins(boardId)])
    .then(([obj, obj2]) => resolve(
      { board: obj, pins: obj2 }
    ))
    .catch((error) => reject(error));
});

export { deleteBoardPins, boardPinInfo };