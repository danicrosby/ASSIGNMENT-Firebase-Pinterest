// BOARDS = AUTHORS

import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET BOARD
const getBoards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/boards.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// DELETE BOARD
const deleteBoard = () => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/boards.json `)
    .then(() => getBoards().then((boardsArray) => resolve(boardsArray)))
    .catch((error) => reject(error));
});
// CREATE BOARD
// UPDATE SEARCH
// SEARCH BOOKS

export { getBoards, deleteBoard };
