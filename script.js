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


  // Display Random Quote
  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“Games give us a chance to excel.” – Jane McGonigal",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“The best way to predict the future is to invent it.” – Alan Kay",
    "“Creativity is intelligence having fun.” – Albert Einstein", "Welcome to the void – the emptiness before the awesomeness. Spoiler alert: Awesomeness is on its way!",
    "404: Creativity not found... yet. Check back soon for a burst of imagination!",
    "This website is like a blank canvas – waiting for the Picasso of web design to make a masterpiece. Spoiler: I'm the Picasso.",
    "Warning: This site may contain traces of nothing. I'm working on importing the good stuff, like unicorns and rainbows.",
    "Currently in stealth mode. If websites could wear ninja suits, this one totally would.",
    "Just like a good book, this website is still in its prologue. The plot thickens, and so will the content.",
    "Currently in the 'before' picture stage of website transformation. Soon to be an 'after' that'll blow your digital mind.",
    "404: Sense of purpose not found. But fear not, it's on my to-do list, right after 'conquer the internet.",
    "Hold tight! This website is in its larval stage, transforming into a beautiful internet butterfly. Or maybe a fire-breathing dragon. We'll see.",
    "No pixels were harmed in the making of this empty website. They're just on vacation, sipping digital cocktails.",
    "This website is like a new smartphone out of the box – sleek, shiny, and devoid of apps. Soon to be fully loaded!",
    "Current status: Empty canvas syndrome. But fear not, the artist is preparing an epic masterpiece.",
    "Greetings from the void! It's just like outer space, but with more potential for cat memes.",
    "Warning: Low content zone. You might experience mild boredom. Remedies include patience and a sprinkle of anticipation.",
    "They say Rome wasn't built in a day. Well, my website isn't Rome, but it's getting there.",
    "Undergoing a digital metamorphosis. Expect a butterfly, not a caterpillar.",
    "Building a website is like building a sandwich. It takes time, the right ingredients, and occasionally, a bit of mustard for extra flavor.",
    "Currently under construction – I promise it's not just procrastination; it's a masterpiece in the making!"
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const quoteElement = document.getElementById('randomQuote');
    if (quoteElement) {
        quoteElement.textContent = randomQuote;
    }

});