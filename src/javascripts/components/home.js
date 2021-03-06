import domBuilder from './domBuilder';

const home = () => {
  domBuilder();
  document.querySelector('#navigation').innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-light bg-light" id="nav-container">

    <div><a href=""><img src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Pinterest-512.png" style="width: 1.8em; margin-left: 2em"></div></a>
    <div id="login-form-container" style="margin-left: 2em"></div>

  </nav>`;
};

export default home;
