import firebase from 'firebase/app';
import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';
// API CALLS FOR pins

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getPins = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

// DELETE PINS
const deletePin = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/pins/${firebaseKey}.json`)
    .then(() => getPins(uid).then((pinsArray) => resolve(pinsArray)))
    .catch((error) => reject(error));
});

const getAvailablePins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="sale"&equalTo=true`)
    .then((response) => {
      const availablePinsArray = Object.values(response.data);
      resolve(availablePinsArray);
    }).catch((error) => reject(error));
});

// CREATE PINS
const createPin = (pinObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/pins.json`, pinObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/pins/${response.data.name}.json`, body)
        .then(() => {
          getPins(uid).then((pinsArray) => resolve(pinsArray));
        });
    }).catch((error) => reject(error));
});

// GET SINGLE PINS
const getSinglePin = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// UPDATE PINS
const updatePin = (firebaseKey, pinObject) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/pins/${firebaseKey}.json`, pinObject)
    .then(() => getPins(firebase.auth().currentUser.uid)).then((pinsArray) => resolve(pinsArray))
    .catch((error) => reject(error));
});

// SEARCH PINS
// const searchPins = (searchValue) => new Promise((resolve, reject) => {
//   getpins().then((pinsArray) => {
//     const search = pinsArray.filter((pin) => pin.title.toLowerCase().includes(searchValue));
//     resolve(search);
//   }).catch((error) => reject(error));
// });

// GET ALL BOARDS PINS
const getBoardsPins = (authorId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json?orderBy="author_id"&equalTo="${authorId}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  deletePin, getAvailablePins, createPin, getSinglePin, getBoardsPins, updatePin
};
