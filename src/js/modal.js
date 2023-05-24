import * as basicLightbox from 'basiclightbox';
const pageGallery = document.querySelector('.gallery');

export const pageModal = pageGallery.addEventListener('click', event => {
  const instance = basicLightbox.create(`
  <div class="modal">
       <img src="${event.target.dataset.source}" alt="${event.target.alt}" width="100%" height="100%">
  </div>`);
  instance.show();
  document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  });
});
