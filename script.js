var hamburger_menu = document.querySelector('.hamburger-menu');
var wrapper = document.querySelector('.wrapper');

hamburger_menu.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

hamburger_menu.addEventListener('click', () => {
    document.body.classList.toggle('no-scroll');
});