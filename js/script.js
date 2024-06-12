'use strict'

document.querySelector('.button').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
  
});

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.backdrop').classList.toggle('is-open');
});
