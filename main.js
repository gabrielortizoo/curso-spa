(()=>{"use strict";const a="https://rickandmortyapi.com/api/character/",n=async n=>{const e=n?`${a}${n}`:a;try{const a=await fetch(e);return await a.json()}catch(a){console.log("Fetch error",a)}},e=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",t=()=>'\n    <div className="Error404">\n      <h2>Error 404</h2>\n    </div>\n    ',i={"/":async()=>`\n    <div class="Characters">\n      ${(await n()).results.map((a=>`\n          <article class="Characters-item">\n            <a href="#/${a.id}/">\n              <img src="${a.image}" alt="${a.name}" />\n              <h2>${a.name}</h2>\n            </a>\n          </article>\n      `)).join("")}\n    </div>\n    `,"/:id":async()=>{const a=e(),t=await n(a);return`<div className="Characters-inner">\n      <article class="Characters-card">\n        <img src="${t.image}" alt="${t.name}" />\n        <h2>${t.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodes: <pan>${t.episode.length}</pan></h3>\n        <h3>Status: <pan>${t.status}</pan></h3>\n        <h3>Specie: <pan>${t.specie}</pan></h3>\n        <h3>Gender: <pan>${t.gender}</pan></h3>\n        <h3>Origin: <pan>${t.origin.name}</pan></h3>\n        <h3>Last Location: <pan>${t.location.name}</pan></h3>\n      </article>\n    </div>`},"/contact":"Contact"},c=async()=>{const a=document.getElementById("header"),n=document.getElementById("content");a.innerHTML=await'\n    <div className="Header-main">\n      <div className="Header-logo">\n        <h1>\n          <a href="/">100tifi.co</a>\n        </h1>\n      </div>\n      <div className="Header-nav">\n        <a href="#/about/">About</a>\n      </div>\n    </div>\n    ';let c=e(),r=await(a=>a.length<=3?"/"===a?a:"/:id":`/${a}`)(c),s=i[r]?i[r]:t;n.innerHTML=await s()};window.addEventListener("load",c),window.addEventListener("hashchange",c)})();