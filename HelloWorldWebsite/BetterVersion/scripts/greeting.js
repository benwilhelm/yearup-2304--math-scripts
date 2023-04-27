'use strict';

function showGreeting() {
  let messageDiv = document.getElementById('messageDiv');
  messageDiv.innerHTML = 'Hello World!';
}

function init() {
  const buttonEl = document.getElementById('greetButton');
  buttonEl.onclick = showGreeting;
}

window.onload = init;
