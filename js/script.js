document.addEventListener('DOMContentLoaded',function(){
  // Year in footer
  const y = new Date().getFullYear();
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = y;

  // Mobile nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if(navToggle && siteNav){
    navToggle.addEventListener('click',()=> siteNav.classList.toggle('open'))
  }

  // Smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth',block:'start'});
        if(siteNav) siteNav.classList.remove('open');
      }
    })
  })

  // Simple contact form validation
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if(form){
    form.addEventListener('submit',function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if(!name||!email||!message){
        status.textContent = 'Please complete all fields.';
        status.style.color = '#f87171';
        return;
      }
      // Simulate submit
      status.textContent = 'Sending…';
      setTimeout(()=>{
        status.style.color = '#86efac';
        status.textContent = 'Request sent. Our client team will contact you shortly.';
        form.reset();
      },900);
    })
  }
})
