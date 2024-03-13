// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

const lightbox = new SimpleLightbox('.gallery a', { /* options */ });
function imgTemlate({ previewURL, downloads, views, likes, comments }) {
    return `            <li class="card-item">
        <a href="${previewURL}"><img class="card-img" src="${previewURL}" alt="" title="" /></a>
        <div>
          <span class="description">
            <p class="card-title">
              Downloads: <span class="card-text">${downloads}</span>
            </p>
            <p class="card-title">
              Likes: <span class="card-text">${likes}</span>
            </p>
            <p class="card-title">
              Views: <span class="card-text">${views}</span>
            </p>
            <p class="card-title">
              Comments: <span class="card-text">${comments}</span>
            </p></span
          >
        </div>
      </li>`
}
export function imgsTemplate(arr) {
    return arr.map(imgTemlate).join(' ');
}
