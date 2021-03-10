// PINS = BOOKS

const showPins = (array) => {
  document.querySelector('#title').innerHTML = `
    <div class="container-fluid mt-2 mx-auto mb-2" id="boards-overview">
      <center><h4>Pins</h4></center>
    </div>`;

  document.querySelector('#add-button').innerHTML = '<button class="btn btn-dark btn-sm mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#overview').innerHTML += `
      <div class="card mr-3 border-white" style="width: 14em; border-radius: 1em;">
        <img class="card-img-top" src=${item.image} alt=${item.title} style="width: 14em; border-radius: 1em">
        <div class="card-body">
        <div class="card-title" style="font-size: 14px; margin-top: -10px; margin-left: -1em">${item.title}</div>
        <hr>
        <button class="btn btn-sm btn-danger card-buttons" data-toggle="modal" data-target="#formModal" id="edit-pin-btn--${item.firebaseKey}">Edit Pin</button>
        <button class="btn btn-sm btn-dark card-buttons" id="delete-pin--${item.firebaseKey}">Delete Pin</button>
        </div>
      </div>`;
  });
};

const emptyPins = () => {
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-pin-btn">Add A Pin</button>';
  document.querySelector('#form-container').innerHTML = '';
  document.querySelector('#overview').innerHTML = '<h1 class="text-white">No Items</h1>';
};

export { showPins, emptyPins };
