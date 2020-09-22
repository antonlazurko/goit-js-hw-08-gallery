import galleryArray from './gallery-items.js';
const galleryListEl = document.querySelector('.gallery.js-gallery');
const makeGalleryItem = ({ preview, original, description }) => {
  const galleryEl = document.createElement('li');
  galleryEl.classList.add('gallery__item');
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery__link');
  galleryLinkEl.href = original;
  const galleryImgEl = document.createElement('img');
  galleryImgEl.classList.add('gallery__image');
  galleryImgEl.src = preview;
  galleryImgEl.dataSource = original;
  galleryImgEl.alt = description;
  galleryEl.append(galleryLinkEl, galleryImgEl);
  return galleryEl;
};
const elements = galleryArray.map(makeGalleryItem);
galleryListEl.append(...elements);
console.log(galleryListEl);
