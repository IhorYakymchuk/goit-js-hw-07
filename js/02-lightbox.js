import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// ==================
const galleryList = document.querySelector('.gallery');
const markupGallery = createGalleryItems(galleryItems);
galleryList.insertAdjacentHTML('beforeend', markupGallery)

function createGalleryItems(galleryItems) {
    return galleryItems.map(({preview,original,description}) => {return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" loading ='lazy' src="${preview}" alt="${description}" />
</a>`}).join("");
}


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });



//!!!!!! preventDefault НЕ ПОТРІБНО. тому що SimpleLightbox під капотом вже його має!



/**
  |============================
  | 2nd
  |============================
*/
