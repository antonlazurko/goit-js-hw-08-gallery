import galleryArray from './gallery-items.js';
//Создание и рендер разметки по массиву данных и предоставленному шаблону.
const galleryListEl = document.querySelector('.gallery.js-gallery');
const makeGalleryItem = ({ preview, original, description }) => {
  const galleryItemEl = document.createElement('li');
  galleryItemEl.classList.add('gallery__item');
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery__link');
  galleryLinkEl.href = original;
  const galleryImgEl = document.createElement('img');
  galleryImgEl.classList.add('gallery__image');
  galleryImgEl.src = preview;
  galleryImgEl.dataSource = original;
  galleryImgEl.alt = description;
  galleryLinkEl.append(galleryImgEl);
  galleryItemEl.append(galleryLinkEl);
  return galleryItemEl;
};
const elements = galleryArray.map(makeGalleryItem);
galleryListEl.append(...elements);
//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
galleryListEl.addEventListener('click', onGalleryItemClick);
const modalEl = document.querySelector('.js-lightbox');
const modalImg = document.querySelector('.lightbox__image');
function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  //Подмена значения атрибута src элемента img.lightbox__image.
  modalImg.src = event.target.dataSource;
  modalImg.alt = event.target.description;
  modalEl.classList.add('is-open');
}
//Открытие модального окна по клику на элементе галереи.
const modalCloseBtn = document.querySelector(
  'button[data-action="close-lightbox"]',
);
//акрытие модального окна по клику на кнопку button[data - action= "close-modal"].

modalCloseBtn.addEventListener('click', onModalCloseBtnClick);
function onModalCloseBtnClick() {
  modalEl.classList.remove('is-open');
  modalImg.src = '';
  modalImg.alt = '';
}
