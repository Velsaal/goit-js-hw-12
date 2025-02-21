import { fetchImages } from './js/pixabay-api';
import { renderImages, clearGallery } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const loader = document.querySelector('.loader');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.createElement('button');
loadMoreBtn.textContent = 'Load more';
loadMoreBtn.classList.add('load-more');
document.body.appendChild(loadMoreBtn);
loadMoreBtn.style.display = 'none';

let currentQuery = '';
let currentPage = 1;
let totalHits = 0;

form.addEventListener('submit', async function(event) {
    event.preventDefault();
    
    currentQuery = event.target.elements.searchQuery.value.trim();
    if (!currentQuery) {
        iziToast.error({ message: 'Please enter a search term!' });
        return;
    }
    
    currentPage = 1;
    clearGallery();
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'block';
    
    try {
        const data = await fetchImages(currentQuery, currentPage);
        totalHits = data.totalHits;
        
        if (data.hits.length === 0) {
            iziToast.warning({ message: 'No images found. Try another query!' });
        } else {
            renderImages(data.hits);
            if (data.totalHits > 40) loadMoreBtn.style.display = 'block';
        }
    } catch {
        iziToast.error({ message: 'Failed to fetch images. Try again later!' });
    } finally {
        loader.style.display = 'none';
    }
});

//loadmore
loadMoreBtn.addEventListener('click', async function() {
    currentPage += 1;
    loader.style.display = 'block';
    
    try {
        const data = await fetchImages(currentQuery, currentPage);
        renderImages(data.hits);
        
        if (currentPage * 40 >= totalHits) {
            loadMoreBtn.style.display = 'none';
            iziToast.info({ message: "You've reached the end of search results." });
        }

        const firstImageCard = document.querySelector('.image-card');
        if (firstImageCard) {
            const  height  = firstImageCard.getBoundingClientRect();
            window.scrollBy({ top: height * 2, behavior: 'smooth' });
        }

    } catch (error) {
        console.error(error);
    } finally {
        loader.style.display = 'none';
    }
});
