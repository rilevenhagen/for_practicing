console.log('🤜🏻🤪🤛🏻');

const feature = document.querySelector('.feature');

const arrow = document.querySelector('.arrow');

const company = document.querySelector('.company');

const carrer = document.querySelector('.carrer');

const dropdownFeature = document.querySelector('.dropdown-hidden');

const dropdownFeature2 = document.querySelector('.dropdown-hidden2');

const hamburgerLines = document.querySelector('.hamburger-lines');

const menuAction = document.querySelector('.ul-box');

// function

const change = function () {
  hamburgerLines.classList.toggle('x-menu');
  menuAction.classList.toggle('x-menu');
};

const menuArray = [dropdownFeature, dropdownFeature2];

const clickOut = function (event) {
  company.classList.remove('moveDown2');
  carrer.classList.remove('moveDown');
  for (let i = 0; i < menuArray.length; i++) {
    let on = menuArray[i];
    if (event.target != on && event.target.parentNode != on) {
      menuArray[i].classList.add('hidden-nav');
    }
  }
};

const addHidden = function () {
  dropdownFeature2.classList.add('hidden-nav');
  dropdownFeature.classList.add('hidden-nav');
};

const click = function () {
  event.preventDefault();
  dropdownFeature.classList.toggle('hidden-nav');
  dropdownFeature2.classList.add('hidden-nav');
  company.classList.add('moveDown2');
};

const click2 = function () {
  event.preventDefault();
  dropdownFeature2.classList.toggle('hidden-nav');
  dropdownFeature.classList.add('hidden-nav');
  carrer.classList.add('moveDown');
};

const testArrow = function () {
  if (dropdownFeature.classList.contains('hidden-nav') === true) {
    return clickOut;
  } else console.lof('no');
};

arrow.addEventListener('click', testArrow);
feature.addEventListener('click', click);
company.addEventListener('click', click2);
window.addEventListener('mouseup', clickOut);
hamburgerLines.addEventListener('click', change);
