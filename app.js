const employees=[
 {name:'Princess Aila Macamay',role:'Travel Consultant'},
 {name:'Genesis Anthonette Quilang',role:'Travel Consultant'},
 {name:'Leslie Castillo',role:'Travel Consultant'},
 {name:'Ai-Sel',role:'Travel Consultant'},
 {name:'Nina Roxas',role:'Sales Admin Head'},
 {name:'Mex Domingo',role:'Executive'},
 {name:'Angel',role:'Sales Admin'}
];
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const loginEmployee=$('#loginEmployee');
employees.forEach((e,i)=>loginEmployee?.add(new Option(e.name,String(i))));
$('#togglePassword')?.addEventListener('click',()=>{const p=$('#loginPassword');p.type=p.type==='password'?'text':'password'});
$('#loginButton')?.addEventListener('click',()=>{const e=employees[+loginEmployee.value],p=$('#loginPassword').value.trim();if(e&&p){sessionStorage.setItem('dg_user',JSON.stringify(e));boot(e)}else $('#loginError').hidden=false});
function boot(e){$('#loginScreen').style.display='none';$('.app-shell').style.display='grid';$('#loggedInEmployee').textContent=e.name;$('#loggedInRole').textContent=e.role;showView('team-dashboard');populateAgentFilter(e);renderAll()}
function populateAgentFilter(user){const s=$('#activeAgent');if(!s)return;s.innerHTML='';employees.filter(e=>e.role==='Travel Consultant').forEach(e=>s.add(new Option(e.name,e.name)));if(user.role!=='Travel Consultant')s.hidden=false;else{s.hidden=true;s.value=user.name}}
$$('.nav-item').forEach(b=>b.addEventListener('click',()=>{if(b.id==='logoutButton'){sessionStorage.removeItem('dg_user');location.reload();return}showView(b.dataset.view)}));
function showView(id){$$('.view').forEach(v=>v.classList.remove('active'));$('#'+id)?.classList.add('active');$$('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===id))}
const clients=()=>JSON.parse(localStorage.getItem('dg_clients')||'[]');
function saveClients(v){localStorage.setItem('dg_clients',JSON.stringify(v))}
function money(n){return new Intl.Number