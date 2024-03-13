import{a as i,S as l}from"./assets/vendor-58e78301.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function p(s){const r="https://pixabay.com/api/",a={key:"11070675-9db3ad99120a3eae94c3d42ec",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return i.get(r,{params:a})}new l(".gallery a",{});function d({previewURL:s,downloads:r,views:a,likes:o,comments:e}){return`            <li class="card-item">
        <a href="${s}"><img class="card-img" src="${s}" alt="" title="" /></a>
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
      </li>`}function u(s){return s.map(d).join(" ")}const m=document.querySelector(".gallery"),n=document.querySelector(".search-form");n.addEventListener("submit",s=>{s.preventDefault();const r=n.elements.searchQuery.value;p(r).then(({data:a})=>{const o=u(a.hits);m.innerHTML=o})});
//# sourceMappingURL=commonHelpers.js.map
