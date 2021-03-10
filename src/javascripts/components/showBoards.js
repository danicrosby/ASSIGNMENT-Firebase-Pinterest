// BOARDS = AUTHORS

const showBoards = (array) => {
  document.querySelector('#title').innerHTML = `
  <div class="container-fluid mt-2 mx-auto mb-2" id="boards-overview">
    <center><h4>Boards</h4></center>
  </div>`;

  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#overview').innerHTML += `
    <div class="card mr-3 border-white" style="width: 16em; height: 10em; border-radius: 1em;">
    <img class="card-img-top" src=${item.image} alt=${item.board_name} style="border-radius: 1em">
    <div class="card-body">
    <div class="card-title" style="font-size: 14px; font-weight: bold; margin-top: -10px; margin-left: -1em">${item.board_name}</div>
    <div class="card-title" style="font-size: 14px; margin-top: -10px; margin-left: -1em">${item.board_description}</div>
    <hr>
    <button class="btn btn-sm btn-danger card-buttons" data-toggle="modal" data-target="#formModal" id="edit-board-btn--${item.firebaseKey}">Edit Board</button>
    <button class="btn btn-sm btn-dark card-buttons" id="delete-board--${item.firebaseKey}">Delete Board</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#overview').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
