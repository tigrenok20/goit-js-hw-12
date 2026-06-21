import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import { getImagesByQuery, PER_PAGE } from './js/pixabay-api';

let query = '';
let page = 1;
let hasMorePages = false;

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('.load-more-button');
const endOfCollection = document.querySelector('.end-of-collection');

async function fetchPage() {
  showLoader();
  hideLoadMoreButton();

  try {
    const searchResponse = await getImagesByQuery(query, page);
    const items = searchResponse.hits;
    if (items.length) {
      createGallery(items);
      if (page > 1) {
        const galleryItem = document.querySelector('.gallery-item');
        const elementHeight = galleryItem.getBoundingClientRect().height;
        window.scrollBy({
          top: elementHeight * 2,
          left: 0,
          behavior: 'smooth',
        });
      }
    }
    const totalPages = searchResponse.totalHits / PER_PAGE;
    hasMorePages = totalPages > page;
    if (hasMorePages) {
      page += 1;
    } else {
      iziToast.error({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  } catch (e) {
    iziToast.error({
      message: `Error happened: ${typeof e === 'string' ? e : e.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
    if (hasMorePages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
    }
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const term = form.elements['search-text'].value.trim();
  if (!term) {
    return;
  }

  query = term;
  page = 1;
  hasMorePages = false;
  clearGallery();
  e.target.reset();
  fetchPage();
});

loadMoreButton.addEventListener('click', () => {
  fetchPage();
});
