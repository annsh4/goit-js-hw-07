import { galleryItems } from './gallery-items.js';

const gallaryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
gallaryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<li>
			<a class="gallery__link" href="${original}">
				<img
					class="gallery__image"
					src="${preview}"
					alt="${description}"
				/>
			</a>
		</li>`;
    })
    .join("");
}
