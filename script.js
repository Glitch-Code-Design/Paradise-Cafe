const swup = new Swup()

var hamburger_menu = document.querySelector('.hamburger-menu');
var wrapper = document.querySelector('.wrapper');

hamburger_menu.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});