import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryDiv = document.querySelector(".gallery");
const createImaneFn = createImageCard({ galleryItems });

galleryDiv.insertAdjacentHTML("beforeend", createImaneFn);

galleryDiv.addEventListener("click", callOriginalPicture);

function createImageCard({ galleryItems }) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`;
    })
    .join("");
}

function callOriginalPicture(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  const refBigImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${refBigImg}">
`);
  instance.show();
  galleryDiv.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });
}
