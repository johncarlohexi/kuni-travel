const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const nav1 = document.querySelector('.nav1');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
    nav1.classList.toggle('active')
})

document.querySelectorAll('.navlink').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}))