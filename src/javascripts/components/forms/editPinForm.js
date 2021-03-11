import selectBoard from './selectBoard';

const editPinForm = (pinObject) => {
  document.querySelector('#modal-body').innerHTML = `
    <form id="edit-pin-form" class="mb-4">
      <div class="form-group">
        <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" placeholder="Enter pin Title" value="${pinObject.pin_title}" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required value="${pinObject.pin_image}">
      </div>
      <button type="submit" id="update-pin--${pinObject.firebaseKey}" class="btn btn-success">Update Pin</button>
    </form>`;

  selectBoard(pinObject);
};

export default editPinForm;
