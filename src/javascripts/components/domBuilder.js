const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
    <div id="navigation"></div>
    <div id="add-button"></div>
    <div id="form-container"></div>
    <div id="store"></div>
  </div>`;
};

export default domBuilder;
