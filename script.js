const toggle = document.getElementById('theme-toggle');

document.addEventListener("DOMContentLoaded", () => {
  const text = "Hi, I'm Akshat Totla — Full-Stack Developer";
  const target = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 70);
    }
  }

  typeWriter();
});

toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});



document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});



document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thanks! Your message has been sent.');
});
