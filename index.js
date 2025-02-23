import{a as h,S as g,i}from"./assets/vendor-tnUJPedx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const b="48807004-9385a8cdcbe3c5aa2453a42f7",w="https://pixabay.com/api/",L=40;async function y(r,t=1){try{return(await h.get(w,{params:{key:b,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:L,page:t}})).data}catch(a){throw console.error("Error fetching images:",a),a}}const v=new g(".gallery a");function p(r){const t=document.querySelector(".gallery"),a=r.map(s=>`
          <li class="gallery-item">
            <a href="${s.largeImageURL}" class="gallery-link">
                <img src="${s.webformatURL}" alt="${s.tags}"/>
                <div class="info">
                <p>Likes</p>
                <p>Views</p>
                <p>Comments</p>
                <p>Downloads</p>
                    <span> ${s.likes}</span>
                    <span> ${s.views}</span>
                    <span> ${s.comments}</span>
                    <span> ${s.downloads}</span>
                </div>
            </a>
     </li>
    `).join("");t.insertAdjacentHTML("beforeend",a),v.refresh()}function E(){document.querySelector(".gallery").innerHTML=""}const f=document.querySelector("#search-form"),P=f.elements.searchQuery,d=document.querySelector(".loader");document.querySelector(".gallery");const n=document.createElement("button");n.textContent="Load more";n.classList.add("load-more");document.body.appendChild(n);n.style.display="none";let c="",l=1,m=0;f.addEventListener("submit",async function(r){if(r.preventDefault(),c=r.target.elements.searchQuery.value.trim(),!c){i.error({message:"Please enter a search term!"});return}l=1,E(),n.style.display="none",d.style.display="block";try{const t=await y(c,l);m=t.totalHits,t.hits.length===0?i.warning({message:"No images found. Try another query!"}):(p(t.hits),t.totalHits>40&&(n.style.display="block"),P.value="")}catch{i.error({message:"Failed to fetch images. Try again later!"})}finally{d.style.display="none"}});n.addEventListener("click",async function(){l+=1,d.style.display="block";try{const r=await y(c,l);p(r.hits),l*40<m?n.style.display="block":(n.style.display="none",i.info({message:"We're sorry, but you've reached the end of search results."})),window.scrollBy({top:window.innerHeight*.8,behavior:"smooth"})}catch(r){console.error("Error fetching images:",r)}finally{d.style.display="none"}});
//# sourceMappingURL=index.js.map
