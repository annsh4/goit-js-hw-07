import { galleryItems } from "./gallery-items.js";

const gallaryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallaryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(items) {
  return items
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
		</li>`;
    })
    .join("");
}

gallaryContainer.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") return;

  const isItemImage = evt.target.classList.contains("gallery__image");
  if (!isItemImage) return;

  const currentImageUrl = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${currentImageUrl}" width="1280" height="auto"/>`,
    {
      onShow: () => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: () => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  instance.show();

  function onEscPress(evt) {
    if (evt.code !== "Escape") return;
    instance.close();
  }
}
