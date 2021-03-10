import selectBoard from './selectBoards';

const addBoardForm = () => {
  document.querySelector('#store').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <form id="submit-board-form" class="mb-4">
      <div class="form-group">
        <label for="title">board Name</label>
        <input type="text" class="form-control" id="title" aria-describedby="bookTitle" placeholder="Enter Board Name" required>
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="image" placeholder="Image URL" required>
      </div>
      <div class="form-group">
        <label for="genre">Price</label>
        <input type="text" class="form-control" id="price" placeholder="Genre" required>
      </div>
      <div class="form-group" id="select-board">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="fav-board">
        <label class="form-check-label" for="sale">Add to favorites</label>
      </div>
      <button type="submit" id="submit-Board" class="btn btn-primary">Submit Board</button>
    </form>`;

  selectBoard();
};

export default addBoardForm;
