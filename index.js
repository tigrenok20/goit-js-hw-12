import{S as L,a as b,i as c}from"./assets/vendor-BtI-3F0k.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const v=new L(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector(".load-more-container");function w(t){const o=t.map(s=>`<li class="gallery-item">
        <a class="gallery-link" href="${s.largeImageURL}">
            <img
            class="gallery-image"
            src="${s.webformatURL}"
            data-source="${s.largeImageURL}"
            alt="${s.tags}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${s.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${s.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${s.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${s.downloads}</span>
              </div>
            </div>
        </a>
        </li>`).join(`
`);f.insertAdjacentHTML("beforeend",o),v.refresh()}function P(){f.innerHTML=""}function S(){u.style.display="flex"}function $(){u.style.display="none"}function q(){p.style.display="flex"}function d(){p.style.display="none"}const R="https://pixabay.com/api/",M="56207103-4b28cc7dd0dd3e21e461efeb9",g=15;async function x(t,o){const s=new URLSearchParams({key:M,q:t,page:o,per_page:g,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return(await b.get(`${R}?${s}`)).data}let y="",a=1,i=!1;const m=document.querySelector(".form"),E=document.querySelector(".load-more-button");async function h(){S(),d();try{const t=await x(y,a),o=t.hits;if(o.length&&(w(o),a>1)){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}i=t.totalHits/g>a,(t.hits.length===0||!i)&&c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){c.error({message:`Error happened: ${typeof t=="string"?t:t.message}`,position:"topRight"})}finally{$(),i?q():d()}}m.addEventListener("submit",t=>{t.preventDefault();const o=m.elements["search-text"].value.trim();o&&(y=o,a=1,i=!1,P(),t.target.reset(),h())});E.addEventListener("click",()=>{a+=1,h()});
//# sourceMappingURL=index.js.map
