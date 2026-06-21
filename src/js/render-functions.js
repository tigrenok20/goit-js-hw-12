import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const simpleLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
const galleryRootElement = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const loaderMoreContainer = document.querySelector('.load-more-container');

export function createGallery(images) {
  const imagesHTML = images
    .map(
      image =>
        `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
            <img
            class="gallery-image"
            src="${image.webformatURL}"
            data-source="${image.largeImageURL}"
            alt="${image.tags}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${image.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${image.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${image.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${image.downloads}</span>
              </div>
            </div>
        </a>
        </li>`
    )
    .join('\n');

  galleryRootElement.insertAdjacentHTML('beforeend', imagesHTML);
  simpleLightbox.refresh();
}

export function clearGallery() {
  galleryRootElement.innerHTML = '';
}

export function showLoader() {
  loader.style.display = 'flex';
}

export function hideLoader() {
  loader.style.display = 'none';
}

export function showLoadMoreButton() {
  loaderMoreContainer.style.display = 'flex';
}
export function hideLoadMoreButton() {
  loaderMoreContainer.style.display = 'none';
}
