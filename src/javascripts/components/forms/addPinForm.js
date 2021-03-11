import selectBoard from './selectBoard';

const addPinForm = () => {
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#add-icons').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <div class="card border-white" style="width: 20em; height: 30em; border-radius: 1em;">
    <form id="submit-pin-form" class="mb-4">
      <div class="form-group">

      <label for="title">Pin Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="pinTitle" required>
      </div>

      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" required>
      </div>

      <div class="form-group">
        <label for="description">Pin Description</label>
        <input type="url" class="form-control" id="description" required>
      </div>

      <div class="form-group" id="select-board"></div>
      
      <button type="submit" id="submit-pin" class="btn btn-dark">Submit Pin</button>
    </form>
  </div>
  `;

  selectBoard();
};

export default addPinForm;
