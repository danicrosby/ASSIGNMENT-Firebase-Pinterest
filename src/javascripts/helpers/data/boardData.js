import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => {
      if (response.data) {
        const boardArray = Object.values(response.data);
        resolve(boardArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// GET SINGLE BOARD
const getSingleBoard = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${boardId}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// CREATE BOARD
const createBoard = (boardObject) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/boards.json`, boardObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/boards/${response.data.name}.json`, body)
        .then(() => {
          getBoards().then((boardsArray) => resolve(boardsArray));
        });
    }).catch((error) => reject(error));
});

// UPDATE BOARDS
const updateBoard = (firebaseKey, boardsObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/boards/${firebaseKey}.json`, boardsObject)
    .then(() => getBoards()).then((boardsArray) => resolve(boardsArray))
    .catch((error) => reject(error));
});

export {
  getBoards, getSingleBoard, deleteBoard, createBoard, updateBoard
};
