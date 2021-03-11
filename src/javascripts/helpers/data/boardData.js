// BOARDS = AUTHORS

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARDS
const getBoards = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const boardArray = Object.values(response.data);
        resolve(boardArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
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

// GET SINGLE BOARD
const getSingleBoard = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards(uid).then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards/${firebaseKey}.json`)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});

export {
  getBoards, createBoard, getSingleBoard, deleteBoard
};
