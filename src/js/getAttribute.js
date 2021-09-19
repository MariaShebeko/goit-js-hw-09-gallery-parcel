import refs from "./refs";

export function getImageAttribute(src, alt) {
  refs.lightboxImageEl.src = src;
  refs.lightboxImageEl.alt = alt;
}
