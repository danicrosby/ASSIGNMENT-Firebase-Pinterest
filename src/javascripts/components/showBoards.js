// BOARDS = AUTHORS

const showBoards = (array) => {
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add A Boards</button>';

  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#overview').innerHTML += `
    <div class="card mr-3" style="width: 14em; border-radius: 1em">
    <img class="card-img-top" src=${item.board_image} alt=${item.board_title} style="width: 14em; border-radius: 1em">
    <div class="card-body">
    <div class="card-title" style="font-size: 14px">${item.board_title}</div>
    <hr>
    <button class="btn btn-sm btn-danger" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
    <button class="btn btn-sm btn-dark" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
    </div>
  </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#overview').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
