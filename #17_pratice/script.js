'use strict';

//=======select what I need =======

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//=======function to close and open de modal=======

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// =======get the btn and open the modal=======

for (let i = 0; i < btnOpenModal.length; i++)
  btnOpenModal[i].addEventListener('click', open);

//=======to close de modal=======

overlay.addEventListener('click', close);
btnCloseModal.addEventListener('click', close);
