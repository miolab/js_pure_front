// import {
//   appAxios
// } from 'src/app';

// appAxios();

const tdElm = document.createElement('td');
const tBody = document.getElementById('tbody');

window.onload = () => {
  tBody.appendChild(tdElm);

  tdElm.classList.add('div-elm')
  tdElm.innerHTML = "test by im";
}
