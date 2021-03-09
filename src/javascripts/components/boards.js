// BOARDS = AUTHORS

const showBoards = (array) => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-author-btn">Add A Boards</button>';

  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <a href="#"><h5 id="author-name-title--${item.firebaseKey}" class="card-title"></h5></a>
          <h6 class="card-subtitle mb-2 text-muted">${item.pin_title}</h6>
          <button class="btn btn-danger" id="delete-author--${item.firebaseKey}">Delete Author</button>
        </div>
      </div>`;
  });
};

const emptyBoards = () => {
  document.querySelector('#store').innerHTML = '<h1>No Boards</h1>';
};

export { showBoards, emptyBoards };
