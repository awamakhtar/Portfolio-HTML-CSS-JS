 // Menu hamburger
 const hamburger = document.querySelector('.hamburger');
 const navMenu = document.querySelector('.nav-menu');
 const closeMenu = document.querySelector('.close-menu');
 const navLinks = document.querySelectorAll('.nav-link');
 hamburger.addEventListener('click', () => {
     navMenu.classList.add('active');
     document.body.style.overflow = 'hidden';
 });
 closeMenu.addEventListener('click', () => {
     navMenu.classList.remove('active');
     document.body.style.overflow = 'auto';
 });
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         navMenu.classList.remove('active');
         document.body.style.overflow = 'auto';
     });
 });
 // Animation au défilement
 const observerOptions = {
     threshold: 0.1,
     rootMargin: '0px 0px -100px 0px'
 };
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible');
         }
     });
 }, observerOptions);
 document.querySelectorAll('.project-card').forEach(card => {
     observer.observe(card);
 });
 // Header scroll effect
 window.addEventListener('scroll', () => {
     const header = document.getElementById('header');
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });
 // Formulaire de contact
 document.getElementById('contactForm').addEventListener('submit', function(e) {
     e.preventDefault();
     alert('Merci pour votre message ! Je vous répondrai bientôt.');
     this.reset();
 });