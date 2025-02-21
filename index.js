import{a as m,S as g,i as l}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&d(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h="48807004-9385a8cdcbe3c5aa2453a42f7",b="https://pixabay.com/api/",L=40;async function y(r,t=1){try{return(await m.get(b,{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:t}})).data}catch(s){throw console.error("Error fetching images:",s),s}}function p(r){const t=document.querySelector(".gallery"),s=r.map(e=>`
          <li class="gallery-item">
            <a href="${e.largeImageURL}" class="gallery-link">
                <img src="${e.webformatURL}" alt="${e.tags}"/>
                <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                    <span> ${e.likes}</span>
                    <span> ${e.views}</span>
                    <span> ${e.comments}</span>
                    <span> ${e.downloads}</span>
                </div>
            </a>
     </li>
    `).join("");t.insertAdjacentHTML("beforeend",s),new g(".gallery a").refresh()}function w(){document.querySelector(".gallery").innerHTML=""}const v=document.querySelector("#search-form"),c=document.querySelector(".loader");document.querySelector(".gallery");const n=document.createElement("button");n.textContent="Load more";n.classList.add("load-more");document.body.appendChild(n);n.style.display="none";let i="",a=1,f=0;v.addEventListener("submit",async function(r){if(r.preventDefault(),i=r.target.elements.searchQuery.value.trim(),!i){l.error({message:"Please enter a search term!"});return}a=1,w(),n.style.display="none",c.style.display="block";try{const t=await y(i,a);f=t.totalHits,t.hits.length===0?l.warning({message:"No images found. Try another query!"}):(p(t.hits),t.totalHits>40&&(n.style.display="block"))}catch{l.error({message:"Failed to fetch images. Try again later!"})}finally{c.style.display="none"}});n.addEventListener("click",async function(){a+=1,c.style.display="block";try{const r=await y(i,a);p(r.hits),a*40>=f&&(n.style.display="none",l.info({message:"You've reached the end of search results."}));const t=document.querySelector(".image-card");if(t){const s=t.getBoundingClientRect();window.scrollBy({top:s*2,behavior:"smooth"})}}catch(r){console.error(r)}finally{c.style.display="none"}});
//# sourceMappingURL=index.js.map
