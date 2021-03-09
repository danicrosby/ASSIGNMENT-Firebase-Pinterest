// PINS = BOOKS

const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Pin</button>';

  document.querySelector('#store').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#store').innerHTML += `
      <div class="card mr-3">
        <img class="card-img-top" src=${item.pin_image} alt=${item.pin_title} style="width: 18em;">
        <div class="card-body">
        <h6 class="card-title">${item.pin_title}</h6>
        <hr>
        <button class="btn btn-danger" data-toggle="modal" data-target="#formModal" id="edit-book-btn--${item.firebaseKey}">Edit Book</button>
        <button class="btn btn-dark" id="delete-book--${item.firebaseKey}">Delete Pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-book-btn">Add A Book</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#store').innerHTML = '<h1 class="text-white">No Items</h1>';
};

export { showPins, emptyPins };
