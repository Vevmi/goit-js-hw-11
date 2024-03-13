import { searchImages } from "./js/pixabay-api"
import { imgsTemplate } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const lightbox = new SimpleLightbox('.gallery a', { });
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader');

const formElem = document.querySelector('.search-form')
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = formElem.elements.searchQuery.value
    if (!userData) {
                iziToast.error({
    message: 'Feild should not be empty!'
});
        return
    }
    showLoader()
    searchImages(userData).then(({ data }) => {
        const markup = imgsTemplate(data.hits); 
        gallery.innerHTML = markup
        lightbox.refresh();
        if (data.hits.length == 0) {
            iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!'
});
        }
    }).catch(() => {
        iziToast.error({
    message: 'Enter something'
});
    }).finally(hideLoader);
})


function showLoader() {
    loader.classList.remove('is-hidden');
}

function hideLoader() {
    loader.classList.add('is-hidden');
}