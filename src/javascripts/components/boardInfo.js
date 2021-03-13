const boardInfo = (boardObject) => {
  document.querySelector('#add-button').innerHTML += `
  <h1${boardObject.board_title}'s Pins</h1>`;
};

export default boardInfo;

// CLICK EVENT TO PUT BOARD INFO ON THE DOM TELLS WHICH BOARD TO GRAB TO DELETE
