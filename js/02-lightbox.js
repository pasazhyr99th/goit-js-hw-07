import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

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
            alt="${description}" />
        </a>
      </li>
    `;
    })
    .join('');
}

function onGalleryItemClick(evt) {
  evt.preventDefault();
    const lightbox = new SimpleLightbox('.gallery .gallery__link', {
        captionsData: 'alt',
        captionDelay: 250,
  });
}