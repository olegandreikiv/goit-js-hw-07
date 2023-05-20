import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEL = document.querySelector('.gallery');

const addImg = galleryItems.map(({ preview, original, description }) => {
    return `  <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"/>
            </a>`;
}
).join('');
galleryEL.insertAdjacentHTML("afterbegin", addImg);

galleryEL.addEventListener('click', galleryImgClick);

function galleryImgClick(evt) {
    const imgSelected = ev.target.getAttribute('data-source');

    evt.preventdefault();

    if(!imgSelected){return}
}

new SimpleLightbox(".gallery a", {captionDelay: 250, showCounter:false });