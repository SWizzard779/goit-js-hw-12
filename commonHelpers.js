import{a as x,i as s,S as b}from"./assets/vendor-b2578120.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();let m=15;async function u(r,e){const i="https://pixabay.com/api/",a=new URLSearchParams({key:"42978821-e3c6f538b5791c0a766c3ba19",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:m}),t=`${i}?${a}`;return await x.get(t).then(n=>n.data.hits).catch(n=>console.log(n))}function w({webformatURL:r,largeImageURL:e,tags:i,likes:a,views:t,comments:o,downloads:n}){return`<li class="gallery-item">
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
        
    </li>`}function h(r){return r.map(w).join("")}const g=document.querySelector(".form");document.querySelector("#search");const p=document.querySelector(".gallery"),d=document.querySelector(".load-btn");let f,l="";console.trace();L();g.addEventListener("submit",v);async function v(r){if(r.preventDefault(),l=r.currentTarget.elements.input.value.trim(),p.innerHTML="",f=1,!l){s.warning({title:"Caution",message:"You forgot to fill in the form!",position:"topCenter"});return}y();try{const e=await u(l);if(c(),e.length===0){s.error({title:"Search result",message:"Sorry, there are no images matching your search query. Please try again.",position:"topCenter"});return}const i=h(e);p.innerHTML=i;let a=new b(".gallery a",{captionDelay:250,captionsData:"alt"}).refresh();S()}catch(e){c(),e.name==="TypeError"&&e.message.includes("Failed to fetch")?s.error({title:"Network Error",message:"Unable to connect. Please check your internet connection and try again.",position:"topCenter"}):s.error({title:"Error",message:`Error: ${e.message}`,position:"topCenter"})}g.reset()}d.addEventListener("click",k);async function k(r){f+=1,y();try{const e=await u(l,f),i=h(e);p.insertAdjacentHTML("beforeend",i),E(),c(),e.length<m&&(s.warning({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topCenter"}),d.style.display="none")}catch(e){s.error({color:"red",message:`❌ Error fetching more images: ${e.message}`,position:"topCenter"})}finally{c()}}function y(){if(!document.querySelector(".loader")){const e=document.createElement("div");e.className="loader",g.insertAdjacentElement("afterend",e)}}function c(){const r=document.querySelector(".loader");r&&r.remove()}function L(){d.style.display="none"}function S(){d.style.display="flex"}function E(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
