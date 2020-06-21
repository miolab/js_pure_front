'use strict';

const box = document.getElementById("box")

box.addEventListener('click', () => {
  box.style.background = 'yellow';
  box.style.borderRadius = '50%';
});