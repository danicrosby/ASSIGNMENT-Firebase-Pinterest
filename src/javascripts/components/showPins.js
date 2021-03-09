// PINS = pinS

const showPins = (array) => {
  document.querySelector('#add-button').innerHTML = `
  <div class="container-fluid mt-2 mx-auto mb-2" id="pins-overview">
    <center><h4>All Pins</h4></center>
  </div>
  <div class="container-fluid d-flex mt-5 mb-3" id="mid-page-icons">
  <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/cosmo-multimedia/40/478017-pencil-512.png" style="width: 1em;" id="edit-button"></a></div>
    <div class="mr-auto p-2"><a href=""><img src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/upload_arrow_send_uploading_interface-512.png" style="width: 1em;" id="export-button"></a></div>
    <div class="p-2"><a href=""><img src="https://cdn3.iconfinder.com/data/icons/basic-actions-set/24/39_-_Action_parameters_params_preferences_setting_settings_filter_icon-512.png" style="width: 1em;" id="filter-button"></a></div>
    <div class="p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1em;" id="add-pin-button"></a></div>
  </div>
</div>
 
<div class="container-fluid d-flex justify-content-start mt-2" id="overview"></div>

<div class="container-fluid" id="bottom-page-icons">
<div class="d-flex align-items-end flex-column" style="height: 200px;">
  <div class="mt-auto p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1.5em;"></a></div>
  <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/office-general-1/64/faq-512.png" style="width: 1.5em;"></a></div> 
</div>
</div>`;

  document.querySelector('#overview').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#overview').innerHTML += `
      <div class="card mr-3 border-white" style="width: 14em; border-radius: 1em;">
        <img class="card-img-top" src=${item.pin_image} alt=${item.pin_title} style="width: 14em; border-radius: 1em">
        <div class="card-body">
        <div class="card-title" style="font-size: 14px; margin-top: -10px; margin-left: -1em">${item.pin_title}</div>
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
