import selectBoard from './selectBoards';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter pin Title" value="${pinObject.title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.image}">
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="text" class="form-control" id="price" placeholder="pin Price" value="${pinObject.price}" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-check mb-2">
        <input type="checkbox" class="form-check-input" id="sale" ${pinObject.sale && 'checked'}>
        <label class="form-check-label" for="sale">On Sale?</label>
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-success">Update pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
