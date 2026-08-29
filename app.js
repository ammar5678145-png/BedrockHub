const P=[["Orbital Strike Cannon v3","Addons","☄","Huge orbital weapons and destructive strikes.","4.9","0"],["Definitive Vibrant Visuals","Texture Packs","🌅","Richer lighting and atmosphere for Bedrock.","4.8","0"],["Skyblock Islands","Worlds","☁️","A polished survival skyblock adventure.","4.7","0"],["Medieval Warriors","Skins","🛡️","Detailed medieval character skins.","4.6","0"],["Mob Expansion","Addons","🐲","New creatures, behaviors, drops and encounters.","4.8","0"],["Pixel Realism","Texture Packs","🧱","Crisp textures for modern Bedrock.","4.5","0"],["Mega Mansion","Worlds","🏠","A detailed mansion world ready to explore.","4.7","0"],["Galaxy Warriors","Skins","🧑‍🚀","Futuristic sci-fi skins.","4.5","0"]];
const cards=document.querySelector('#cards');
function render(a=P){cards.innerHTML=a.map((p,i)=>`<article class="card"><div class="thumb">${p[2]}</div><div class="cardbody"><h3>${p[0]}</h3><p>${p[3]}</p><div class="meta"><span>★ ${p[4]}</span><span>↓ ${p[5]}</span></div><button class="btn download" data-i="${i}">Download</button></div></article>`).join('')}
render();
document.querySelector('#search').oninput=e=>{let q=e.target.value.toLowerCase();render(P.filter(p=>(p[0]+p[1]+p[3]).toLowerCase().includes(q)))};
document.querySelectorAll('.cats button').forEach(b=>b.onclick=()=>{render(P.filter(p=>p[1]===b.dataset.cat));location.hash='browse'});
document.querySelector('#file').onchange=e=>document.querySelector('#fn').textContent=e.target.files[0]?.name||'No file selected';
document.querySelector('#pub').onclick=()=>alert(document.querySelector('#file').files[0]?'The file is selected, but permanent publishing needs a storage/backend service.':'Choose a Bedrock file first.');
const modal=document.querySelector('#modal');
document.querySelector('#signin').onclick=()=>{modal.hidden=false};
document.querySelector('#close').onclick=()=>{modal.hidden=true};
document.querySelector('#doSign').onclick=()=>{const u=document.querySelector('#user').value.trim();if(!u)return alert('Enter a username.');localStorage.setItem('bedrockhub_user',u);document.querySelector('#signin').textContent='Hi, '+u;modal.hidden=true};
const saved=localStorage.getItem('bedrockhub_user');if(saved)document.querySelector('#signin').textContent='Hi, '+saved;
document.addEventListener('click',e=>{if(e.target.classList.contains('download'))alert('This project does not have an actual .mcaddon/.mcpack file attached yet. The download button is ready; once a mod file is uploaded, it can download it directly.')});