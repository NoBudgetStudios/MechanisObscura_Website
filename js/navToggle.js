const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('nav');
const navLinks = navMenu.querySelectorAll('a');

// Toggle open/close
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Close after clicking a link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
