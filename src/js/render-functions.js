import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.map(image => `
          <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
                <img src="${image.webformatURL}" alt="${image.tags}"/>
                <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                    <span> ${image.likes}</span>
                    <span> ${image.views}</span>
                    <span> ${image.comments}</span>
                    <span> ${image.downloads}</span>
                </div>
            </a>
     </li>
    `).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
    
    const lightbox = new SimpleLightbox('.gallery a');
    lightbox.refresh();
}

export function clearGallery() {
    document.querySelector('.gallery').innerHTML = '';
}

