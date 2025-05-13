const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const links = document.querySelectorAll('.nav-list a');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
  });
});