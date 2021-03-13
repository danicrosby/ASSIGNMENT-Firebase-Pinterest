import { deleteBoard, getSingleBoard } from './boardData';
import { deletePin, getBoardPins } from './pinData';

const boardPinsInfo = (boardId) => new Promise((resolve, reject) => {
  const board = getSingleBoard(boardId);
  const boardPins = getBoardPins(boardId);
  Promise.all([board, boardPins])
    .then(([boardResponse, boardPinsResponse]) => resolve({ board: boardResponse, pins: boardPinsResponse }))
    .catch((error) => reject(error));
});

// DELETE BOARD & IT'S PINS
const deleteBoardPins = (boardId, userId) => new Promise((resolve, reject) => {
  getBoardPins(boardId).then((pinsArray) => {
    const deletePins = pinsArray.map((pin) => deletePin(pin.firebaseKey));

    Promise.all(deletePins).then(() => resolve(deleteBoard(boardId, userId)));
  }).catch((error) => reject(error));
});

export { deleteBoardPins, boardPinsInfo };
