import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMackup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMackup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join('');
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const isGalleryImageEl = evt.target.nodeName;

  if (isGalleryImageEl !== 'IMG') {
    return;
  }

  const largeImageSrc = evt.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${largeImageSrc}" width="1100" height="800">
  `);

  instance.show();

  document.addEventListener('keydown', closeModalWindow);

  function closeModalWindow(evt) {
    if (evt.keyCode === 27) {
      instance.close();
    }
  }

  instance.element().addEventListener('click', () => {
    instance.close();
    document.removeEventListener('keydown', closeModalWindow);
  });
}