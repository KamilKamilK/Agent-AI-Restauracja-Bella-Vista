const hamburger=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');
if(hamburger&&navMenu){hamburger.addEventListener('click',()=>{hamburger.classList.toggle('active');navMenu.classList.toggle('active')});}

document.querySelectorAll('.nav-link').forEach(l=>l.addEventListener('click',()=>{hamburger?.classList.remove('active');navMenu?.classList.remove('active')}));

document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href');if(!id||id==="#")return;const target=document.querySelector(id);if(target){e.preventDefault();const top=target.offsetTop-70;window.scrollTo({top,behavior:'smooth'})}})});

const tabs=document.querySelectorAll('.menu-tab');
const cats=document.querySelectorAll('.menu-category');
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(t=>t.classList.remove('active'));cats.forEach(c=>c.classList.remove('active'));tab.classList.add('active');document.getElementById(tab.dataset.category)?.classList.add('active')}));

function notify(msg,type='info'){const el=document.createElement('div');el.textContent=msg;el.style.cssText=`position:fixed;top:90px;right:20px;background:${type==='success'?'#28a745':type==='error'?'#dc3545':'#17a2b8'};color:#fff;padding:10px 14px;border-radius:8px;z-index:10000;box-shadow:0 8px 24px rgba(0,0,0,.2)`;document.body.appendChild(el);setTimeout(()=>el.remove(),3500)}

const contactForm=document.getElementById('contactForm');
contactForm?.addEventListener('submit',e=>{e.preventDefault();notify("Dziękujemy! Odpowiemy wkrótce.", 'success');contactForm.reset()});

const reservationForm=document.getElementById('reservationForm');
reservationForm?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(reservationForm);if(!d.get('name')||!d.get('email')||!d.get('phone')||!d.get('guests')||!d.get('date')||!d.get('time')){notify('Proszę wypełnić wszystkie wymagane pola.','error');return;}notify('Prośba o rezerwację została wysłana! Potwierdzimy wkrótce.','success');reservationForm.reset()});

document.addEventListener('DOMContentLoaded',()=>{const date=document.getElementById('resDate');if(date){date.min=new Date().toISOString().split('T')[0]}});

window.addEventListener('scroll',()=>{const nav=document.querySelector('.navbar');if(!nav)return;if(window.scrollY>100){nav.style.background='rgba(255,255,255,0.98)';nav.style.boxShadow='0 2px 30px rgba(0,0,0,0.12)'}else{nav.style.background='rgba(255,255,255,0.95)';nav.style.boxShadow='0 2px 20px rgba(0,0,0,0.1)'}}); 