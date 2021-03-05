const profilePage = () => {
  document.querySelector('#profile').innerHTML = `
  <!-- CONTAINER 1 -->
  <div class="container-fluid mt-2 mx-auto mb-2" id="container1-profile-info">
    <center><div id="profile-icon-container"></div><a href=""><img src="../../styles/images/profile.png" id="profile-icon-image"></a></div></center>
    <center><h3>Dani Crosby</h3></center>
    <center><p id="user-name">@dani.crosby1111</p></center>
    <center><div id="follow-count"><span>0 following .</span><span> 0 followers</span></center></div>
  </div>
  
  
    <!-- CONTAINER 2 -->
  <div class="container-fluid d-flex" id="container2-icons">
    <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/cosmo-multimedia/40/478017-pencil-512.png" style="width: 1em;"></a></div>
      <div class="mr-auto p-2"><a href=""><img src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/upload_arrow_send_uploading_interface-512.png" style="width: 1em;"></a></div>
      <div class="p-2"><a href=""><img src="https://cdn3.iconfinder.com/data/icons/basic-actions-set/24/39_-_Action_parameters_params_preferences_setting_settings_filter_icon-512.png" style="width: 1em;"></a></div>
      <div class="p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1em;"></a></div>
    </div>
  </div>
  
  
    <!-- CONTAINER 3 -->
  <div class="container-fluid d-flex justify-content-start mt-2" id="container3-cards-boards">
  
    <div class="card mr-2" style="width: 18em; height: 12em">
      <div class="card-body">
      </div>
      <div class="card-footer bg-transparent">All Pins</div>
    </div>
  
    <div class="card mr-2" style="width: 18em; height: 12em">
      <div class="card-body">
      </div>
      <div class="card-footer bg-transparent">Personal Board</div>
    </div>
  
    <div class="card mr-2" style="width: 18em; height: 12em">
      <div class="card-body">
      </div>
      <div class="card-footer bg-transparent">Public Board</div>
    </div>
  
    <!-- THIS IS A CARD TO PIN -->
  
    <div class="card" style="width: 18rem;">
      <div class="card-body mx-auto">
        <div class="btn-group">
          <button class="btn btn-light btn-sm" type="button">Personal</button>
          <button type="button" class="btn btn-sm btn-light dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span class="sr-only"></span></button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item btn-light" type="button" style="font-size: 12px">Personal</button>
            <button class="dropdown-item btn-light" type="button"style="font-size: 12px">Public</button>
          </div>
        </div>
        <button type="button" class="btn btn-danger btn-sm">Save</button>
      </div>
      <div class="d-flex flex-row-reverse">
        <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/internet-messenger/480/full-dots-download-process-wait-512.png" style="width: 1em;"></a></div>
        <div class="p-2"><a href=""><img src="https://cdn1.iconfinder.com/data/icons/essentials-pack/96/upload_arrow_send_uploading_interface-512.png" style="width: 1em;"></a></div>
      </div>
      </div>
    </div>
  
  </div>
  
  
  <div class="container-fluid" id="container4-create-ask">
    <div class="d-flex align-items-end flex-column" style="height: 200px;">
      <div class="mt-auto p-2"><a href=""><img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/add-512.png" style="width: 1.5em;"></a></div>
      <div class="p-2"><a href=""><img src="https://cdn2.iconfinder.com/data/icons/office-general-1/64/faq-512.png" style="width: 1.5em;"></a></div>
      
    </div>
  </div>`;
};

export default profilePage;
