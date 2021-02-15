// ** This is add sticky class in header
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// ** This section is to control menu toggle
const menu = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menu.addEventListener('click', toggleMenu);
// navigation.children is HTMLCollection. Not an array.
// convert HTMLCollection convert to array
let children = [...navigation.children];

children.forEach(child => {
    child.addEventListener('click', toggleMenu);
});

function toggleMenu() {
    navigation.classList.toggle('open');
    menu.classList.toggle('open');
}