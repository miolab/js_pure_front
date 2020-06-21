'use strict';

const boxQuantity = 3;

// Generate random number from 0 to boxQuantity num.
const testGameNum = Math.floor(Math.random() * boxQuantity);

for (let i = 0; i < boxQuantity; i++) {
  const divBox = document.createElement('div');

  document.body.appendChild(divBox);

  divBox.classList.add('box');
  divBox.innerHTML = "im " + String(i);

  divBox.addEventListener('click', () => {
    if (i == testGameNum) {
      divBox.innerHTML = "Hit!!";
      divBox.classList.toggle('hit');
    } else {
      divBox.innerHTML = "Miss.";
      divBox.classList.toggle('miss');
    }
  })
}