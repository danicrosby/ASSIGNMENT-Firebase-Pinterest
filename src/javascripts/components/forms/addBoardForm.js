import selectBoard from './selectBoards';

const addBoardForm = () => {
  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#add-icons').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
  <div class="card border-white" style="width: 20em; height: 30em; border-radius: 1em;">
    <form id="submit-board-form" class="mb-4">

      <div class="form-group">
        <label for="title">Board Title</label>
        <input type="text" class="form-control" id="title" aria-describedby="boardTitle" required>
      </div>

      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" required>
      </div>

      <div class="form-group">
        <label for="description">Board Description</label>
        <input type="text" class="form-control" id="description" required>
      </div>

      </div>
      <div class="form-group" id="select-board">
      </div>

      <button type="submit" id="submit-board" class="btn btn-primary">Submit Board</button>
    </form>
  </div>`;

  selectBoard();
};

export default addBoardForm;
