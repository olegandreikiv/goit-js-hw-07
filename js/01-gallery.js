
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL = document.querySelector('.gallery');

const addImg = galleryItems.map(({preview, original, description}) => {
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

galleryEL.addEventListener('click', oneGalleryImgClick );

function oneGalleryImgClick (evt){
  evt.preventDefault();
  
  const imageSelected = evt.target.nodeName;
   
    if (imageSelected !== 'IMG'){return;}
    
  const openModulWindow = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
      {
       
        onShow: () => {document.addEventListener("keydown", closeModal);},
       
        onClose: () => {document.removeEventListener("keydown", closeModal);},
      }
      );

     openModulWindow.show();

  function closeModal(evt) {
    if (evt.key === "Escape") {
        openModulWindow.close();
    }
  }
};




