import { searchImages } from "./js/pixabay-api"
import { imgsTemplate } from "./js/render-functions";
const gallery = document.querySelector('.gallery')

const formElem = document.querySelector('.search-form')
formElem.addEventListener('submit', (e) => {
    e.preventDefault();
    const userData = formElem.elements.searchQuery.value
    searchImages(userData).then(({ data }) => {
        const markup = imgsTemplate(data.hits); 
        gallery.innerHTML = markup
    });
    
})