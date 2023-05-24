import { galleryItems } from './gallery';

const pageList = document.querySelector('.gallery');

const makeGalleryMarkup = ({ preview, description, original }) => {
  return `<li class="gallery__item"><a href="" class="gallery__link" onclick="event.preventDefault()" href="${original}"><img src="${preview}" data-source="${original}" alt="${description}" width="719" height="480" class="gallery__image"</a></li>`;
};

const makePageGallery = galleryItems.map(makeGalleryMarkup).join('');
export const pageMarkUP = pageList.insertAdjacentHTML(
  'beforeend',
  makePageGallery
);
