// PINS = BOOKS

import 'firebase/auth';
import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// GET PINS
const getPins = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/pins.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE PIN
// CREATE PIN
// UPDATE SEARCH
// SEARCH BOOKS

export default getPins;
