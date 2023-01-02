// Mobile-menu
const menu = document.querySelector('.nav-link-container');
const menuBtn = document.querySelector('.fa-bars');
const closeBtn = document.querySelector('.fa-x');
const link = document.querySelector('.nav-link');
function Menu() {
  menu.classList.toggle('on-of');
  menuBtn.classList.toggle('on-of');
  closeBtn.classList.toggle('on-of');
}
menuBtn.addEventListener('click', Menu);
closeBtn.addEventListener('click', Menu);
link.addEventListener('click', Menu);