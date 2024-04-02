import{a as b,i as s,S as w}from"./assets/vendor-b2578120.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let m=15;async function u(r,e){const i="https://pixabay.com/api/",a=new URLSearchParams({key:"42978821-e3c6f538b5791c0a766c3ba19",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:m}),t=`${i}?${a}`;return await b.get(t).then(n=>n.data.hits).catch(n=>console.log(n))}function v({webformatURL:r,largeImageURL:e,tags:i,likes:a,views:t,comments:o,downloads:n}){return`<li class="gallery-item">
        <a class="gallery-link" href= ${e}>  
            <img class="gallery-image"
                src= "${r}"
                alt = "${i}"
            />
        </a>
        <div class="container"><h3 class="header">Likes
            <p class="views">${a}</p>
        </h3>
        <h3 class="header">Views
        <p class="views">${t}</p>
        </h3>
        <h3 class="header">Comments
        <p class="views">${o}</p>
        </h3>
        <h3 class="header">Downloads
        <p class="views">${n}</p>
        </h3>
        </div>
        
    </li>`}function h(r){return r.map(v).join("")}const f=document.querySelector(".form");document.querySelector("#search");const p=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let g=1,l="";S();f.addEventListener("submit",k);async function k(r){if(r.preventDefault(),l=r.currentTarget.elements.input.value.trim(),p.innerHTML="",!l){s.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}y();try{const e=await u(l);if(c(),e.length===0){s.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const i=h(e);p.innerHTML=i,x(),E()}catch(e){c(),e.name==="TypeError"&&e.message.includes("Failed to fetch")?s.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topCenter"}):s.error({title:"Error",message:`Error: ${e.message}`,position:"topCenter"})}f.reset()}d.addEventListener("click",L);async function L(r){g+=1,y();try{const e=await u(l,g),i=h(e);p.insertAdjacentHTML("beforeend",i),x(),z(),c(),e.length<m&&(s.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}),d.style.display="none")}catch(e){s.error({color:"red",message:`❌ Error fetching more images: ${e.message}`,position:"topCenter"})}finally{c()}}function y(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",f.insertAdjacentElement("afterend",e)}}function c(){const r=document.querySelector(".loader");r&&r.remove()}function S(){d.style.display="none"}function E(){d.style.display="flex"}function z(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}function x(){new w(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
