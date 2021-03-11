// BOARDS = AUTHORS

const showBoards = (array) => {
  document.querySelector('#header').innerHTML = `
  <div class="container-fluid mt-2 mx-auto mb-2" id="boards-overview">
    <center><h4>Boards</h4></center>
  </div>`;

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-dark btn-sm mb-4" id="add-board-btn">Add A Board</button>';
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#overview').innerHTML += `
    <div class="card mr-3 border-white" style="width: 16em; height: 10em; border-radius: 1em;">
    <img class="card-img-top" src=${item.board_image} alt=${item.board_title} style="border-radius: 1em">
    <div class="card-body">
     <div class="container board-card-icons">
      <button class="btn btn-sm btn-secondary card-buttons" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}"><img src="https://cdn2.iconfinder.com/data/icons/cosmo-multimedia/40/478017-pencil-512.png" style="width: 1em;"></button>
      <button class="btn btn-sm btn-danger card-buttons" id="delete-board--${item.firebaseKey}">X</button>
     </div>
      <a href="#"><h4 id="board-name-title--${item.firebaseKey}" class="card-title"></h4></a>
      <div class="card-title" style="font-size: 1em; font-weight: bold; margin-top: -10px; margin-left: -1em">${item.board_title}</div>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#overview').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
