(() => {
    const refs = {
      openMenuBtn: document.querySelector('[data-menu-open]'),
      closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
    };
    refs.openMenuBtn.addEventListener('click', toggleModal);
    refs.closeMenuBtn.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();



    // data-menu-open - на кнопку открытия мобильного меню(бургер)
    // data-menu-close - на кнопку закрытия мобильного меню(крестик)
    // data-menu - на мобильное меню