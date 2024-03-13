import{a as d,S as u,i as n}from"./assets/vendor-da186403.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(s){const r="https://pixabay.com/api/",a={key:"11070675-9db3ad99120a3eae94c3d42ec",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(r,{params:a})}function m({previewURL:s,downloads:r,views:a,likes:o,comments:e,largeImageURL:t}){return`            <li class="card-item">
        <a href="${t}"><img class="card-img" src="${s}" alt="" title="" /></a>
        <div>
          <span class="description">
            <p class="card-title">
              Downloads: <span class="card-text">${r}</span>
            </p>
            <p class="card-title">
              Likes: <span class="card-text">${o}</span>
            </p>
            <p class="card-title">
              Views: <span class="card-text">${a}</span>
            </p>
            <p class="card-title">
              Comments: <span class="card-text">${e}</span>
            </p></span
          >
        </div>
      </li>`}function f(s){return s.map(m).join(" ")}const h=new u(".gallery a",{}),g=document.querySelector(".gallery"),l=document.querySelector(".loader"),c=document.querySelector(".search-form");c.addEventListener("submit",s=>{s.preventDefault();const r=c.elements.searchQuery.value;if(!r){n.error({message:"Feild should not be empty!"});return}y(),p(r).then(({data:a})=>{const o=f(a.hits);g.innerHTML=o,h.refresh(),a.hits.length==0&&n.error({message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(()=>{n.error({message:"Enter something"})}).finally(L)});function y(){l.classList.remove("is-hidden")}function L(){l.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
