const boardInfo = (boardObject) => {
  document.querySelector('#add-icons').innerHTML += `<h1>
  ${boardObject.first_name} ${boardObject.last_name}'s Pins</h1>`;
};

export default boardInfo;

// CLICK EVENT TO PUT BOARD INFO ON THE DOM TELLS WHICH BOARD TO GRAB TO DELETE
