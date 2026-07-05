window.addEventListener('load',()=>setTimeout(()=>document.getElementById('loader').classList.add('hide'),700));
const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
document.addEventListener('mousemove',e=>{const glow=document.querySelector('.hero-glow'); if(glow){glow.style.left=(e.clientX-275)+'px'; glow.style.top=(e.clientY-275)+'px';}});
