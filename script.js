const toggle = document.getElementById('theme-toggle');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactForm = document.getElementById('contact-form');

document.addEventListener('DOMContentLoaded', () => {
  // Typewriter Effect
  const text = "Hi, I'm Akshat Totla — Full-Stack Developer";
  const target = document.getElementById('typewriter');
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }

  typeWriter();

  // Menu Toggle
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Contact Form Submission
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks! Your message has been sent.');
      this.reset(); // Optional: Reset form after submission
    });
  }
});

// Theme Toggle
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });
}
