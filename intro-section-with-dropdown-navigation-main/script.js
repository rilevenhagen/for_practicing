console.log('🤜🏻🤪🤛🏻');

const feature = document.querySelector('.feature', 'arrow');

const company = document.querySelector('.company', 'arrow');

const dropdownFeature = document.querySelector('.dropdown-hidden');

const dropdownFeature2 = document.querySelector('.dropdown-hidden2');

// function
const menuArray = [dropdownFeature, dropdownFeature2];
const clickOut = function (event) {
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
};

const click2 = function () {
  event.preventDefault();
  dropdownFeature2.classList.toggle('hidden-nav');
  dropdownFeature.classList.add('hidden-nav');
};

feature.addEventListener('click', click);
company.addEventListener('click', click2);
window.addEventListener('mouseup', clickOut);
