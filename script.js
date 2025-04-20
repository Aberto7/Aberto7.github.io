document.addEventListener('DOMContentLoaded', function() {
  // Theme Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const body = document.body;
  
  // Check for saved theme preference or use preferred color scheme
  const savedTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  body.setAttribute('data-theme', savedTheme);
  
  themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
  });
  
  // Mobile Navigation
  const hamburger = document.querySelector('.hamburger');
  const navList = document.querySelector('.nav-list');
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navList.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a nav link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navList.classList.remove('active');
      });
  });
  
  // Sticky Header on Scroll
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 50);
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });
  
  // Active Nav Link on Scroll
  const sections = document.querySelectorAll('section');
  window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.scrollY >= sectionTop - 200) {
              current = section.getAttribute('id');
          }
      });
      
      document.querySelectorAll('.nav-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });
  
  // Animate Progress Bars on Scroll
  const skillItems = document.querySelectorAll('.skill-item');
  const animateProgressBars = () => {
      skillItems.forEach(item => {
          const progress = item.querySelector('.progress');
          const percent = item.querySelector('.skill-percent').textContent;
          
          if (isElementInViewport(item) && !progress.style.width) {
              progress.style.width = percent;
          }
      });
  };
  
  const isElementInViewport = (el) => {
      const rect = el.getBoundingClientRect();
      return (
          rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.bottom >= 0
      );
  };
  
  window.addEventListener('scroll', animateProgressBars);
  window.addEventListener('load', animateProgressBars);
  
  // Set Current Year in Footer
  document.getElementById('year').textContent = new Date().getFullYear();
  
  // Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Here you would typically send the form data to a server
          // For this example, we'll just show an alert
          alert('Thank you for your message! I will get back to you soon.');
          this.reset();
      });
  }
  
  // Animate Elements on Scroll
  const animateOnScroll = () => {
      const elements = document.querySelectorAll('.about-content, .skills-content, .projects-grid, .education-item, .contact-content');
      
      elements.forEach(element => {
          if (isElementInViewport(element) && !element.classList.contains('animate')) {
              element.classList.add('animate');
          }
      });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
});