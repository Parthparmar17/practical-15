const hamburger = document.querySelector('#header .nav-bar .nav-list .hamburger');
const mob_menu = document.querySelector('#header .nav-bar .nav-list ul');
const header = document.querySelector('#header.contents');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mob_menu.classList.toggle('active');
});