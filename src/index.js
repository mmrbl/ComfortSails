const toTopBtn = document.querySelector('.scroll-to-top');

toTopBtn.addEventListener('click', e => {
  window.scrollTo(0, 0);
});

(() => {
  const refs = {
    mainBtn: document.querySelector('.main__consultation-button'),
    aboutBtn: document.querySelector('.about__consultation-button'),
    portfBtn: document.querySelector('.portfolio__consultation-button'),
    constBtn: document.querySelector('.contacts__consultation-button'),
    // openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.mainBtn.addEventListener('click', toggleModal);
  refs.aboutBtn.addEventListener('click', toggleModal);
  refs.portfBtn.addEventListener('click', toggleModal);
  refs.constBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
