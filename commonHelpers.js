import{a as l,S as d}from"./assets/vendor-58e78301.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function u(r){const s="https://pixabay.com/api/",a={key:"11070675-9db3ad99120a3eae94c3d42ec",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};return l.get(s,{params:a})}function p({previewURL:r,downloads:s,views:a,likes:o,comments:e,largeImageURL:t}){return`            <li class="card-item">
        <a href="${t}"><img class="card-img" src="${r}" alt="" title="" /></a>
        <div>
          <span class="description">
            <p class="card-title">
              Downloads: <span class="card-text">${s}</span>
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
      </li>`}function m(r){return r.map(p).join(" ")}const f=new d(".gallery a",{}),h=document.querySelector(".gallery"),i=document.querySelector(".loader"),n=document.querySelector(".search-form");n.addEventListener("submit",r=>{r.preventDefault();const s=n.elements.searchQuery.value;y(),u(s).then(({data:a})=>{const o=m(a.hits);h.innerHTML=o,f.refresh()}).catch(()=>{console.log("Try later")}).finally(g)});function y(){i.classList.remove("is-hidden")}function g(){i.classList.add("is-hidden")}
//# sourceMappingURL=commonHelpers.js.map
