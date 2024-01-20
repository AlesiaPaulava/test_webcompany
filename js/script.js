// burger
const addBurger = () => {
  let btnBurger = document.querySelector('.header__burger');

  // Смена состояния бургера
  btnBurger.addEventListener('click', function () {

    document.querySelector('.section').classList.toggle('is-pointer-none');
    document.querySelector('.toggle-menu').classList.toggle('visible');
    document.body.classList.toggle('is-menu-open');

  })
}
addBurger();

// choices
const propertiesSelect = () => {
  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: "",
    shouldSort: false,
    placeholder: true,
    placeholderValue: "null",
    position: 'bottom',
  });
}
propertiesSelect();

const brandSelect = () => {
  const element = document.querySelector('.select-brand');
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom',
  });
}
brandSelect();

const selectModal = () => {
  const element = document.querySelector('.select-modal');
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom',
  });
}
selectModal();

const selectBrandModal = () => {
  const element = document.querySelector('.select-brand-modal');
  const choices = new Choices(element, {
    searchEnabled: false,
    allowHTML: true,
    itemSelectText: "",
    shouldSort: false,
    position: 'bottom',
  });
}
selectBrandModal();

//изменение текста на ширине 1024 и меньше
const changeText = () => {
  const cardTabletText = document.querySelectorAll('.card-tablet');

  if (window.innerWidth <= 1024) {
    cardTabletText.forEach(function (cardText) {
      cardText.textContent = "Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей.";
    })
  }
}
changeText();

//изменение текста на ширине 576 
const changeTextMobil = () => {
  const cardTabletText = document.querySelector('.main-text');

  if (window.innerWidth <= 576) {
    cardTabletText.textContent = "Полнокадровая цифровая зеркальная камера, предназначенная для опытных любителей профессиональных фотографов и видеооператоров. Преемник успешной модели EOS 5D Mark II. Фотоаппарат имеет 22.3 Мп.";
  }
}
changeTextMobil();

//строка поиска на мобилке
const addSearchLine = () => {
  let searchLine = document.querySelector('.header__search-mobil');
  // Смена состояния бургера
  searchLine.addEventListener('click', function () {
    document.querySelector('.search-mobil').classList.toggle('visible-mobil');
  })
}
addSearchLine();

//Модальное окно
const openModal = () => {
  const btn = document.querySelector('.wrap-filter-svg');
  const modal = document.querySelector('.modal');

  btn.addEventListener('click', () => {
    modal.classList.add('modal__open');  //открывает модальное окно
  });

  modal.addEventListener('click', (event) => {
    if (event.target === modal || event.target.closest('.modal__close')) {
      modal.classList.remove('modal__open');  //закрывает модальное окно если клик на крестик или мимо модального окна
    }
  });
}
openModal();