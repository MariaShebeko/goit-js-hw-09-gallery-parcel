import refs from "./refs";
import galleryItems from "./data/gallery-items";
import { onRightArrowClick, onLeftArrowClick } from "./flipping";
import { galleryMarkup } from "./gallery-markup";
import { keyPress } from "./keyPress";
import { getImageAttribute } from "./getAttribute";
import { onModalOpen, onModalClose, onBackdropClick } from "./modal-window";

refs.galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

refs.galleryContainer.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(evt) {
  evt.preventDefault();
  const isGalleryImage = evt.target.classList.contains("gallery__image");
  if (!isGalleryImage) {
    return;
  }
  onModalOpen();
  getImageAttribute(evt.target.dataset.source, evt.target.alt);
}

refs.lightboxButtonEl.addEventListener("click", onModalClose);
refs.lightboxOverlayEl.addEventListener("click", onBackdropClick);
