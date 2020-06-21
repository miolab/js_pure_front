'use strict';

for (let i = 0; i < 3; i++) {
  const divBox = document.createElement('div');

  document.body.appendChild(divBox);

  divBox.classList.add('box');
  divBox.innerHTML = "im " + String(i);

  divBox.addEventListener('click', () => {
    divBox.classList.toggle('yellow-circle');
  })
}