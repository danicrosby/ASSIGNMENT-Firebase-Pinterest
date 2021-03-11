const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="main-container"></div>
    <div id="title"></div>
    <center><div id="add-button"></div></center>
    <div id="add-icons"></div>
    <div id="overview"></div>
    <center><div id="form-container"></div></center>
    <div id="modal-container"></div>`;

  document.querySelector('#add-icons').innerHTML = `
 
    <div class="container-fluid d-flex mt-5 mb-3" id="mid-page-icons">
    <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/cosmo-multimedia/40/478017-pencil-512.png" style="width: 1.5em;" id="edit-button"></a></div>
      <div class="mr-auto p-2"><a href=""><img src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/upload_arrow_send_uploading_interface-512.png" style="width: 1.5em;" id="export-button"></a></div>
      <div class="p-2"><a href=""><img src="https://cdn3.iconfinder.com/data/icons/basic-actions-set/24/39_-_Action_parameters_params_preferences_setting_settings_filter_icon-512.png" style="width: 1.5em;" id="filter-button"></a></div>
      <div class="p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1.5em;" id="add-pin-button"></a></div>
    </div>
  </div>
   
  <div class="container-fluid d-flex justify-content-start mt-2" id="overview"></div>
  
  <div class="container-fluid" id="bottom-page-icons">
  <div class="d-flex align-items-end flex-column" style="height: 200px;">
    <div class="mt-auto p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1.5em;"></a></div>
    <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/office-general-1/64/faq-512.png" style="width: 1.5em;"></a></div> 
  </div>
  </div>`;
};

export default domBuilder;
