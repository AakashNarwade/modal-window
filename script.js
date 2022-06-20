'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// let hidden = document.querySelector('.hidden');
// let overlayHidden = document.querySelector('.overlay-hidden');
// console.log(hidden)

// console.log(btnsOpenModal);

const closeModal = function () {
//   console.log(close);
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++) {
//   console.log(btnsOpenModal[i].textContent);
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(event) {
// console.log(event)
// if (event.key === 'Escape') {
//     if(!modal.classList.contains('hidden')){
//     closeModal();
//     }
// }


// (event.key === 'Escape' && !modal.classList.contains('hidden') && closeModal())

if(event.key === 'Escape' && !modal.classList.contains('hidden') ){
    closeModal();
}
})
