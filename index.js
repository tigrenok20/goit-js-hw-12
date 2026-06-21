import{S as L,a as b,i as c}from"./assets/vendor-BtI-3F0k.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const v=new L(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".gallery"),u=document.querySelector(".loader"),p=document.querySelector(".load-more-container");function w(t){const o=t.map(n=>`<li class="gallery-item">
        <a class="gallery-link" href="${n.largeImageURL}">
            <img
            class="gallery-image"
            src="${n.webformatURL}"
            data-source="${n.largeImageURL}"
            alt="${n.tags}"
            width="350" height="200"
            />
            <div class="image-info">
              <div class="image-info-element">
                <span class="image-info-element-label">Likes</span>
                <span class="image-info-element-counter">${n.likes}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Views</span>
                <span class="image-info-element-counter">${n.views}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Comments</span>
                <span class="image-info-element-counter">${n.comments}</span>
              </div>
              <div class="image-info-element">
                <span class="image-info-element-label">Downloads</span>
                <span class="image-info-element-counter">${n.downloads}</span>
              </div>
            </div>
        </a>
        </li>`).join(`
`);f.insertAdjacentHTML("beforeend",o),v.refresh()}function S(){f.innerHTML=""}function P(){u.style.display="flex"}function q(){u.style.display="none"}function $(){p.style.display="flex"}function d(){p.style.display="none"}const R="https://pixabay.com/api/",M="56207103-4b28cc7dd0dd3e21e461efeb9",g=15;async function x(t,o){const n=new URLSearchParams({key:M,q:t,page:o,per_page:g,image_type:"photo",orientation:"horizontal",safesearch:!0}).toString();return(await b.get(`${R}?${n}`)).data}let y="",a=1,i=!1;const m=document.querySelector(".form"),E=document.querySelector(".load-more-button");document.querySelector(".end-of-collection");async function h(){P(),d();try{const t=await x(y,a),o=t.hits;if(o.length&&(w(o),a>1)){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}i=t.totalHits/g>a,i||c.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch(t){c.error({message:`Error happened: ${typeof t=="string"?t:t.message}`,position:"topRight"})}finally{q(),i?$():d()}}m.addEventListener("submit",t=>{t.preventDefault();const o=m.elements["search-text"].value.trim();o&&(y=o,a=1,i=!1,S(),t.target.reset(),h())});E.addEventListener("click",()=>{a+=1,h()});
//# sourceMappingURL=index.js.map
