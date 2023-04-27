'use strict';

function init() {
  const greetBtnEl = document.getElementById('greetBtn');
  greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
  const nameFieldEl = document.getElementById('nameField');
  const userName = nameFieldEl.value;
  alert(`Hello, ${userName}!`);
}

window.onload = init;
