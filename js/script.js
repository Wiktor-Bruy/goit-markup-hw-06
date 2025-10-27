'use strict';

//------------------------------------Посилвння-на-елементи-сторінки
const refs = {
  mobMenuBtn: document.querySelector('.mobil-menu-box'),
  mobMenu: document.querySelector('.mod-menu-overlay'),
  mobMenuCloseBtn: document.querySelector('.mob-but-clos'),
  mobLinkP: document.querySelector('.link-nav-mob-p'),
  mobLinkC: document.querySelector('.link-nav-mob-c'),
  modalOpenBtn: document.querySelector('.top-but'),
  modalWind: document.querySelector('.modal-overlay'),
  modalForm: document.querySelector('.modal-form'),
  modalCloseBtn: document.querySelector('.modal-close-btn'),
};
//------------------------------------------------------------------

//---------------------------------------------------Логіка-сторінки
//-----------------------------------------------------Мобільне-меню
refs.mobMenuBtn.addEventListener('click', toggleMenu);
refs.mobMenuCloseBtn.addEventListener('click', toggleMenu);
refs.mobLinkP.addEventListener('click', toggleMenu);
refs.mobLinkC.addEventListener('click', toggleMenu);
//----------------------------------------------------Модальне-вікно
refs.modalOpenBtn.addEventListener('click', toggleModal);
refs.modalCloseBtn.addEventListener('click', toggleModal);
refs.modalForm.addEventListener('submit', submit);
//------------------------------------------------------------------

//-----------------------------------------------------------Функції
//----------------------------------------Відкриття-та-закриття-меню
function toggleMenu() {
  refs.mobMenu.classList.toggle('is-open');
}
//----------------------------Відкриття-та-закриття-модального-вікна
function toggleModal() {
  refs.modalWind.classList.toggle('is-open');
}
//------------------------------------------------------Сабміт-форми
function submit(event) {
  event.preventDefault();
  const form = event.target;
  const mail = form.elements.us_mail.value.trim();
  const phone = form.elements.phone.value.trim();
  const name = form.elements.user_name.value.trim();
  const agre = form.elements.user_privacy.checked;
  const isDigitsOnly = /^\d+$/.test(phone);

  if (
    agre !== true ||
    mail === '' ||
    name === '' ||
    !isDigitsOnly ||
    phone === ''
  ) {
    window.alert(
      'Not all form fields are filled in correctly. Please double-check your information.'
    );
  } else {
    refs.modalForm.reset();
    toggleModal();
  }
}
//------------------------------------------------------------------
