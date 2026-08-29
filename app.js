const P=[
['Orbital Witherskull Cannon','Wither','☠️','Thousands of wither skulls in concentric orbital rings; designed to create a huge crater.','Modrinth','https://modrinth.com/datapack/orbital-witherskull-cannon'],
['Orbital Strike Cannon — Wither Nuke','Wither','💀','Orbital Strike Cannon project with a Wither Nuke payload transferred into the project.','Modrinth','https://modrinth.com/datapack/orbital-strike-cannon-datapack'],
['Orbital Strike+ — Wither Skull Cannon','Wither','☄️','Orbital Strike+ includes a downward dome of blue wither skulls and fishing-rod firing.','Modrinth','https://modrinth.com/mod/orbital-strike%2B'],
['Wither Orbital Strike Cannon','Wither','🔵','Blue wither-skull orbital strike using a fishing rod; listed as a Java Paper/Spigot plugin.','Modrinth','https://modrinth.com/plugin/wither-orbital-strike-cannon'],
['8 Custom Orbital Strike Cannon — Wither Storm','Wither','🌩️','A custom-cannon plugin featuring a Wither Orbital Storm plus other orbital weapons.','Modrinth','https://modrinth.com/plugin/8-custom-orbital-strike-cannon'],
['Orbital Strike Cannon By Itz — Wither Cannon','Wither','💥','Multi-payload orbital cannon plugin that includes a blue-witherskull cannon.','Modrinth','https://modrinth.com/plugin/orbital-strike-cannon-by-itz']
];
const cards=document.querySelector('#cards');
function render(list=P){cards.innerHTML=list.map((p,i)=>`<article class="card"><div class="thumb">${p[2]}</div><div class="cardbody"><span class="tag">${p[1]}</span><h3>${p[0]}</h3><p>${p[3]}</p><div class="meta"><span>Bedrock recreation</span><a href="${p[5]}" target="_blank" rel="noopener">Original ↗</a></div><button class="btn request" data-i="${i}">Bedrock version</button></div></article>`).join('')}
render();
const search=document.querySelector('#search');
search.oninput=e=>{const q=e.target.value.toLowerCase();render(P.filter(p=>(p[0]+' '+p[3]).toLowerCase().includes(q)))};
document.querySelector('#sort').onchange=e=>{const list=[...P];if(e.target.value==='name')list.sort((a,b)=>a[0].localeCompare(b[0]));render(list)};
document.querySelector('#file').onchange=e=>document.querySelector('#fn').textContent=e.target.files[0]?.name||'No file selected';
document.querySelector('#pub').onclick=()=>{const f=document.querySelector('#file').files[0],s=document.querySelector('#status');if(!f){s.textContent='Choose a real .mcaddon, .mcpack, or .mcworld file first.';return}const ok=/\.(mcaddon|mcpack|mcworld)$/i.test(f.name);s.textContent=ok?'✓ Bedrock file detected: '+f.name:'✕ Unsupported file type. Use .mcaddon, .mcpack, or .mcworld.'};
document.addEventListener('click',e=>{if(e.target.classList.contains('request')){const p=P[Number(e.target.dataset.i)];alert('Bedrock recreation requested for: '+p[0]+'\n\nThe original Modrinth project is Java Edition. This site will only offer an original Bedrock recreation when a real, tested Bedrock file is available.')}});
const modal=document.querySelector('#modal');
document.querySelector('#signin').onclick=()=>{modal.hidden=false};
document.querySelector('#close').onclick=()=>{modal.hidden=true};
document.querySelector('#doSign').onclick=()=>{const u=document.querySelector('#user').value.trim();if(!u)return alert('Enter a username.');localStorage.setItem('bedrockhub_user',u);document.querySelector('#signin').textContent='Hi, '+u;modal.hidden=true};
const saved=localStorage.getItem('bedrockhub_user');if(saved)document.querySelector('#signin').textContent='Hi, '+saved;